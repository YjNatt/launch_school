/* function crunch
 * input: string
 * output: string
 * rules: collapse duplicated characters to a single character
 *
 * algorith:
 * have variable to keep track of the new string
 * loop from 0 to the length of the string - 1 (number is to keep track of index)
 *   if string at current index is different to the last character in the new string
 *     add character to new string
 *   else
 *     continue
 * return new string
 */
 let crunch = (str) => {
   let newStr = '';
 
   for (let index = 0; index < str.length; index += 1) {
     let regex = new RegExp(str[index] + '$')

     if (!newStr.match(regex)) {
       newStr += str[index];
     }
   }
 
   console.log(newStr);
 };

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
