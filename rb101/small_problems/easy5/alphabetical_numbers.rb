ENGLISH_NUMBERS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
]

def alphabetic_number_sort(arr)
  sorted_words = arr.map{ |num| ENGLISH_NUMBERS[num] }.sort!
  sorted_words.map{|word| ENGLISH_NUMBERS.index(word)}
end

# def alphabetic_number_sort(numbers)
#   p numbers.sort_by {|num| ENGLISH_NUMBERS[num]}
# end

x = (0..19).to_a
p alphabetic_number_sort(x) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]
p x