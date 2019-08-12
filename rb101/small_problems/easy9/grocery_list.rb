=begin
input: a nested array that has a fruit and an integer
output: single array
rules: return the fruit string and as many times as the integer that was with it
       must return an array
data structure / algorithm
create results array
loop through each element of the array
  loop through each pair
    push the string as many times as the integer into the results array

return results
=end

def buy_fruit(list)
  list.map { |fruit, quantity| [fruit] * quantity }.flatten
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]])
