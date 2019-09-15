def merge(arr1, arr2)
  arr2_index = 0
  result = []

  arr1.each do |value|
    while arr2_index < arr2.length && arr2[arr2_index] < value
      result << arr2[arr2_index]
      arr2_index += 1
    end
    result << value
  end
  result.concat(arr2[arr2_index..-1])
end

def merge_sort(arr)
  return arr if arr.length == 1
  half = arr.length / 2 - 1

  sub_arr1 = arr[0..half]
  sub_arr2 = arr[half + 1..-1]

  sub_arr1 = merge_sort(sub_arr1)
  sub_arr2 = merge_sort(sub_arr2)

  merge(sub_arr1, sub_arr2)

  
end

p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
p merge_sort([5, 3]) == [3, 5]
p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
