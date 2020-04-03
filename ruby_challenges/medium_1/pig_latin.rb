class PigLatin
  def self.translate(phrase)
    phrase.split.map do |word|
      if vowel_sound?(word)
        word + 'ay'
      else
        transform(word)
      end
    end.join(' ')
  end

  def self.vowel_sound?(word)
    word.match?(/\A[aeiou]|[yx][^aeiou]/)
  end

  def self.transform(word)
    word_split = word.scan(/(\A[^aeiou]*qu|[^aeiou]+)(.+)/).first
    word_split[1] + word_split[0] + 'ay'
  end
end
