[1, 2, 3].select do |num|
  num > 5
  'hi'
end

=begin
  The select method selects the elements in the array if the return value
  of the block is truthy.

  The last expression in the block is a string object 'hi', which is a truthy
  value. So the return value of the select method is [1,2,3]
=end