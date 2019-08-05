=begin
input: array and search value
output: true or false
rules: can not use array#include?
       return true if the search value is in the array
       else return false

data structure/ algoritm
iterate through each element 
  if element is == to search value return true
  if went through entire array and no value was returned return false
=end

def include?(arr, val)
  arr.each { |el| return true if el == val}
  false
end

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false