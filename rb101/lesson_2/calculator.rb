# ask the user for two numbers
# ask the user for an operation to perform
# perform the operation on the two numbers
# output the result

Kernel.puts("Welcome to Calculator!")

Kernel.puts("What's the first number?")
number1 = Kernel.gets().chomp()

Kernel.puts("What's the second number?")
number2 = Kernel.gets().chomp()

Kernel.puts("What operation would you like to perform? 1) add 2) subtract 3) multiply 4) divide")
operation = Kernel.gets().chomp()

if operation == '1'
  result = number1.to_i() + number2.to_i()
elsif operation == '2'
  result = number1.to_i() - number2.to_i()
elsif operation == '3'
  result = number1.to_i() * number2.to_i()
else
  result = number1.to_f() / number2.to_f()
end

Kernel.puts(result)