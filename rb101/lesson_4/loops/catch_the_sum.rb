loop do
  puts 'What does 2 + 2 ='
  answer = gets.chomp.to_i
  if answer == 4
    puts "That's correct"
    break

  puts 'Wrong answer. try again'
end
