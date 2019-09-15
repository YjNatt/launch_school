# How does count treat the block's return value? How can we find out?

['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end

=begin
  count method will count all the elements based on the truthiness of the blocks return
  value, so on line 4 the count method will count all the elements where
  the length of the element is less than 4

=end