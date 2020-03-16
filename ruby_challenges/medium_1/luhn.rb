class Luhn
  def initialize(number)
    @number = number
  end

  def addends
    is_doubled = false
    @number.digits.map do |num|
      digit = check_digit(num, is_doubled)
      is_doubled = !is_doubled
      digit
    end.reverse
  end

  def checksum
    addends.sum
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(num)
    digits = Luhn.new(num * 10).addends
    add_digit = -(digits.sum % 10) % 10
    (num.to_s + add_digit.to_s).to_i
  end

  private

  def check_digit(digit, is_doubled)
    if is_doubled
      digit *= 2
      digit < 10 ? digit : digit -= 9
    else
      digit
    end
  end
end
