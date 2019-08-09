puts "Enter a noun:"
noun = gets.chomp

puts "Enter a verb:"
verb = gets.chomp

puts "Enter an adjective:"
adjective = gets.chomp

puts "Enter an adverb"
adverb = gets.chomp

sentence1 = "Do you #{verb} your #{adjective} #{noun} #{adverb}?"
sentence2 = "How do you #{verb} your #{adjective} #{noun} so #{adverb}?"

puts [sentence1, sentence2].sample