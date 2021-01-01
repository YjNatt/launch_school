function myBind(func, context) {
  return newFunc(...args) {
    return func.call(context, ...args);
  };
}
