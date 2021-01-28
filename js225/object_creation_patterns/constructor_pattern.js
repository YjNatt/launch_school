// 1.
// constructor functions are Capitalized

// 2.
// In order to invoke the function Lizard and return an
// instance of a Lizard type, we must use the keyword `new`.

// 3.
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
