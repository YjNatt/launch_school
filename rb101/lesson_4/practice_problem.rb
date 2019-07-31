# Practice problem 1
[1, 2, 3] # the last line 'hi' is truthy so the select method will accept all objects

# Practice problem 2
1 # returns the number of objects that has length greater than 4

# Practice problem 3
[1, 2, 3]

# Practice problem 4
{ 'a' => 'ant', 'b' => 'bear', 'c' => "cat"}

# Practice problem 5
# deletes [a: 'ant'] pair

# Practice problem 6
# pop removes the last item in the array and also returns that value
# that value (caterpillar) is the object where #.size is called on

# Practice problem 7
# the block returns a boolean (true or false); the method returns true however
# only 1 is output because the iteration stops after the first item is considered true

# Practice problem 8
# take returns the first n elements in the array, it is not destructive

# Practice problem 9
{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end

# Practice problem 10
# [1, nil, nil] nil because if num > 1 the return value of puts is nil