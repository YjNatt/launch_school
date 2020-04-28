class Crypto
  def initialize(phrase)
    @phrase = phrase
    @normalized_plaintext = @phrase.gsub(/[^a-zA-Z0-9]/, '').downcase
  end

  def normalize_plaintext
    @normalized_plaintext
  end

  def size
    Math.sqrt(@normalized_plaintext.length).ceil
  end

  def plaintext_segments
    @normalized_plaintext.scan(/.{1,#{size}}/)
  end

  def ciphertext
    ciphertext_segments.join
  end

  def normalize_ciphertext
    ciphertext_segments.join(' ')
  end

  private
  
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
