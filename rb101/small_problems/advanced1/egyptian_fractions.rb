=begin
  input: fraction
  output: [ integers ]
  rules: return array of denominators that are part of an egyptian fraction
         that calculates the resultions rational number
  Data structure / algorithm:


=end

def egyptian(r_num)

  results = []

  current_denom = 1


  until r_num <= 0 do
    if Rational(1,current_denom) <= r_num
      results << current_denom
      r_num -= Rational(1,current_denom) 
    end

    current_denom += 1

  end
   results
end

p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))  