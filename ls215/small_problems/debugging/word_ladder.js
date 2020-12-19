let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
})

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail

// Missing semi-colons on lines 1, 5, 8, 11
