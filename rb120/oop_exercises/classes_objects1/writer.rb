class Cat
  attr_writer :name
  attr_reader :name
  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{self.name}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet
kitty.name = "Luna!"
kitty.greet