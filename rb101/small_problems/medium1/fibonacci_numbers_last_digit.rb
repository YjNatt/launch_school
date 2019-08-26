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

# futher exploration
FIB_SEQUENCE_PATTERN = [1, 1, 2, 3, 5, 8, 3, 1, 4, 5,
                        9, 4, 3, 7, 0, 7, 7, 4, 1, 5,
                        6, 1, 7, 8, 5, 3, 8, 1, 9, 0,
                        9, 9, 8, 7, 5, 2, 7, 9, 6, 5,
                        1, 6, 7, 3, 0, 3, 3, 6, 9, 5,
                        4, 9, 3, 2, 5, 7, 2, 9, 1, 0]


def fibonacci_last(nth)
  FIB_SEQUENCE_PATTERN[(nth % 60) - 1]
end


p fibonacci_last(123456789) 