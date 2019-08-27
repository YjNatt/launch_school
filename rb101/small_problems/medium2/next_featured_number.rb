=begin
input: integer
output: next featured number
rules: - featured number is
          a number % 7 == 0
          an odd number
          each digit appears once
data structure / algorithm
sum = integer + 1
loop
  if sum % 7 == 0
    sum is odd
      sum.digits == sum.digits.uniq
      break
  elsif sum > 9876543210
    return error
    break

return sum
=end

def featured(num)
  sum = num + 1
  sum += 1 until sum % 7 == 0 && sum.odd?

  loop do
    return sum if sum.digits == sum.digits.uniq
    sum += 14
    break if sum > 9876543210
  end
  'error'
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987
p featured(9_999_999_999)
