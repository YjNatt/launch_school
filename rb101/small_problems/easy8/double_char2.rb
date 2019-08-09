CONST = %w(b c d f g h j k l m n p q r s t v w x y z)

def double_consonants(str)
  array = str.chars.map do |c|
    if CONST.include?(c.downcase)
      c * 2
    else
      c
    end
  end
  array.join

  # str.gsub(CONST,)
end

p double_consonants('String') #== "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""