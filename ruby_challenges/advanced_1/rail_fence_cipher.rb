class RailFenceCipher
  def self.encode(text, number_of_rails)
    return text if number_of_rails == 1
    encoded_indices(text.length, number_of_rails)
      .each_with_object("") do |index, encoded_text|
      encoded_text << text[index]
    end
  end

  def self.decode(encoded_text, number_of_rails)
    return encoded_text if number_of_rails == 1
    indices = encoded_indices(encoded_text.length, number_of_rails)
    (0...encoded_text.length).each_with_object("") do |index, decoded_text|
      decoded_text << encoded_text[indices.index(index)]
    end
  end

  def self.encoded_indices(text_length, number_of_rails)
    rail_index_to_indices = {}
    current_rail_index = 0
    descending = true

    (0...text_length).each do |index|
      rail = rail_index_to_indices.fetch(current_rail_index) do |key|
        rail_index_to_indices[key] = []
      end
      rail << index
      descending ? current_rail_index += 1 : current_rail_index -= 1
      if current_rail_index == 0 || current_rail_index == number_of_rails - 1
        descending = !descending
      end
    end

    rail_index_to_indices.values.flatten
  end
end
