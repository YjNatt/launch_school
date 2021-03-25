function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    return !parentElement.addEventListener(eventType, event => {
      let selectorParts = selector.split(' ');
      let target = event.target;

      while (selectorParts.length > 0) {
        if (target.tagName !== selectorParts.pop().toUpperCase()) {
          return;
        }

        target = target.parentElement;
      }

      callback(event);
    });
  }
}

// LaunchSchool solution
function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    return !parentElement.addEventListener(eventType, event => {
      const validTargets = Array.prototype.slice.call(parentElement.querySelectorAll(selector));
      if (validTargets.includes(event.target)) {
        callback(event);
      }
    });
  }
}
