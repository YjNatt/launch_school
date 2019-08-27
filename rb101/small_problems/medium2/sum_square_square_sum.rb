def sum_square_difference (num)
  numbers = []
  1.upto(num) { |n| numbers << n }
  square_sum = numbers.sum ** 2
  sum_of_squares = numbers.map { |n| n**2 }.sum
  p square_sum - sum_of_squares
end

def sum_square_difference(num)
  numbers = (1..num).to_a
  numbers.sum**2 - numbers.reduce { |sum, num| sum + num**2 }
end

sum_square_difference(3) == 22
sum_square_difference(10) == 2640
sum_square_difference(1) == 0
sum_square_difference(100) == 25164150