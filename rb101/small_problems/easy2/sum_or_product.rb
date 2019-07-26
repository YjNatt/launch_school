def compute_sum(number)
  (1..number).inject(:+)
end

def compute_product(number)
  (1..number).inject(:*)
end

puts 'Enter an integer greater than 0:'
num_user = gets.chomp.to_i

puts "Enter 's' to compute the sum, 'p' to compute the product"
s_or_p = gets.chomp

if s_or_p == 's'
  sum = compute_sum(num_user)
  puts "sum of 1 to #{num_user} is #{sum}"
elsif s_or_p == 'p'
  sum = compute_product(num_user)
  puts "product of 1 to #{num_user} is #{sum}"
else
  puts 'invalid input'
end
