def multiply(x, y)
  x * y
end

def square(num)
  multiply(num, num)
end

def power_to_the_n(num, power)
  sum = 1
  power.times { sum = multiply(sum, num) }
  sum
end

p square(5) == 25
p square(-8) == 64
