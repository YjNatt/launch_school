function myBind(func, context, ...args1) {
  return newFunc(...args2) {
    let allArgs = args1.concat(args2);
    return func.apply(context, allArgs);
  };
}
