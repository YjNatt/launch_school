require 'yaml'
MESSAGES = YAML.load_file('loan_calculator.yml')

def prompt(message)
  puts "=> #{message}"
end

def integer_check(num)
  num.to_i.to_s == num
end

def correct_apr(apr)
  /\d/.match(apr) && /^\d*\.?\d*$/.match(apr)
end

prompt(MESSAGES['welcome'])

loop do
  loan = nil
  loop do
    prompt(MESSAGES['amount'])
    loan = gets.chomp
    if integer_check(loan)
      loan = loan.to_i
      break
    else
      prompt(MESSAGES['valid'])
    end
  end

  apr_format = <<-MSG
  Enter the Annual Percentage Rate (APR) in the following format:
      Enter 5.0 if your APR is 5%
      Enter 5.5 if your APR is 5.5%
  MSG

  prompt(apr_format)

  monthly_apr = nil
  loop do
    monthly_apr = gets.chomp
    if correct_apr(monthly_apr)
      monthly_apr = monthly_apr.to_f / 12 * 0.01
      break
    else
      prompt(MESSAGES['valid'])
    end
  end

  loan_in_months = nil
  loop do
    prompt(MESSAGES['years?'])
    loan_in_months = gets.chomp
    if integer_check(loan_in_months)
      loan_in_months = loan_in_months.to_i * 12
      break
    else
      prompt(MESSAGES['valid'])
    end
  end

  monthly_pay = loan *
                (monthly_apr /
                (1 - (1 + monthly_apr)**-loan_in_months))

  prompt("Your montly payment is $#{monthly_pay.round(2)}")

  prompt(MESSAGES['again?'])
  response = gets.chomp

  break unless response.downcase.start_with?('y')
end

prompt("Goodbye")
