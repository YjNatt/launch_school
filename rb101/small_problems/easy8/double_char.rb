=begin
input: string
output: string (every character is doubled)
rules: recieve input and double each character
       spaces and special characters are doubled as well
       if str empty return empty string
data structure / algorithm:
loop through each character and replace with same character *2
=end
def repeater(str)
  p str.gsub(/./){|i| i*2 }
end
p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''