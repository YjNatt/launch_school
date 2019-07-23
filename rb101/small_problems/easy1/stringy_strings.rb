def stringy(num, x=1)
  ones_zeros = ''

  if x == 1
    num.times do
      ones_zeros.length.even? ? ones_zeros << '1' : ones_zeros << '0'
    end
  else
    num.times do
      ones_zeros.length.even? ? ones_zeros << '0' : ones_zeros << '1'
    end
  end
  p ones_zeros
end

puts stringy(6, 0) 
puts stringy(9)
puts stringy(4)
puts stringy(7)

# Launch School solution
#------------------------

def stringy(size)
  numbers = []

  size.times do |index|
    number = index.even? ? 1 : 0
    numbers << number
  end

  numbers.join
end