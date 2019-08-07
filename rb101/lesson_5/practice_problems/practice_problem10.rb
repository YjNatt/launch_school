arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
# x = arr.map do |hash|
#   hash.transform_values {|v| v += 1}
# end
x = arr.map do |hash|
  x = hash.each do |key, value|
    key = value += 1
  end
  x
end

p x