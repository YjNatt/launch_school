=begin
input: 2 arrays of integers
output: one array of integers
        integers are the product of every pair of numbers between the arrays
        the array is sorted by increasing value
rules: assume neither argument is an empty array
       make sure the array is sorted by increasing value
       each element of the array is the product of each pair between the
       two arrays
datastructure / algorithm
  iterate each element on argument one
    inside itereation call map on argument two
      multiply each element in two with the element on one

  sort the array
=end

# def multiply_all_pairs(arr1, arr2)
#   result = arr1.map do |num1|
#     arr2.map do |num2|
#       num2 * num1
#     end
#   end

#   p result.flatten.sort
# end

def multiply_all_pairs(arr1, arr2)
  p arr1.product(arr2).map {|x, y| x * y}.sort
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]