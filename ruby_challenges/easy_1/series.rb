class Series
  def initialize(string_of_digits)
    @string_of_digits = string_of_digits
  end

  def slices(num)
    raise ArgumentError.new('Number is greater than length of string') if num > @string_of_digits.length
    slices = [];
    # @string_of_digits.chars.each_cons(num) do |nums|
    #   slices << nums.map(&:to_i)      
    # end

    index = 0
    digits = @string_of_digits.chars.map(&:to_i)

    loop do
      sliced_digits = digits[index, num]
      break if sliced_digits.length < num
      slices << sliced_digits
      index += 1
    end
    slices
  end
end
