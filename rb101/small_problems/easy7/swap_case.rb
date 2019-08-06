=begin
input: string
output: new string; every character is changed from either
        uppercase to lowercase or lowercase to uppercase
rules: swap uppercase to lowercase and lowercase to uppercase
       return a new string
       cannot use method swapcase

data structure / algorithm:
create const LOWERCASE with an array with all lowercase alphabet characters
create const UPPERCASE with an array with all uppercase alphabet characters
iterate through each character in the string
  if the character is == any character in the LOWERCASE save the index number
    then change the character to the UPPERCASE with the same index number
  if the character is == any character in the UPPERCASE save the index number
    then change the character to the LOWERCASE with the same index number
=end
LOWERCASE = ('a'..'z').to_a
UPPERCASE = ('A'..'Z').to_a

def swapcase(str)
  arr = str.split("")
  arr.map! do |char|
    if LOWERCASE.include?(char)
      index = LOWERCASE.index(char)
      char = UPPERCASE[index]
    elsif UPPERCASE.include?(char)
      index = UPPERCASE.index(char)
      char = LOWERCASE[index]
    else
      char
    end
  end
  arr.join
end

# lauch school solution

def swapcase(str)
  str_arr = str.chars.map do |char|
    if char =~ /[a-z]/
      char.upcase 
    elsif char =~ /[A-Z]/
      char.downcase
    else
      char
    end
  end
  str_arr.join
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'