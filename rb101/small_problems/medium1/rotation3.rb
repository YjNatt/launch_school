=begin
input: integer
output: max rotation of integer 
rules: first rotate whole number to the left
       -then fix the first digit in place and rotate remaining digits
       -the fix the first 2 digits in place and rotate.. and so on
       0 will get dropped
data structure / algorithm:
create variable length == integer.to_s.length


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

def max_rotation(num)
  length = num.to_s.length
  while length > 1
    num = rotate_rightmost_digits(num, length)
    length -= 1
  end
  num
end

p max_rotation(735291)
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105)# == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845