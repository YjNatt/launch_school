def max_by(arr)
  return nil if arr.empty?
  element = arr[0]
  value   = yield(element)

  arr[1..-1].each do |current_element|
    current_value =  yield(current_element)
    if current_value > value
      element = current_element
      value = current_value
    end
  end

  element
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 } == nil