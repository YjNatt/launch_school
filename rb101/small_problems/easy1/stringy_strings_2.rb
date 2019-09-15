=begin
input: integer
output: string
rules:  argument is a positive integer
        return a string of alternating 1s and 0s and the length is equal to the integer
        string must start with one
Data structure / algorithm
define method stringy with one parameter variable num
Initalize variable string and assign string object with value ''
initiate while loop and break if variable string length > num
  if string[-1] is not equal to '1' 
    push '1' into variable string
  else
    push '0' into variable string
return string
=end
def stringy(num)
  string = ''

  while string.length < num
    string[-1] != '1' ? (string << '1') : string << '0'
  end

  string
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'