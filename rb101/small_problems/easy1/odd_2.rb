=begin
input: integer
output: boolean
rules: - integer can be positive, negative, or zero
       - cannot use #odd or #even method
       - return true if number's absolute `value` is odd else `false`
datastructure/algorithm:
define method `is odd` with 1 parameter; num
if the result of number % 2 is not equal to zero return true
=end

def is_odd?(num)
  num.remainder(2) != 0
end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(0)    # => false
puts is_odd?(7)    # => true

=begin
On `lines 12-14` we are definding the method is_odd? with one parameter(`num`)

On `line 13` we are calling the #remainder method on local variable `num`
and pass in the integer 2 as an argument.

The return value is compared if it is not equal to 0 and returns a boolean
true or false
=end