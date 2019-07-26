puts 'Please write a word or multiple words:'
str = gets.chomp

char_num = str.delete(' ').length

puts "There are #{char_num} in \"#{str}\""
