=begin
input: string
output: string
rules:  if word is >= 5 reverse the letters
        if word is < 5 letters stay the same
Data structure/algorithm
split the string into an array with words as elements
iterate through each word
  if word is >= 5 reverse the word
join the array with ' '
=end

def reverse_words(str)
  str.split.map do |word|
    word.length >= 5 ? word.reverse : word
  end.join ' '
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')

=begin
-On line 13-17 we define method reverse_words which takes in one 
parameter variable str

-On line 14 we invoke #split method on local variable str, which returns a new array
with each word in the string as an element.

-We then invoke #map method on the return value and pass in on lines 14 - 16 
a do..end block with one parameter variable word

- on line 15 we use a ternary operater and if the word.length >= 5 is true
then we call #reverse method on local variable word which returns a new string 
in a reversed order and use that as the return value of the block
-if false the return value of the block is local variable word

-Map method return a new array which tranformation is performed on and we invoke
#join method on that return value and pass in ' ' as the argument which joins
the elements in the array together with a ' '