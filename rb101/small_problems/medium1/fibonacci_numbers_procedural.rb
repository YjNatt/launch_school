# def fibonacci(num)
#   sum = 0
#   first = 1
#   second = 1
#   if num > 2
#     (num - 2).times do |i|
#       sum = first + second
#       i.odd? ? first = sum : second = sum
#     end
#   else
#     sum = 1
#   end
#   sum
# end

def fibonacci(num)
  first, last = [1, 1]
  3.upto(num) do
    first, last = [last, first + last]
  end
  last
end

p fibonacci(100_001)