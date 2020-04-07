class Palindromes
  attr_reader :value

  def initialize(hash)
    @max_factor = hash.fetch(:max_factor)
    @min_factor = hash.fetch(:min_factor, 1)
    @products_factors = Hash.new { |hsh, key| hsh[key] = [] }
  end

  def generate
    (@min_factor..@max_factor).each do |factor1|
      (factor1..@max_factor).each do |factor2|
        product = factor1 * factor2
        if palindrome?(product)
          factors = @products_factors[product]
          factors << [factor1, factor2]
        end
      end
    end
    self
  end

  def largest
    num, nums = @products_factors.max
    Struct.new(:value, :factors).new(num, nums)
  end

  def smallest
    num, nums = @products_factors.min
    Struct.new(:value, :factors).new(num, nums)
  end

  private

  def palindrome?(product)
    product.to_s == product.to_s.reverse
  end
end
