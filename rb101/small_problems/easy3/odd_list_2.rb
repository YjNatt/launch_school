=begin
input: []
output: []
rules: return every 1st, 3rd, 5th, and so on.. values of the orginal
       array in a new array
data structure / algorithm
  iterate with each_with_index if index is even push in new array
=end

def oddities(arr)
  every_other = []
  arr.each_with_index { |el, idx| every_other << el if idx.even?}
  every_other
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []

