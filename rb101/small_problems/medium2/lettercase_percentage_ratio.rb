=begin
input: string
output: hash, key:( lowercase, uppercase, neither)
              values are percentages of the keys character to whole string
rules: -take a string and return hash containing 3 keys, lowercase, uppercase
        and neither with each value is the percentage of the character in the string
       -return to 1 decimal point if needed if not use integers
data structure / algorithm
  initialize empty hash = character_types
  create each key with value 0
  create sum = 0
  create lowercase letter arr and count how many lowercase letters in string
    add total sum divide by total chars.to_f * 100
  repeat line 12 for upper case and neither
=end

def letter_percentages(str)
  letters = str.chars
  character_types = {}
  lowercase = letters.count { |char| char =~ /[a-z]/ }
  uppercase = letters.count { |char| char =~ /[A-Z]/ }
  neither = str.length - (lowercase + uppercase)

  character_types[:lowercase] = ((lowercase.to_f / str.length) * 100).round(2)
  character_types[:uppercase] = ((uppercase.to_f / str.length) * 100).round(2)
  character_types[:neither]   = ((neither.to_f / str.length) * 100).round(2)
  character_types
end

# Futher exploration

# def letter_percentages(string)
#   counts = { lowercase: 0, uppercase: 0, neither: 0 }
#   percentages = { lowercase: [], uppercase: [], neither: [] }
#   characters = string.chars
#   length = string.length

#   counts[:uppercase] = characters.count { |char| char =~ /[A-Z]/ }
#   counts[:lowercase] = characters.count { |char| char =~ /[a-z]/ }
#   counts[:neither] = characters.count { |char| char =~ /[^A-Za-z]/ }

#   calculate(percentages, counts, length)

#   percentages
# end

# def calculate(percentages, counts, length)
#   percentages[:uppercase] = (counts[:uppercase] / length.to_f) * 100
#   percentages[:lowercase] = (counts[:lowercase] / length.to_f) * 100
#   percentages[:neither] = (counts[:neither] / length.to_f) * 100
# end

p letter_percentages('abCdef 123')# == { lowercase: 50, uppercase: 10, neither: 40 }
p letter_percentages('AbCd +Ef')# == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
p letter_percentages('123') #== { lowercase: 0, uppercase: 0, neither: 100 }
p letter_percentages('abcdefGHI')