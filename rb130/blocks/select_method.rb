def select(array)
  index = 0
  new_array = []

  while index < array.size
    element = array[index]
    new_array << element if yield(element)
    index += 1
  end

  new_array
end

array = [1,2,3,4,5]
p select(array) { |num| num.odd? }
p select(array) { |num| puts num }
p select(array) { |num| num + 1 }