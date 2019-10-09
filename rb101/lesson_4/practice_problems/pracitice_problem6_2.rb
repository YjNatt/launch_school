# What is the block's return value in the following code? How is it determined?
# what is the return value of any? in this code and what does it output?
[1, 2, 3].any? do |num|
  puts num
  num.odd?
end

=begin
  - last expression in the block is the return value of the block, unless there
  is an explicit return; The last expression evaluated is num.odd? which returns
  a boolean therfore the return value of the block is either true or false
 
  -The #any method evaluates the block and returns true if the block's return
   value is neither false nor nil

  -the code output is 1 and returns true. #any method also stops evaluating code
  once it can guarentee a return value
=end