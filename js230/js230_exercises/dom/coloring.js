function colorGeneration(generation) {
  let currentGeneration = 0;
  let currentNodes = [document.body];

  while (currentGeneration < generation) {
    currentGeneration += 1;
    currentNodes = currentNodes.map(node => Array.from(node.children)).flat();
  }

  if (currentGeneration > 0) {
    currentNodes.forEach(node => node.classList.add('generation-color'));
  }
}

