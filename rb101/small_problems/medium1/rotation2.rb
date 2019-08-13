=begin
input: two arguements (integer, rotate digit)
output: integer
rules: use rotate_array method
       rotating 1 digit results in original array
       rotating digit is always a positive number

data structure / algorithm

split integer into an array and save to variable digit_array
slice digit_array [-(n)..-1] save to rotate_digits
rotate_digits to rotate_array as argument save result to result array
combine digit_array[0..-(n)] + result array and join

=end
def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

def rotate_rightmost_digits(int, n)
  digit_array = int.digits.reverse
  rotate_digits = digit_array[-n..-1]
  result_array = rotate_array(rotate_digits)
  (digit_array[0..(-n - 1)] + result_array).join.to_i
end

def rotate_rightmost_digits(int, n)
  digit_array = int.digits.reverse
  digit_array[-n..-1] = rotate_array(digit_array[-n..-1])
  digit_array.join.to_i
end



p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917