=begin
input: integer (number of digits specified)
output: integer (index length of first number to reach integer digits)
rules: fibonacci sequence is the sum of the two previous numbers
       return integer that is the length of an index
       arguement is greater than 1
       the first fibonacci number has index 1 NOT 0

datastructure / algorithim
array
create fibonacci array with starting two integer 1, 1
create count starting at 2
create loop
  count += fibonacci[-2]
  fibonacci array push count
  check length of count.digits
  if == to arguement break and return fibonacci.length
  else keep looping

=end

def find_fibonacci_index_by_length(num)
  fib_num1 = 0
  fib_num2 = 1
  count = 1
  loop do
    fib_sum = fib_num1 + fib_num2
    fib_num1 = fib_num2
    fib_num2 = fib_sum
    count += 1
    break if fib_sum.to_s.length >= num
  end
  p count
end

p find_fibonacci_index_by_length(2) == 7
p find_fibonacci_index_by_length(3) == 12
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847
