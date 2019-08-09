=begin
input: 2 arguement integers
output: print out integers and strings "Fizz", "Buzz" or "FizzBuzz"
rules: list all the numbers from the first integer to the second integer
       if the number is divisible by 3 replace integer with "Fizz"
       if the number is divisible by 5 replace integer with "Buzz"
       if the number is divisible by 5 and 3 replace integer with "FizzBuzz"
datastructure / algorithm
loop through the first intger to the last integer
 use conditionals within loop
 if integer divisible by 3 print Fizz
 if integer divisible by 5 print Buzz
 if integer divisible by 3 and 5 print FizzBuzz
 else print integer
=end

def fizzbuzz_value(num)
  case 
  when num % 3 == 0 && num % 5 == 0 then "FizzBuzz"
  when num % 5 == 0 then "Buzz"
  when num % 3 == 0 then "Fizz"
  else                   num
  end
end

def fizzbuzz(num1,num2)
  results = []
  num1.upto(num2) do |num|
    results << fizzbuzz_value(num)
  end
  puts results.join ", "
end

fizzbuzz(1, 15)
