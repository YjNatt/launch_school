// Line 10 logs: 40
// Line 13 logs: 45
//
// functions retain access to variables in an enclosing scope,
// and the variable's value is dynamically looked up each time
// the function is called. This is why when startingBalance is
// reassigned on line 9 and line 12 it effects the return value
// of the function totalPayable.
