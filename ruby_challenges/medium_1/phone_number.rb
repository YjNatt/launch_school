class PhoneNumber
  INVALID = '0000000000'
  attr_reader :number
  def initialize(phone_number)
    return (@number = INVALID) if /[a-zA-Z]/.match?(phone_number)

    phone_number.gsub!(/[^\d]/, '')
    length = phone_number.length
    @number = if length == 10 || (length == 11 && phone_number[0] == '1')
                phone_number[-10..-1]
              else
                INVALID
              end
  end

  def area_code
    number[0, 3]
  end

  def to_s
    number.gsub(/(...)(...)(....)/, '(\1) \2-\3')
  end
end
