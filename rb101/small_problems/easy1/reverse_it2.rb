# recieve string
# split string into an array of words
# if the word has 5 or more characters reverse the string
# join the array

def reverse_words(str)
  str.split.map { |x| x.length >= 5 ? x.reverse : x }.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS