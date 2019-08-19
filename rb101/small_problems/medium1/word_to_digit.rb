WORDS_INTEGERS = ['zero', 'one', 'two', 'three', 'four',
                  'five', 'six', 'seven', 'eight', 'nine']

def word_to_digit(str)
  str.gsub(/\w+/) do |word|
  WORDS_INTEGERS.include?(word) ? word = WORDS_INTEGERS.index(word) : word
  end
end

p word_to_digit('Please call me at one one one five five five one two three four. Thanks.')