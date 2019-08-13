=begin
input: array
output: new array
rules: move the first element to the end of the array
       original array should not be mutated
       cannot use rotate or rotate!

data structure / algorithm       
dup the input array to result
pop and shift dup array
  save return to variable first, last
push and unshift variable first, last
return result
=end

def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

def rotate_string(string)
  rotate_array(string.split"").join ""
end

def rotate_digits(int)
  rotate_array(int.digits.reverse)
end

p rotate_string("hello")
p rotate_digits(123456)