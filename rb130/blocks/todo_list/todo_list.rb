class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end
end

class TodoList
  attr_accessor :title

  def initialize(title)
    @title = title
    @todos = []
  end

  def add(todo)
    if todo.class == Todo
        @todos << todo 
    else
        raise TypeError.new("Can only add Todo Objects")
    end
  end

  def size
    todos.size
  end

  def first
    todos.first
  end

  def last
    todos.last
  end

  def to_a
    todos
  end

  def done?
    todos.all? { |todo| todo.done? == true }
  end

  def item_at(index)
    todos.fetch(index)
  end

  def mark_done_at(index)
    self.item_at(index).done!
  end

  def mark_undone_at(index)
    self.item_at(index).undone!
  end

  def done!
    todos.each { |todo| todo.done! }
  end

  def shift
    todos.shift
  end

  def pop
    todos.pop
  end

  def remove_at(index)
    element = todos.delete_at(index)
    element ? element : (raise IndexError.new("Out of bounds"))
  end

  def to_s
    description = "---- Today's Todos ----\n"
    todos.each { |todo| description << (todo.to_s << "\n")}
    description
  end

  private

  attr_reader :todos

end