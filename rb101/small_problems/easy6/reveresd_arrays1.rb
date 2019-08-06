=begin
input: array
output: elements in array reversed
rules: cannot use #reverse or #reverse!
       must mutate the elements
       the return value must be the same array object
       if array is empty mus return empty array

datastructure / algorithm
create empty array called holder
create loop
  push in to holder array the first element in array and delete it
  break if array is empty

create loop
  push in original array the last element in the holder array and delete it
  break if holder arr is empty

retrun original array

=end

def reverse!(list)
  holder = Array.new
  list.length.times { holder << list.shift }
  holder.length.times { list << holder.pop }
  list
end

list = [1,2,3,4]
result = reverse!(list)
p result == [4, 3, 2, 1]
p list == [4, 3, 2, 1]
p list.object_id == result.object_id

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"]
p list == ["c", "d", "e", "b", "a"]

list = ['abc']
p reverse!(list) == ["abc"]
p list == ["abc"]

list = []
p reverse!(list) == []
p list == []
