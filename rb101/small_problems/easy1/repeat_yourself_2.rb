# input: 'string', integer
# output: repeated 'string'
# rules: repeat the string integer times
# datastucture/algorithm:
# have 2 parameters(str, num)
# use times method to multiply the string num times

def repeat(str, num)
  num.times{ puts str }
end

repeat('Hello', 3)

=begin
On line 8 to 10 we define the method repeat with two parameters: str, num

On line 9 we call the #times method on the variable num and pass
in a {} block as an argument

In side the {} on line 9 we call the #puts method and pass in the local 
variable str as the argument
=end