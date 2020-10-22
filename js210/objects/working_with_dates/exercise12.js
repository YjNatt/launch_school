let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today === nextWeek);

/* Objects compare to other objects are true only when they are the same object, otherwise
 * they are false, even though they have the same values for properties.
