class Crypto
  def initialize(phrase)
    @phrase = phrase
  end

  def normalize_plaintext
    @phrase.scan(/[a-z0-9]/i).join.downcase
  end

  def size
    Math.sqrt(normalize_plaintext.length).ceil
  end

  def plaintext_segments
    normalize_plaintext.scan(/.{1,#{size}}/)
  end

  def ciphertext
    ciphertext_segments.join
  end

  def normalize_ciphertext
    ciphertext_segments.join(' ')
  end

  def ciphertext_segments
    segments = plaintext_segments
    cipher_segments = Array.new(segments.first.length) { '' }
    segments.each do |segment|
      segment.chars.each_with_index do |char, index|
        cipher_segments[index] << char
      end
    end
    cipher_segments
  end
end
