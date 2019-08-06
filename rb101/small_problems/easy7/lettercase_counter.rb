=begin
input: string
output: hash
        keys: lowercase, uppercase, neither
        values: number of characters of keys in input
rules: '' is not a lowercase, uppercase, or neither
       ' 'is neither
       digits and special cases are neither

data structure and algorithm
use hash
use count to count how many lowercase uppercase or neither
  then add to hash

=end

def letter_case_count(str)
  filter = Hash.new
  filter[:lowercase] = str.scan(/[a-z]/).length
  filter[:uppercase] = str.scan(/[A-Z]/).length
  filter[:neither] = str.scan(/[^A-Za-z]/).length
  filter
end

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }