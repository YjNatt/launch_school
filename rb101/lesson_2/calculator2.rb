require 'yaml'
MESSAGES = YAML.load_file('calculator_bonus.yml')

def prompt(message)
  Kernel.puts("=> #{message}")
end

def valid_number?(num)
  num == num.to_i().to_s()
end

def operation_to_message(op)
  operator = case op
             when '1'
               'Adding'
             when '2'
               'Subtracting'
             when '3'
               "Multiplying"
             when '4'
               "Dividing"
             end
  operator
end

def numbers?(num)
  num.to_i.to_s == num || num.to_f.to_s == num ? true : false
end

prompt(MESSAGES['welcome'])

name = ''
loop do
  name = Kernel.gets().chomp()

  if name.empty?()
    prompt(MESSAGES['valid_name'])
  else
    break
  end
end

prompt("Hi #{name}")

loop do # main loop
  number1 = nil
  loop do
    prompt(MESSAGES['num1'])
    number1 = Kernel.gets().chomp()

    if valid_number?(number1)
      break
    else
      prompt(MESSAGES['not_valid_num'])
    end
  end

  number2 = nil
  loop do
    prompt(MESSAGES['num2'])
    number2 = Kernel.gets().chomp()

    if valid_number?(number2)
      break
    else
      prompt(MESSAGES['not_valid_num'])
    end
  end

  operation_prompt = <<-MSG
    What operation would you like to perform?
    1) add
    2) subtract
    3) multiply
    4) divide
  MSG

  prompt(operation_prompt)

  operation = ''
  loop do
    operation = Kernel.gets().chomp()

    if %w(1 2 3 4).include?(operation)
      break
    else
      prompt(MESSAGES['choose_op'])
    end
  end

  prompt("#{operation_to_message(operation)} the two numbers...")
  result = case operation
           when '1'
             number1.to_i() + number2.to_i()
           when '2'
             number1.to_i() - number2.to_i()
           when '3'
             number1.to_i() * number2.to_i()
           when '4'
             number1.to_f() / number2.to_f()
           end

  prompt("The result is #{result}")

  prompt(MESSAGES['again?'])
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?('y')
end

prompt(MESSAGES['thanks'])
