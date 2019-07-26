num_array = []

puts 'Enter the 1st number'
num_array << gets.chomp.to_i

puts 'Enter the 2nd number'
num_array << gets.chomp.to_i

puts 'Enter the 3rd number'
num_array << gets.chomp.to_i

puts 'Enter the 4th number'
num_array << gets.chomp.to_i

puts 'Enter the 5th number'
num_array << gets.chomp.to_i

puts 'Enter the last number'
last_num = gets.chomp.to_i

if num_array.include?(last_num)
  puts "The number #{last_num} appears in #{num_array}"
else
  puts "The number #{last_num} does not appear in #{num_array}"
end
