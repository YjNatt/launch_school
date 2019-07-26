puts 'Enter the first number'
num_one = gets.chomp.to_f

puts 'Enter the second number'
num_two = gets.chomp.to_f

output = %(
  #{num_one} + #{num_two} = #{num_one + num_two}
  #{num_one} - #{num_two} = #{num_one - num_two}
  #{num_one} * #{num_two} = #{num_one * num_two}
  #{num_one} / #{num_two} = #{num_one / num_two}
  #{num_one} % #{num_two} = #{num_one % num_two}
  #{num_one} ** #{num_two} = #{num_one**num_two}
)

puts output
