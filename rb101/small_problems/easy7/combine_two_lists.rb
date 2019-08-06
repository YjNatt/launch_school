# def interleave(arr_1, arr_2)
#   result = []
#   count = 0
#   while count <= arr_1.length - 1 do
#     result << arr_1[count]
#     result << arr_2[count]
#     count += 1
#   end
#   result
# end

def interleave(a, b)
  a.zip(b).flatten
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']