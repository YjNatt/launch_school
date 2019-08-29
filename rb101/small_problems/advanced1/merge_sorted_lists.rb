=begin
input: 2 sorted arrays
output: 1 new array
rules: do not mutate the original arrays
       merge the 2 arrays in a sorted manner
       build the result array one element at a time
data structure / algorithm
result = []
arr1_iteration = 0
arr2_iteration = 0
loop
  if arr1 iteration > arr2 iteration
    push arr1 iteration 0 to result array
    arr1 iteration += 1
  elsif arr1 iteration < arr2 iteration
    push arr2 iteration 0 to result array
    arr1 iteration += 1
  elsif arr1 iteration == nil
    push arr2 iteration 0 to result array
    arr1 iteration += 1
  elsif arr2 iteration == nil
    push arr1 iteration 0 to result array
    arr1 iteration += 1
  elsif break if arr1 iteration == nil AND arr2 iteration == nil
return result
=end

# def merge(arr1, arr2)
#   result = []
#   arr1_count = 0
#   arr2_count = 0
#   loop do
#     if arr1[arr1_count] == nil && arr2[arr2_count] == nil
#       break
#     elsif arr1[arr1_count] == nil
#       result << arr2[arr2_count]
#       arr2_count += 1
#     elsif arr2[arr2_count] == nil
#       result << arr1[arr1_count]
#       arr1_count += 1
#     elsif arr1[arr1_count] <= arr2[arr2_count]
#       result << arr1[arr1_count]
#       arr1_count += 1
#     elsif arr1[arr1_count] >= arr2[arr2_count]
#       result << arr2[arr2_count]
#       arr2_count += 1
#     end
#   end
#   result
# end

def merge(arr1, arr2)
  arr2_index = 0
  result = []

  arr1.each do |value|
    while arr2_index < arr2.length && arr2[arr2_index] < value
      result << arr2[arr2_index]
      arr2_index += 1
    end
    result << value
  end
  p result
  result.concat(arr2[arr2_index..-1])
end

p merge([1, 5, 9], [2, 6, 8])
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]
