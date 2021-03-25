function delayLog() {
  for (let count = 1; count <= 10; count += 1) {
    setTimeout(() => {
      console.log(String(count));
    }, count * 1000);
  }
}

delayLog();

