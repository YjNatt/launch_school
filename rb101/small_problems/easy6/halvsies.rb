def halvsies(arr)
  count, extra = arr.length.divmod(2)
  iterations = count + extra

  one = arr.first(iterations) 
  two = arr.last(arr.length - iterations)

  [one, two]
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]