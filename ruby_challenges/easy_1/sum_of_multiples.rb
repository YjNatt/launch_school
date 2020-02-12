class SumOfMultiples
  def initialize(*set)
    @set = set
  end

  def self.to(num, set=[3, 5])
    multipliers = []
    
    set.each do |multiplier|
      current_multiplier = multiplier

      while current_multiplier < num
        multipliers << current_multiplier if !multipliers.include?(current_multiplier)
        current_multiplier += multiplier
      end
    end

    multipliers.sum
  end

  def to(num)
    self.class.to(num, @set)
  end
end
