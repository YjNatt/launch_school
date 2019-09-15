=begin
input: Integer
output: new Integer
rules:  returns the sum of adding all the individual digits in the integer
Data structure / Algorithm:
define method sum with 1 parameter variable num
split num into an array of individual digits
  add digits together with sum method
=end
def sum(num)
  num.digits.sum
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45

=begin
On lines 10 - 12 we define the method sum that takes in one parameter variable num

On line 11 we invoke #digits method on the local variable num to split the digits
in the integer to individual elements in an array.

We then invoke the #sum method on the return value array which add's all the 
elements in the array and returns an Interger of the sum
=end