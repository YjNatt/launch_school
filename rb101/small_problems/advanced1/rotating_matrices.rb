def rotate(matrix, degrees = 90)
  current_matrix = matrix
  current_degree = degrees / 90
  loop do
    break if current_degree == 0
    new_matrix = []
    iteration = 0
    loop do
      new_arr = current_matrix.map { |arr| arr[iteration] }
      new_matrix << new_arr.reverse
      iteration += 1
      break if iteration >= current_matrix[0].length
    end
    current_matrix = new_matrix
    current_degree -= 1
  end
  current_matrix
end

matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

p rotate(matrix1, 270)
p rotate(matrix2, 360)