def prompt(str)
  puts "=>#{str}"
end

prompt('What is your age?')
age = gets.chomp.to_i

prompt('At what age would you like to retire?')
retire_at = gets.chomp.to_i

years_left = retire_at - age

year = Time.now.year

retire_year = year + years_left

message = <<-MSG
  It's #{year}. You will retire in #{retire_year}.
  You have only #{years_left} of work to go!
MSG

prompt(message)
