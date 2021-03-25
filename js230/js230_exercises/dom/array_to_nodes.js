function arrayToNodes([nodeName, childNodes]) {
  const parent = document.createElement(nodeName);

  if (childNodes.length > 0) {
    childNodes.forEach(childNode => {
      parent.appendChild(arrayToNodes(childNode));
    });
  }

  return parent;
}

