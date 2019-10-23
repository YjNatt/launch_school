# class MyCar
#   def initialize(year, color, model)
#     @year = year
#     @color = color
#     @model = model
#     @current_speed = 0
#   end

#   def speed_up(number)
#     @current_speed += number
#     puts "you push the gas and accelerate #{number} mph."
#   end

#   def break(number)
#     @current_speed -= number
#     puts "you push the break and decelerate #{number}"
#   end

#   def current_speed
#     puts "you are now going #{@current_speed} mph."
#   end

#   def car_off
#     @current_speed = 0
#     puts "let's park this bad boy"
#   end
# end

# toyota = MyCar.new(1992, "blue", "camery")
# puts toyota.speed_up(20)
# puts toyota.current_speed
# puts toyota.speed_up(20)
# puts toyota.current_speed
# puts toyota.break(10)
# puts toyota.current_speed
# puts toyota.car_off
# puts toyota.current_speed

class MyCar
  attr_accessor :color
  attr_reader :year

  def initialize(year, model, color)
    @year = year
    @model = model
    @color = color
    @current_speed = 0
  end

  def speed_up(number)
    @current_speed += number
    puts "You push the gass and accelerate #{number} mph."
  end

  def break(number)
    @current_speed -= number
    puts "You push the break and decelerate #{number} mph."
  end
  
  def current_speed
    puts "You are now going #{@current_speed} mph."
  end

  def shut_down
    @current_speed = 0
    puts "Let's park this bad boy!"
  end

  def spray_paint(paint)
    self.color = paint
    puts "your new #{color} paint job looks great!"
  end

end

camery = MyCar.new('1997', 'toyota camery', 'blue')

# camery.current_speed
# camery.speed_up(20)
# camery.current_speed
# camery.break(14)
# camery.current_speed
# camery.shut_down
# camery.current_speed

# puts camery.get_color
# puts camery.set_color("red")
# puts camery.get_color
# puts camery.get_year

# puts camery.color
# puts camery.color = 'red'
# puts camery.color
# puts camery.year

puts camery.spray_paint("yellow")