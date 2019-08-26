=begin
input: string
output: boolean
rules: return true if all parentheses in string are properly balanced
       pairs must start with (, not )

data structure / algorithm
create parentheses array
loop through each character
  if character == (
    push ( to parentheses array
  if character == )
    if last element in parentheses == (
    pop parentheses
    else
      return false

return true if loop passes
=end

# def balanced?(str)
#   parentheses = []
#   str.each_char do |char|
#     if char == '('
#       parentheses << char
#     elsif char == ')'
#       parentheses.last == '(' ? parentheses.pop : (return false)
#     end
#   end
#   parentheses.empty?
# end

LEFT_BRACKETS  = ['(', '[', '{']
RIGHT_BRACKETS = [')', ']', '}']

def balanced?(str)
  parens = 0
  return false if str.chars.count { |c| c =~ /\'|\"/}.odd?
  str.each_char do |char|
    parens += 1 if LEFT_BRACKETS.include?(char)
    parens -= 1 if RIGHT_BRACKETS.include?(char)
    break if parens < 0
  end
  parens.zero?
end

p balanced?('\'adf"" [][] \' ')
p balanced?('[][][][]')
p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false