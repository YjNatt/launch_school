CONVERT_INT_TO_PERCENT = 0.01

puts "What is the bill?"
bill = gets.chomp.to_f

puts "What is the tip percentage?"
tip_percent = gets.chomp.to_f * CONVERT_INT_TO_PERCENT

tip = (bill * tip_percent).round(2)
total = (tip + bill).round(2)

puts "The tip is %0.2f" %[tip]
puts "The total is %0.2f" %[total]