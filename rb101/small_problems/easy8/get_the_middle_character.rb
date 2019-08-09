=begin
input: string
output: 1 or 2 characters
rules: return the middle character(s) of the argument
       if string is odd length return 1 char
       if string is even length return 2 char
data structure / algorithim
  take the length of the string
    divide the length by 2 with divmod
      save the answer to num and remainder
  if string.length is even
    return string[num+remainder]
  else
    return string[num..remainder]
=end

def center_of(str)
  half = str.length / 2
  p str.length.odd? ? str[half] : str[half-1..half]
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'