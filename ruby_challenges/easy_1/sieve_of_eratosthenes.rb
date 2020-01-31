class Sieve
  attr_reader :limit
  def initialize(limit)
    @limit = limit
  end

  def primes
    numbers = Hash.new { |hash, num| hash[num] = { is_marked: false} }
    2.upto(limit) { |num| numbers[num] }
    
    prime_number = 2
    loop do
      counter = 2
      
      loop do
        composite_number = prime_number * counter
        composite_number > limit ? break : numbers[composite_number][:is_marked] = true
        counter += 1
      end
      
      next_prime_number = prime_number += 1

      loop do
        break if next_prime_number > limit

        if !numbers[next_prime_number][:is_marked]
          prime_number = next_prime_number
          break
        end
        next_prime_number += 1
      end
    
      break if prime_number == nil || prime_number > limit
    end

    numbers.select { |_, hsh| !hsh[:is_marked] }.keys
  end
end