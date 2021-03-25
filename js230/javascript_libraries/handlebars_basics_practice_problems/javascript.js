let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
  tags: ['abc1', 'abc2', 'xyz1', 'xyz2'],
};

let post2 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 2, 2015',
  body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
};

let posts = [post1, post2];

document.addEventListener('DOMContentLoaded', () => {
  const template = Handlebars.compile(document.querySelector('#post').innerHTML);
  const partial = Handlebars.registerPartial('tag', document.querySelector('#tag').innerHTML);

  $('body').append(template({ posts: posts }));
});
