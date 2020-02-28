class Integer
  def to_roman
    roman_numbers = { 1 => "I", 4 => "IV", 5 => "V", 9 => "IX",
                      10 => "X", 40 => "XL", 50 => "L",
                      90 => "XC", 100 => "C", 400 => "CD",
                      500 => "D", 900 => "CM", 1000 => "M" }

    digits = roman_numbers.keys.sort.reverse
    number = self

    digits.each_with_object('') do |num, str|
      until number < num
        number -= num
        str << roman_numbers[num]
      end
    end
  end
end
