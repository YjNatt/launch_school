function isInvalidSwap(element1, element2) {
  return ((!element1 || !element2) ||
         element1.contains(element2) || element2.contains(element1));
}

function nodeSwap(nodeId1, nodeId2) {
  const element1 = document.getElementById(nodeId1);
  const element2 = document.getElementById(nodeId2);

  if (isInvalidSwap(element1, element2)) {
    return undefined;
  }

  const parent1 = element1.parentNode;
  const parent2 = element2.parentNode;
  const tempNode1 = document.createElement('tempNode');
  const tempNode2 = document.createElement('tempNode');

  parent1.replaceChild(tempNode1, element1);
  parent2.replaceChild(tempNode2, element2);
  parent1.replaceChild(element2, tempNode1);
  parent2.replaceChild(element1, tempNode2);

  return true;
}
