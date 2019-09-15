=begin
input: integer, boolean
output: integer
rules: if boolean is true return half of integer
       if boolean is false return 0
Data structure / Algorithm
define method calculate_bonus with 2 parameters (salary, get_bonus)
if get_bonus is true 
  return salary / 2
else 
  return 0
=end
def calculate_bonus(salary, get_bonus)
  get_bonus ? salary / 2 : 0
end

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000