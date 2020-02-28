class PerfectNumber
  def self.classify(num)
    raise RuntimeError if num < 0

    divisors_sum = (2..(num / 2)).reduce(1) do |sum, divisor|
      num % divisor == 0 ? sum + divisor : sum
    end

    if divisors_sum == num
      "perfect"
    elsif divisors_sum > num
      "abundant"
    else
      "deficient"
    end
  end
end
