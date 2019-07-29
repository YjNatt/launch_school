# input: string of integers
# output: integers of the string equivalent 
# rules:
#   cannot use any standard conversion method
#   do no worry about + or - signs or invalid characters
# algorithm
  # create sum variable equal to 0
  # break string into an array and save to str_arr
  # create a hash key of "string numbers" and a value of int numbers
  #   from 0 - 9
  # compare each element in array to hash key
  #   take the value and multiply 10 ** element.index - 1
  #   add the result to sum 
  # return sum

def string_to_integer(str)
  convert_hash = {
    '0' => 0,
    '1' => 1,
    '2' => 2,
    '3' => 3,
    '4' => 4,
    '5' => 5,
    '6' => 6,
    '7' => 7,
    '8' => 8,
    '9' => 9,
  }
  sum = 0
  value = 0
  str_arr = str.chars
  str_arr.each do |num|
    value = convert_hash[num]
    sum += value * (10 ** (str_arr.length - (str_arr.index(num) + 1)))
  end
  sum
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

# launch school soultion
DIGITS = {
  '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
  '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
}

def string_to_integer(string)
  digits = string.chars.map { |char| DIGITS[char] }

  value = 0
  digits.each { |digit| value = 10 * value + digit }
  value
end