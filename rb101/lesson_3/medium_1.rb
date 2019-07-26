=begin 

Question 1
10.times{|i| ("The Flintstones Rock!").rjust(21 + i)}

Question 2
puts "the value of 40 + 2 is " + (40 + 2).to_s
puts "the value of 40 + 2 is #{40 + 2}"

Question 3
def factors(number)
  divisor = number
  factors = []
  while divisor > 0 do
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end
  factors
end

Question 4
<< mutates the array after the return value is outputted
+ returns the original array

Question 5

pass limit as a arguement in fib method

limit = 15

def fib(first_num, second_num,limit)
  while first_num + second_num < limit
    sum = first_num + second_num
    first_num = second_num
    second_num = sum
  end
  sum
end

result = fib(0, 1, limit)

OR

make limit a const

LIMIT = 15

def fib(first_num, second_num)
  while first_num + second_num < LIMIT
    sum = first_num + second_num
    first_num = second_num
    second_num = sum
  end
  sum
end

result = fib(0, 1)

Question 6
34

Question 7
Yes because the original hash "munsters" is being passed as an argument in mess_with demographics

Question 8
"paper"

Question 9
"no"

=end 