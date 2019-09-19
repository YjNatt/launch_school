=begin
input: integer
ouput: integer (integer squared)
rules: must use multply method from previous problem
ds / algorithm
define square method with 1 parameter (num)
  invoke multiply method 
    pass in the local variable num as the 1st and 2nd argument
    return the return value

=end

def multiply(num_1, num_2)
  num_1 * num_2
end

def square(num)
  multiply(num, num)
end

p square(5) == 25
p square(-8) == 64

=begin
on lines 17 - 19 we define the method square with 1 parameter variable num
on line 18 we invoke the method multiply and pass in num as the 
first argument and the second argument.

We then return the return value of the multiply method
=end