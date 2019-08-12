=begin
input: two integers (count, multiples of starting number)
output: array with same num of elements as count, and multiples of the second
        argument
rules:  if count == 0 return empty array
        the count will always be 0 or greater
        the 2nd argument can be any number

data structure / algorithim
create results array
create variable sums == 0 
loop as many times as the first argument
  add to sums
  push sums to results array
return results
=end

# def sequence(num1, num2)
#   results = []
#   sum = 0
#   num1.times do
#     sum += num2
#     results << sum
#   end
#   results
# end

def sequence(num1, num2)
  (1..num1).map { |value| value * num2 }
end


p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []
