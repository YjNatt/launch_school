class Phrase
  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    word_occurance = Hash.new(0)

    words = @phrase.scan(/[\w']+/)
    words.each do |word|
      word = word[1...-1] if word.count("'") == 2
      word = word.downcase
      word_occurance[word] += 1
    end

    word_occurance
  end
end
