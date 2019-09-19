=begin
display user to enter first number
save number to variable
display user to enter second number
save number to variable

use string interpolation and perform the actions; + - * / & **

=end

puts "==> Enter the first number"
num_1 = gets.chomp.to_i

puts "==> Enter the second number"
num_2 = gets.chomp.to_i

puts "#{num_1} + #{num_2} = #{num_1 + num_2}"
puts "#{num_1} - #{num_2} = #{num_1 - num_2}"
puts "#{num_1} * #{num_2} = #{num_1 * num_2}"
puts "#{num_1} / #{num_2} = #{num_1 / num_2}"
puts "#{num_1} % #{num_2} = #{num_1 % num_2}"
puts "#{num_1} ** #{num_2} = #{num_1 ** num_2}"