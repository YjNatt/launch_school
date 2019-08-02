=begin
input: string
output: hash- key:size of words, value: how many times does that size appear in str
rules: -words are only alphabetical characters.
       -special characters are not counted for length
       -key == size of word
       -value == how many times the key appears in string
       - if string is empty return empty hash

data structure / algorithm
  create empty == result
  delete special characters in string
  re-use letter counter 1 method
  return result

=end

def word_sizes(str)
  result = Hash.new(0)
  str.split.each do |word|
    clean_word = word.gsub(/[\W\d]/, '')
    result[clean_word.length] += 1
  end
  result
end

# launch school solution

# def word_sizes(str)
#   result = Hash.new(0)
#   str.split.each do |word|
#     clean_word = word.delete('^a-zA-Z')
#     result[clean_word.length] += 1
#   end
#   result
# end

p word_sizes('Four123 score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
p word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
p word_sizes('') == {}