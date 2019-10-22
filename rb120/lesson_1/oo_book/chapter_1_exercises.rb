=begin
Question: How do we create an object in Ruby? 
Give an example of the creation of an object.
-----------------------------------------------------------------------------
We create an object by defining a class and instantiating it
by using the .new method to create an instance, also known as an object
=end

class CarRace
end

vancouver_race = CarRace.new

=begin
What is a module? What is its purpose? How do we use them with our classes? 
Create a module for the class you created in exercise 1 and include it properly.
------------------------------------------------------------------------------
A module is a collection of behaviours or methods that can be used in multiple
classes via mixins

A module also allows us to group reusable code into one place

we use a modules in our classes by using the include method invocation, followed
by the module name.

modules are also used as a namespace
=end

module Honk
  def honk
    puts "beep"
  end
end

class Car
  include Honk
end

honda = Car.new
honda.honk
# ----------------------------- namespace
class NameSpace
  class Car
  end
end

my_obj = NameSpace::Car.new

