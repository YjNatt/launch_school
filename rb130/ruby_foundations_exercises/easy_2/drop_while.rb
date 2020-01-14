=begin
  input: array, block
  output: new array
          method will iterate through array once it returns false or nil
          it will then return the remainder of the array include the element
          that resulted in a falsey return

  ds / algorithm
    initialize is_truthy: to a variable true
    iterate with each_with_obj
      send the value to the block if it returns false or nil reassign is_truthy to false
      if is_truthy is false pass element to array 
          
=end
def drop_while(arr)
  is_truthy = true
  arr.each_with_object([]) do |value, new_arr|
    is_truthy = false if !yield(value)
    new_arr << value if !is_truthy
  end
end
p drop_while([1, 3, 5, 6]) { |value| value.odd? }# == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []