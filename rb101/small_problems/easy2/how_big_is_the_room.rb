def prompt(str)
  puts "=>#{str}"
end

SQFEET_TO_SQINCHES = 144
SQFEET_TO_SQCENTI = 929.0304

prompt('What is the length of the room in feet')
length = gets.chomp.to_f
prompt('What is the width of the room in feet')
width = gets.chomp.to_f

square_feet = (length * width).round(2)
square_inch = (square_feet * SQFEET_TO_SQINCHES).round(2)
square_centi = (square_feet * SQFEET_TO_SQCENTI).round(2)

prompt"The area of the room is #{square_feet} square feet " +
      "(#{square_inch} square inches). " +
      "(#{square_centi} square centimeter"