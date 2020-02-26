class Anagram
  def initialize(word)
    @word = word.downcase
  end

  def match(words)
    words.select do |word|
      is_anagram = false
      word = word.downcase

      if word.length == @word.length && word != @word
        is_anagram = word.chars.all? do |letter|
          @word.count(letter) == word.count(letter)
        end
      end

      is_anagram
    end
  end
end
