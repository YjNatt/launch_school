class Scrabble
  LETTERS = %w(A E I O U L N R S T
               D G
               B C M P
               F H V W Y
               K
               J X
               Q Z)

  def initialize(word)
    @word = word || ''
  end

  def self.score(word)
    Scrabble.new(word).score
  end

  def score
    @word.gsub!(/\s/, '')
    @word.chars.reduce(0) do |sum, letter|
      points = case LETTERS.index(letter.upcase)
               when 0..9   then 1
               when 10..11 then 2
               when 12..15 then 3
               when 16..20 then 4
               when 21     then 5
               when 22..23 then 8
               else             10
               end
      sum + points
    end
  end
end
