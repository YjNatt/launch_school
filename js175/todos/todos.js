const express = require('express');
const morgan = require('morgan');
const flash = require('express-flash');
const session = require('express-session');
const { body, validationResult } = require('express-validator');
const TodoList = require('./lib/todolist');
const { sortTodoLists, sortTodos } = require('./lib/sort');


const app = express();
const host = 'localhost';
const port = 3000;

let todoLists = require('./lib/seed-data');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(morgan('common'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  name: 'launch-school-todos-session-id',
  resave: false,
  saveUninitialized: true,
  secret: 'This is not very secure',
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

// Find a todo list with the indicated Id. returns undefined if not found.
const loadTodoList = todoListId => {
  return todoLists.find(todoList => todoList.id === todoListId);
};


app.get('/', (req, res) => {
  res.redirect('/lists');
});

app.get('/lists', (req, res) => {
  res.render('lists', {
    todoLists: sortTodoLists(todoLists),
  });
});

app.get('/lists/new', (req, res) => {
  res.render('new-list');
});

app.post("/lists",
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom(title => {
        let duplicate = todoLists.find(list => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,
      });
    } else {
      todoLists.push(new TodoList(req.body.todoListTitle));
      req.flash("success", "The todo list has been created.");
      res.redirect("/lists");
    }
  }
);

app.get('/lists/:todoListId', (req, res, next) => {
  let listId = Number(req.params.todoListId);
  let todoList = loadTodoList(listId);
  if (todoList) {
    res.render('list', {
      todoList: todoList,
      todos: sortTodos(todoList),
    });
  } else {
    next(new Error('Not found.'));
  }
});

app.post('/lists/:todoListId/todos/:id/toggle', (req, res) => {
  let todoListId = req.params.todoListId;
  let id         = req.params.id;
  let todoList   = loadTodoList(Number(todoListId));
  let todo       = todoList.findById(Number(id));

  if (todo) {
    todo.isDone() ? todo.markUndone() : todo.markDone();
  }

  res.redirect(`/lists/${todoListId}`);
});

app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
})

app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}.`);
});