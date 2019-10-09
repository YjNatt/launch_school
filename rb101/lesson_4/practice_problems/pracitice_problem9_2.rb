#What is the return value of map in the following code? Why?

{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end

=begin
 [nil, bear]

 #map method considers the return value of the block and places it into a new array
 the if statement itself returns nil which is why the first element in the
 arr is nil

=end