=begin
input: [hsh, hsh, hsh]
ouput: [hsh, hsh, hsh]

ds/a
iterate throguh each element in array
  iterate through each pair
    increment each value by 1
  convert return value to hsh
=end

arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

p (arr.map do |hsh|
  hsh.map do |key, value|
    value += 1
    [key, value] 
  end.to_h
end)