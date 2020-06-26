class Triplet
  def self.where(min_factor: 1, max_factor:, sum: nil)
    numbers = (min_factor..max_factor).to_a

    numbers.combination(3).each_with_object([]) do |nums, pythagoreans|
      triplet = new(*nums)
      next unless triplet.pythagorean?
      pythagoreans << triplet if triplet.sum == sum || !sum
    end
  end

  def initialize(num1, num2, num3)
    @num1 = num1
    @num2 = num2
    @num3 = num3
  end

  def sum
    @num1 + @num2 + @num3
  end

  def product
    @num1 * @num2 * @num3
  end

  def pythagorean?
    @num1**2 + @num2**2 == @num3**2
  end
end
