class Vehicle

  @@number_of_vehicles = 0

  attr_accessor :color
  attr_reader :year, :model

  def initialize(year, model, color)
    @year = year
    @model = model
    @color = color
    @current_speed = 0
    @@number_of_vehicles += 1
  end

  def self.number_of_vehicles
    "The vehicle count is #{@@number_of_vehicles}"
  end

  def self.gas_milage(gallons, miles)
    puts "your miles per gallon is #{miles / gallons}"
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

  def age
    "Your car was made in #{self.year} and is now #{years_old} years old"
  end

  private

  def years_old
    Time.now.year - self.year
  end

end

module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end

class MyCar < Vehicle
  
  NUMBER_OF_DOORS = 4

  def to_s
    "My car is a Model: #{self.model}, Year: #{self.year}, Color: #{self.color}"
  end

end

class MyTruck < Vehicle
  include Towable

  NUMBER_OF_DOORS = 2

  def to_s
    "My truck is a Model: #{self.model}, Year: #{self.year}, Color: #{self.color}"
  end
  
end

car = MyCar.new(1997, "Toyota Corolla", "Blue")
truck = MyTruck.new(2010, "Ford Tundra", "White")

# puts MyCar.ancestors
# puts '---------------------'
# puts MyTruck.ancestors
# puts '---------------------'
# puts Vehicle.ancestors

# car.speed_up(20)
# car.current_speed
# car.speed_up(20)
# car.current_speed
# car.break(20)
# car.current_speed
# car.shut_down
# car.current_speed
# car.spray_paint("yellow")
# puts car

class Student
  def initialize(input_name, input_grade)
    @name = input_name
    @grade = input_grade
  end

  def better_grade_than?(student)
    grade > student.grade
  end

  protected

  def grade
    @grade
  end

end

tim = Student.new("Tim", 95)
bob = Student.new("Bob", 42)

class Person

  def hello
    hi
  end
  
  private
  def hi
    puts 'hi'
  end

end

bob = Person.new
bob.hello