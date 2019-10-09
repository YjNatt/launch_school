# What is the return value of the following code? Why?

[1, 2, 3].map do |num|
  if num > 1
    puts num
  else
    num
  end
end

=begin
  [1, nil, nil]

  #map method considers the return value of the block and places them in a new array
  we invoke #puts method to output the number if current element is greater
  than 1, however the return value of the method #puts is nil which is why 
  elements 2, 3 were transformed to nil

  the first integer is not greater than 1 so the return value of the block
  was the element itself, 1


=end