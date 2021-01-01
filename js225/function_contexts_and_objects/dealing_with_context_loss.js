/* 1.
 * Output: undefined undefined is a undefined.
 * Reason: - since the function getDescription is passed to logReturnVal,
 *           that means the original context associated with getDescription 
 *           is lost and now points to the global object.
 */
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

// 2.
function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

// 3.
let getTurkDescription = turk.getDescription.bind(turk);

/* 4.
 * No because the context bound to the function expression passed to forEach
 * is the global object.
 *
 * This happens because functions as arguments lose the surrounding context.
 */

// 5.
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

// 6.
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    let self = this;

    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};

// 7.
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

// 8.
// 0, because inner functions lose the outer object as context. Thus the reassignment does not affect the
// object foo.a

// 9.
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

//9
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
    increment.apply(this);
    increment.apply(this);
  }
};
