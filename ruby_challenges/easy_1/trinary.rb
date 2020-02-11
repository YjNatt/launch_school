class Trinary
  BASE = 3
  INVALID_TRINARY = /[^0-2]/
  
  def initialize(trinary_string)
    @trinary = trinary_string =~ INVALID_TRINARY ? 0 : trinary_string.to_i
  end

  def to_decimal
    @trinary.digits.map.with_index do |digit, index|
      digit * BASE ** index
    end.sum
  end
end