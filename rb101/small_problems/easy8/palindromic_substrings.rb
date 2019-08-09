=begin
input: string
output: array of palindrome substring
rules: palindrome are case sensitive
       single characters are not palindroms
       special characters are included
data structure / algorithm:
create a results array
use leading substring method to loop through each character
  push the substrings into the results array if substring is == to subtring reversed
  return array
=end

def sub(str)
  str.chars.map.with_index { |_,index| str[0..index] }
end

def substrings(str)
  results = []
  0.upto(str.length - 1) do |i|
    this_sub = str[i..-1]
    results.concat(sub(this_sub))
  end
  results
end

def palindromes(str)
  filtered_sub = substrings(clean_str).select do |string|
    string == string.reverse if string.length > 1
  end
  
end
  p palindromes('hello-madam@did-madam-goodbye') 
  p palindromes('madam') == ['madam', 'ada']
  p palindromes('knitting cassettes') == [
    'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
  ]