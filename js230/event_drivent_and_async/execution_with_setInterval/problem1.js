function startCounting() {
  let count = 0;
  setInterval(() => {
    console.log(String(count));
    count += 1;
  }, 1000);
}
