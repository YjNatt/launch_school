class Prime
  def self.nth(num)
    raise ArgumentError if num <= 0
    prime_count = 1
    current_num = 2
    until prime_count >= num
      current_num += 1
      prime_count += 1 if prime?(current_num)
    end
    current_num
  end

  def self.prime?(num)
    return false if num == 1
    (2..(Math.sqrt(num))).each do |divisor|
      (return false) if num % divisor == 0
    end
    true
  end
end
