class Octal
  BASE = 8
  INVALID_OCTAL = /[^0-7]/
  def initialize(octal)
    @octal = valid_octal(octal) ? octal : '0'
  end

  def to_decimal
    digits = @octal.to_i.digits

    digits.map.with_index do |digit, index|
      digit * BASE ** index
    end.sum
  end

  private

  def valid_octal(number)
     !(INVALID_OCTAL=~ number)
  end
end