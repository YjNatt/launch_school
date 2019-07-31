=begin
input: string
output: integer - total sum of the ASCII values
rules: -determine the ASCII string value of each character and return the sum
       -return an integer
       -if empty string return 0
data structure / algorithm:
  create a variable called result to return the sum; set to 0
  create a counter variable and set to 0
  create a loop
    iterate through each character in the string and call String#ord for ascii value
    add ascii value to result
    break if counter == str.length
  
    return result
=end

def ascii_value(str)
  result = 0
  counter = 0
  loop do
    str[counter] != nil ? result += str[counter].ord : result = 0
    counter += 1
    break if counter >= str.length
  end
  result
end

def ascii_value(str)
  result = 0
  str.each_char { |x| result += x.ord }
  result
end
p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0