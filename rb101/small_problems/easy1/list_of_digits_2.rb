=begin
input: integer
output: [integers]
rules: -recieve an integer and return an array with each element being a 
        digit in the number

datastructure/algorithm:
define method digit_list with 1 parameter(num)
call digits method on num and call reverse method on the return value
=end

def digit_list(num)
  num.digits.reverse
end

puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true

=begin
On `lines 12-14` we define method with 1 parameter(`num`)

On `line 13` we call #digits method on local variable num which returns
an array of digits with the least significant digit as the first array element

Then we call #reverse method on the array

This is known as method chaining
=end