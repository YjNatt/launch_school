=begin
input: 3 nested arrays
output: 3 new nested arrays
rules: create new arrays with each index of each nested array to create a new array
       cannot use transpose method or matrix class
       must not modify original array

data structure / algorithm:
iteration_count 0
new_matrix = []
loop
  arr = []
    loop through each element in outter array |nested_arr|
      arr << nested_arr with iteration count
    interation count + 1
  new_matrix << arr
return new_matrix
=end

# def transpose(nested_arr)
#   new_matrix = []
#   iteration = 0
#   loop do
#     arr = []
#     nested_arr.each { |array| arr << array[iteration] }
#     iteration += 1
#     new_matrix << arr
#     break if new_matrix.length >= nested_arr.length
#   end
#   new_matrix
# end

def transpose(nested_arr)
  result = []
  max_length = nested_arr.length - 1
  (0..max_length).each do |column_index|
    new_row = (0..max_length).map do |row_index|
      nested_arr[row_index][column_index] 
    end
    result << new_row
  end
  result
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


