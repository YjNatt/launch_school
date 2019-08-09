=begin
input: string
output: array of substrings
rules: return list of all substrings of a string at the beginning of orginal string
       return value should be arranged in order from shortest to longest
       return value should be in an array even if 1 string is inside
       
data structure / algorithm
result array = []
counter = 0
create a loop
  create a range on the string starts at the 0 to the counter
  + 1 to counter
  break if counter == string length
  
return result array
=end

# def substrings_at_start(str)
#   result = []
#   counter = 0
#   loop do
#     result << str[0..counter]
#     counter += 1
#     break if counter >= str.length
#   end
#   p result
# end

def substrings_at_start(str)
  str.chars.map.with_index { |_,index| str[0..index] }
end

# def substrings_at_start(str)
#   Array.new (str.size) { |i| str[0..i] }
# end

p substrings_at_start('abc') == ['a', 'ab', 'abc']
p substrings_at_start('a') == ['a']
p substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']