=begin
  input: [element 1, element 2]
  output:hsh[element 1] = element 2

  ds / a
  iterate through each array with each with object {}
    hsh[arr[0]] = arr[1]
=end

arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
p (arr.each_with_object({}) do |arr, hsh|
  hsh[arr[0]] = arr[1]
end)