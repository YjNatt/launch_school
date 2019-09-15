=begin
input: string
output: string
rules:  Output string must have words in reverse order
        if string is '' return ''
Data structure / algorithm
  split string into an array
  reverse array
  join array with ' '
=end

def reverse_sentence(str)
  str.split.reverse.join(' ')
end

puts reverse_sentence('') == ''
puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'

=begin
-On lines 12-13 we define the method reverse_sentence with 1 paramater str
-On line 13 we invoke #split method on local variable str which returns an new array of words
-next we invoke #reverse method on the return value of #split method which 
returns value is a new array with elements in reverse order
-finally we invoke #join method on the return value of #reverse method and pass
(' ') as the argument which joins the strings together with a ' '