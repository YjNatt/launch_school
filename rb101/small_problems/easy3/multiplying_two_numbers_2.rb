=begin
input:  integer, integer
output: integer
rules: multiply the 2 integers 
ds / a
define method that has 2 parameters num_1 and num_2
return num_1 * num_2
=end

def multiply(num_1, num_2)
  num_1 * num_2
end

p multiply(5, 3) == 15

=begin
on lines 10 - 12 we define the method multiply with 2 parameters
on line 11 we invoke the integer #* method on local variable num_1 passing 
local variable num_2 as an argument and return the value since it is the last
expression in the method

on line 14 we invoke the multiply method and pass in integer 5, and integer 3 as
an argument and compare the return value to equal to the integer 15
=end