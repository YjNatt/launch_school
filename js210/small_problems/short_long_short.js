let shortLongShort = (str1, str2) => {
  let str = str1.length > str2.length ? str2 + str1 + str2 : str1 + str2 + str1;
  console.log(str);
};

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');
