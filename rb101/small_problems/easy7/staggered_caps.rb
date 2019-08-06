=begin
input: string
output: new string; every other character is uppercase rest is lowercase
rules: characters that are not letters should not be changed
       however, they do count as characters when switiching between lower and uppercase

algorithm:
make string all lowercase
on each character if the index is even
  upcase the character
=end

def staggered_case(str)
  arr = str.downcase.chars
  arr.each_with_index { |char, index| char.upcase! if index.even? }
  arr.join
end

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'