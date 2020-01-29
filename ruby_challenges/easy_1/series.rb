class Series
  def initialize(string_of_digits)
    @string_of_digits = string_of_digits
  end

  def slices(num)
    raise ArgumentError.new('Number is greater than legnth of string') if num > @string_of_digits.length
    slices = [];
    @string_of_digits.chars.each_cons(num) do |nums|
      slices << nums.map(&:to_i)      
    end
    slices
  end
end
