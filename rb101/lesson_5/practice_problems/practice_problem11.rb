arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
p(arr.map do |array|
  array.reject { |num| num % 3 != 0 }
end )
