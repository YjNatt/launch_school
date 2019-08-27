def star(num)
  space = ' '
  times = 0
  top_half = []
  loop do
    top_half.unshift("*#{space * times}*#{space * times}*".center(num))
    times += 1
    break if "*#{space * times}*#{space * times}*".length > num
  end
  puts top_half
  puts '*'*num
  puts top_half.reverse

end

star 21