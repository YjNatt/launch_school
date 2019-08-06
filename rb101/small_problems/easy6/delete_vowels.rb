=begin
input: array of strings
output: return same string values, except vowels
rules : remove values in string both lower and uppercase
        return original array or new?
        return empty string if only vowels in string

datastructure / algorithm - array
go through and delete only vowels in each array and save the return to results array

=end
VOWELS = 'aeiouAEIOU'

def remove_vowels(arr)
  arr.map { |str| str.delete VOWELS }
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']