class RunLengthEncoding
  def self.encode(input)
    strings = input.chars.each_with_object([]) do |char, arr|
      /#{char}/.match?(arr.last) ? arr.last << char : arr << char
    end

    strings.each_with_object("") do |str, compressed_str|
      reduced_str = str.size > 1 ? "#{str.size}#{str[0]}" : str
      compressed_str << reduced_str
    end
  end

  def self.decode(input)
    strings = input.scan(/[0-9]+.|./)
    strings.each_with_object("") do |str, decompressed_str|
      str = str.match?(/[0-9]/) ? str[-1] * str[0..-2].to_i : str
      decompressed_str << str
    end
  end
end
