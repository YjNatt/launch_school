def missing(arr)
  min_num, max_num = arr.minmax

  ((min_num += 1 )...max_num).each_with_object([]) do |num, missing_nums_arr|
    missing_nums_arr << num if !arr.include?(num)
  end 
end

# launch school solution
def missing(array)
  result = []
  array.each_cons(2) do |first, second|
    result.concat(((first + 1)..(second - 1)).to_a)
  end
  result
end

missing([-3,-2,1,5])
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []