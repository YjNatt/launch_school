=begin
prompt user to write a word or multiple words
save answer to variable
delete spaces in the variablem find the length and save to new variable
return with string interpolation with the amount of characters and the word
=end

puts "Please write a word or multiple words"
user_words = gets.chomp

characters_size = user_words.delete(' ').length

puts "There are #{characters_size} characters in \"#{user_words}\" "

