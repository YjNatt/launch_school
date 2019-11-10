class Cat
 @@cats_count = 0

 def initialize(type)
    @type = type
    @age = 0
    @@cats_count += 1
 end

 def self.cats_count
  @@cats_count
 end
end

=begin
  the @@cats_count variable will keep track of how many cat
  instances were made.

  This is because in the initialize method we increment the @@cats_count by 1
=end

Cat.new("red")
Cat.new("brown")

p Cat.cats_count