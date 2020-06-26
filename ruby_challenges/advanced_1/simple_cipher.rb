class Cipher
  ALPHABET = ('a'..'z').to_a
  attr_reader :key

  def initialize(key = generate_key)
    raise ArgumentError if key.match?(/[^a-z]/) || key.empty?
    @key = key
  end

  def encode(plaintext)
    cipher(plaintext, :+)
  end

  def decode(encoded_text)
    cipher(encoded_text, :-)
  end

  private

  def cipher(text, operation)
    text.chars.map.with_index do |letter, index|
      letter_index = ALPHABET.index(letter)
      key_index = ALPHABET.index(@key[index % text.length])
      ALPHABET[(letter_index.send(operation, key_index)) % 26]
    end.join
  end

  def generate_key
    (1..100).map { ALPHABET.sample }.join
  end
end
