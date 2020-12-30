/*
 *  1. Output:
 *    - 'Hello from the function scope!';
 *    - 'Hello from the global scope!';
 *
 *  On line 3 inside the function body the argument `message` is reassigned
 *  to a new string, but it does not effect the variable declared in the
 *  global scope because the parameter `message` variable shadows the outer
 *  scope variable `message`
 *
 *  2. Output:
 *    - { message: 'Greetings from the global scope!' };
 *    - { message: 'Greetings from the global scope!' };
 *
 *  Objects in javascript are mutable because they are pass by reference. As
 *  a result the reassignment `myObj.messages` in the function scope is
 *  reflected in the global scope
 *
 *  3. Output:
 *    - 'Hello from the function scope!';
 *    - 'Hello from the function scope!';
 *
 *  4. Output:
 *    - false
 *    - true
 *
 *    Since newObj is assigned the same object as obj, the reassignment to
 *    newObj is reflected on obj
 *
 *  5. reassignment of a variable is not mutating the object
 */
