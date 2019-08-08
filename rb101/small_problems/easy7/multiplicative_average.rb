=begin
input: array of integers
output: the sum of all the integers multiplied together
        divided by the number of entries
        rounded to 3 decimal places

rules: assume the array is non empty
       result must be rounded to 3 decimal places
       
algorithm
  create sum variable = 1.0
  iterate through each integer in the array and multiply by the sum
  divide the sum by the length of the array
  round sum to the 3rd decimal place

=end

def show_multiplicative_average(arr)
  sum = arr.reduce(1.0, &:*)
  result = sum / arr.length
  p format('%.3f',result)
end

show_multiplicative_average([3, 5])
# The result is 7.500

show_multiplicative_average([6])
# The result is 6.000

show_multiplicative_average([2, 5, 7, 11, 13, 17])
# The result is 28361.667
