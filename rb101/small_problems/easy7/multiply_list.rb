=begin
input: 2 arrays of integers
outpys: 1 array the product of each pair of numbers that have the same index
rules: contain same amount of elements
       return 1 array

algorithm 
iteratate through array1 and multiply each element by array2 with each index

=end
# def multiply_list(arr1, arr2)
#   arr1.map { |num| num * arr2[arr1.index(num)] }
# end

def multiply_list(arr1, arr2)
  arr1.zip(arr2).map{|arr| arr.reduce(&:*)}
end

p multiply_list([3, 5, 7], [9, 10, 11])