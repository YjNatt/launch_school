/*
 *  input: nothing
 *  output: an array of subarrays
 *  rules: - Convert the DOM to nested arrays
 *         - Start with the body
 *         - each element in the DOM is represented as such:
 *          - ['PARENT_TAG_NAME', [children]]
 *         - If there are no children the it will be an empty array
 *
 *  algorithm
 *
 *  - initialize array empty to tree
 *  - start
 */

function nodesToArr() {
  function isParent(element) {
    return element.children.length > 0;
  }

  function getChildren(element) {
    if (!isParent(element)) {
      return [element.tagName, []];
    }

    let children = [...element.children].map(getChildren);
    return [element.tagName, children];
  }

  return getChildren(document.body);
}
