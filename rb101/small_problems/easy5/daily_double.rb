=begin
input: string
output: string (condensed version)
rules: can not use squeeze
       return original string with all consecutive duplicate characters collapsed
       if empty return empty string
       does case matter?
datastructer / algorithim
create empty string called result
push each char in result string
  unless the last char is == to current char
return result
=end

def crunch(str)
  result = ''
  str.each_char { |char| result << char unless result[-1] == char}
  result
end

def crunch(text)
  index = 0
  crunch_text = ''
  while index <= text.length - 1
    crunch_text << text[index] unless text[index] == text[index + 1]
    index += 1
  end
  crunch_text
end



p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''
