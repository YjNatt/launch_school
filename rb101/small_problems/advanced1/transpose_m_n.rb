def transpose(matrix)
  new_matrix = []
  iteration = 0
  loop do
    new_arr = matrix.map { |arr| arr[iteration] }
    new_matrix << new_arr
    iteration += 1
    break if iteration >= matrix[0].length
  end
  new_matrix
end

p transpose([[1, 2, 3, 4]])  == [[1], [2], [3], [4]]
p transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
  [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
p transpose([[1]]) == [[1]]