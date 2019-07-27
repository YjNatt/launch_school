def multisum(num)
  sum = 0
  1.upto(num) do |i|
    sum += i if (i % 3).zero? || (i % 5).zero?
  end
  sum
end

def multisum(num)
  arr = (1..num).to_a.select { |i| (i % 3).zero? || (i % 5).zero? }
  arr.reduce { |acc, elem| acc + elem }
end

p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234_168
