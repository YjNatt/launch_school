count = 1

loop do
  count.even? ? puts("#{count} is even!") : puts("#{count} is odd!")
  count += 1
  break if count > 5
end