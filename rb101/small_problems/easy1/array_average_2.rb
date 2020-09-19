=begin
input: [array of integers]
output: integer
rules: return the average of all the integers in the array
        the array will always have positive integers
        the array will never be empty
data structure / algorithm
define average with 1 parameter variable num_arr
use reduce method on num_arr to get sum of integers
    divide answer with the length of the array
=end

def average(num_arr)
  (num_arr.reduce(:+).to_f / num_arr.length).round(2)
end

puts average([1, 5, 87, 45, 8, 8]) 
puts average([9, 47, 23, 95, 16, 52])

=begin
On lines 13 - 15 we define the method average with one parameter variable num_arr

On line 14 we invoke #reduce method on local variable num_arr and pass is a suger syntax
which adds the element to sum block as the argument to get the total sum. We then call method #to_f
on the return value which returns the sum as a float.

We then invoke the #/ method on the float number and pass in the length of the num_arr
as an argument to get the average

We then invoke the #round method and pass in the integer 2 as an argument to
round the float to the 2 decimal place
