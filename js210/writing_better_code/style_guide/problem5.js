let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; pages += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
}

read(400);
