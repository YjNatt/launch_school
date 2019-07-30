DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string(number)
  result = ''
  loop do
    number, remainder = number.divmod(10)
    result.prepend(DIGITS[remainder])
    break if number == 0
  end
  result
end

def signed_integer_to_string(int)
  if int < 0
    '-' + (integer_to_string(int.abs))
  elsif int > 0
    '+' + integer_to_string(int)
  else
    '0'
  end
end

# Launch school solution

def signed_integer_to_string(number)
  case number <=> 0
  when -1 then "-#{integer_to_string(-number)}"
  when +1 then "+#{integer_to_string(number)}"
  else         integer_to_string(number)
  end
end

def signed_integer_to_string(number)
  result = ""
  case number <=> 0
  when -1 then result << "-"
  when +1 then result << "+"
  end
  result << integer_to_string(number.abs)
end



p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'