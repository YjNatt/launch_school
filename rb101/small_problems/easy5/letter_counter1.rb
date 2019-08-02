=begin
input: string
output: hash- key:size of words, value: how many times does that size appear in str
rules: -words are any string of characters except spaces
       -what about characters such as ? ' , !
       -key == size of word
       -value == how many times the key appears in string
       - if string is empty return empty hash

data structure: hash & array
algorithm:
  create an empty hash called result

  split string into array excluding spaces
  iterate through each element in array
    check if the element length is in result hash
      if not push the element length as key and 1 for value
      if it exists locate the key and +=1 to value
  
  return result
=end

def word_sizes(str)
  result = Hash.new(0)
  str.split.each do |word|
    result[word.length] += 1
  end
  result
end

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}