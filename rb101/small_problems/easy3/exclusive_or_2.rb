=begin
input: boolean_1, boolean_2
output: boolean
rules: if boolean_1 and boolean_2 are different return true
       else return false
ds / algorithm
  if boolean_1 does not equal boolean_2 return true, else false
=end

def xor?(boolean_1, boolean_2)
  boolean_1 != boolean_2
end

p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false

=begin
 on lines 10 - 12 we define the method xor? with 2 parameters
  on line 11 we compare if the first parameter is not equal to the second parameter
   and return true if the 2 are not equal or false if they are
=end