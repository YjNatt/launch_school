def average(array)
  sum = 0.0
  array.each { |x| sum += x }
  puts sum / array.length
end

puts average([1, 5, 87, 45, 8, 8])
puts average([9, 47, 23, 95, 16, 52])

# Launch School solution
# ----------------------

def average(numbers)
  sum = numbers.reduce { |sum, number| sum + number }
  sum / numbers.count
end
