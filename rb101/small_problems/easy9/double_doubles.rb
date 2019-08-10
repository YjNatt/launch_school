=begin
input: integer
output: integer (if number is a double number return same interger
        otherwise return number * 2)
rules: double number = even number of digits
                       left-side digits are exactly the same as its right-side digits
       return input integer if integer is a double number
       if not multiply integer by 2
data structure / algorithm
take integer to string and save the length to var size
if size is not even number return integer times 2
  if size is even number

=end

# def twice(num)
#   size = num.to_s.length

#   if size.even?
#     arr_digits_left = num.digits.reverse
#     arr_digits_right = []

#     how_many = arr_digits_left.size / 2
#     how_many.times { arr_digits_right << arr_digits_left.shift }
      
#     arr_digits_left == arr_digits_right ? num : num * 2
#   else
#     num * 2
#   end
# end

def twice(num)
  string_num = num.to_s
  center = string_num.length / 2
  left_side = center.zero? ? '' : string_num[0..center -1]
  right_side = string_num[center..-1]
  
  left_side == right_side ? num : num * 2
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10