
# input: array of numbers
# output: array with the same amount of elements but each
#         element has the running total from the original array

# rules:
#   explicit:
#     output must have same number of elements in the array as the input
#     each output element is the sum of all previous elements + the current element 

# data structure:
#   array

# algorithm:
#   create sum variable which is set to 0
#   create a result variable which is an empty array
#   loop through the each element in array
#     add the element to the sum variable
#     push the sum variable to the result array

#     return result array


# def running_total(arr)
#   sum = 0
#   result = []
#   arr.each do |num|
#     sum += num
#     result << sum
#   end
#   result
# end

def running_total(arr)
  sum = []
  arr.inject(0) do |acc, num|
    sum << acc + num
    acc + num
  end
  sum
end

p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []