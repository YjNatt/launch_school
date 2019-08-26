=begin
input: string(text)
output: print the number of words in the longest sentence
rules: sentences end with periods(.)
                          exclamtion points (!)
                          question marks (?)
       any sequence of characters that are not speces or sentence-ending chars
       are words
       print the number of words in the longest sentence
       (--) counts as 1 word
data structure and algorithm
  split text with . ! ?
  create highest number = 0
  count the number of words in each array
    if the numbers of words are > than the highest number. 
      highest number == number of words total
    
  return highest number
=end

def longest_sentence(text)
  sentence = ''
  sentence_arr = text.split(/\.|\?|\!/)
  sentence_arr.each do |sent|
    sentence = sent if sent.split.length > sentence.split.length
  end
  puts sentence
  puts sentence.split.length
end

# Launch school solution
# def longest_sentence(text)
#   sentences = text.split(/\.|\?|\!/)
#   longest_sent = sentences.max_by { |sentence| sentence.split.length }
#   puts longest_sent
#   puts longest_sent.split.length
# end

# Futher exploration
def longest_word(text)
  clean_text = text.gsub(/http\D+|\.|\?|\!|\-|\,|\(|\)|\//, ' ')
  long_word = clean_text.split.max_by {|word| word.length}
  puts long_word.length
  puts long_word
end

longest_word(File.read("longest_sentence.txt"))
