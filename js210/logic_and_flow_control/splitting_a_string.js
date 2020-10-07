let splitString = function(string, delimiter) {
  if (delimiter === undefined) {
    console.log('Error: No delimiter');
    return;
  }

  let bufferStr = ''
  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];

    if (currentChar === delimiter) {
      console.log(bufferStr);
      bufferStr = '';
    } else if (delimiter === '') {
      console.log(currentChar);
    } else {
      bufferStr += string[index];
    }
  }
  
  if (bufferStr) console.log(bufferStr);
};

 splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

 splitString('hello');
// logs:
// ERROR: No delimiter

 splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

 splitString('hello', ';');
// logs:
// hello

 splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
