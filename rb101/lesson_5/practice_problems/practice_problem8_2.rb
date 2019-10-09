=begin
input: hsh
ouput: all vowels from string

ds / a 
iterate through the has with key value pair
  iterate throguh the pair of string
    iterate through the string characters
      if char is a vowel
        output vowel

=end

hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
hsh.each_value do |array|
  array.each do |word|
    word.chars.each { |chr| puts chr if 'aeiou'.include?(chr) }
  end
end