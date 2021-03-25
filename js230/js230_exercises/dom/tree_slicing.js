function sliceTree(idStart, idEnd) {
  let firstNode = document.getElementById(idStart);
  let endNode = document.getElementById(idEnd);

  if (!firstNode || !endNode) {
    return undefined;
  }

  let tree = [];
  let currentNode;

  do {
    currentNode = endNode;
    tree.unshift(currentNode.tagName);
    endNode = endNode.parentNode;
  } while (currentNode.id !== String(idStart) && endNode.tagName !== 'BODY');

  return (currentNode.tagName !== 'BODY' && currentNode.id === String(idStart)) ? tree : undefined;
}
