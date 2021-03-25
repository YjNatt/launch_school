function domTreeTracer(id) {
  const tree = [];
  let currentNode = document.getElementById(id);

  while (currentNode.nodeName !== 'BODY') {
    let parentNode = currentNode.parentNode;
    let siblingNodes = Array.from(parentNode.children);
    tree.push(siblingNodes.map(node => node.nodeName));
    currentNode = parentNode;
  }

  return tree;
}

