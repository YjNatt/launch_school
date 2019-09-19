=begin
intialize array to hold users input numbers

prompt the user to enter a number
push the answer to the array
  repeat process 5 times

prompt the user to enter last number
save the number to a variable

if the variable is in array prompt that the number appers in array
if not, prompt that the number does not appear in array
=end

user_numbers = []

puts 'Enter the 1st number'
user_numbers << gets.chomp

puts 'Enter the 2nd number'
user_numbers << gets.chomp

puts 'Enter the 3rd number'
user_numbers << gets.chomp

puts 'Enter the 4th number'
user_numbers << gets.chomp

puts 'Enter the 5th number'
user_numbers << gets.chomp

puts 'Enter the last number'
last_num = gets.chomp

if user_numbers.include?(last_num)
  puts "The number #{last_num} appears in #{user_numbers}."
else
  puts "The number #{last_num} does not appear in #{user_numbers}."
end