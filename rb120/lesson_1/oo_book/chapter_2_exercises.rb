class MyCar
  attr_accessor :color
  attr_reader :year, :model

  def initialize(year, model, color)
    @year = year
    @model = model
    @color = color
    @current_speed = 0
  end

  def self.gas_milage(gallons, miles)
    puts "your miles per gallon is #{miles / gallons}"
  end

  def to_s
    "Model: #{self.model}, Year: #{self.year}, Color: #{self.color}"
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

class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end

bob = Person.new("Steve")
bob.name = "Bob"