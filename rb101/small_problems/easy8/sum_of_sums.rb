=begin
input: array of integers
output: single integer
rules: return the sum of each leading subsequence of the array
       array will always contain one number
data structure / algorithm:
array
create a sum variable == 0
create a counter variable == 0
loop through each variable in array
  create while loop which will break at the element index of the array
   add array[counter] to sum
   add 1 to counter
   
   after adding all up to the elements index. reset counter to 0
   return sum
=end

# def sum_of_sums(arr)
#   sum = 0
#   counter = 0
#   arr.each_with_index do |num, index|
#     while counter <= index
#       sum += arr[counter]
#       counter += 1
#     end
#     counter = 0
#   end
#   sum
# end

def sum_of_sums(numbers)
  sum_total = 0
  1.upto(numbers.size) do |count|
    sum_total += numbers.slice(0, count).reduce(:+)
  end
  sum_total
end

p sum_of_sums([1, 2, 3, 4, 5]) == 35
p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4