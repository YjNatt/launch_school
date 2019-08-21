def fibonacci(num)
  last = [1, 1]
  how_many = num
  while how_many > 2 do
    last = [last[1], (last[0] + last[1]) % 10]
    how_many -= 1
  end
  last[1]
end

def fibonacci_last(num)
  fibonacci(num).to_s[-1].to_i
  
end

p fibonacci_last(123456789) 