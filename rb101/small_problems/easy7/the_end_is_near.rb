=begin
input: string 2 or more words
output: string 1 word
rules: output is next to last word in the string
       return orginal string or new string?
       ! . and other special characters are not a word
data structure / algorithm
split the sting in array and return 2nd last array
=end
# def penultimate(str)
#   p str.split[-2]
# end

def penultimate(str)
  arr_words = str.split
  num1, num2 = arr_words.length.divmod(2)
  if num2 == 0
    p arr_words[(num1 - 1)..(num1 + num2)].join " "
  else
    p arr_words[num1]
  end
end

penultimate('last word') == 'last'
penultimate('Launch School a is great!') == 'a'
p penultimate('Now this sentence is longer than five words.')