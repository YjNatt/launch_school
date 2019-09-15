# What is the return value of each_with_object in the following code? Why?

['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
  hash[value[0]] = value
end

=begin
  { 'a' => 'ant', 'b' => 'bear', 'c' => 'cat' } is the return value of each_with_object
  
  each_with_object was invoked on the array while passing in a hash as an argument
  a block is passed as an argument to the hash and creates a key value pair for
  each element. with the key being the first letter of the string with the slice method
  and the value is the string itself

=end