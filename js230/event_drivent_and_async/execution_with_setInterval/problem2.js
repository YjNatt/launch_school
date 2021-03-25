let id;

function startCounting() {
  let count = 0;
  id = setInterval(() => {
    console.log(String(count));
    count += 1;
  }, 1000);
}

function stopCounting() {
  clearInterval(id);
}
