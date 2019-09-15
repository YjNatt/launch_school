# What is the return value of reject in the following code? Why?

[1, 2, 3].reject do |num|
  puts num
end

=begin 
  the return value of reject is [1, 2, 3] because reject considers the truthiness
  of the block's return value. If the block's return value is truthy the element is 
  not selected if the falsey the element is selected

  on line 2 the return of puts num is nil, which is falsey, so the element will
  always be selected
=end