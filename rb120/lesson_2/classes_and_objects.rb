=begin
# Question 1

class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

bob = Person.new('bob')
p bob.name                  # => 'bob'
bob.name = 'Robert'
p bob.name                  # => 'Robert'

# Question 2

class Person
  attr_accessor :first_name, :last_name
  def initialize(first_name, last_name='')
    self.first_name = first_name
    self.last_name = last_name
  end
  def name
    "#{self.first_name} #{self.last_name}"
  end

end

bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'

# Question 3

class Person
  attr_accessor :first_name, :last_name
  def initialize(fullname)
    parse_full_name(fullname)
  end

  def name
    "#{self.first_name} #{self.last_name}".strip
  end

  def name=(fullname)
    parse_full_name(fullname)
  end

  def parse_full_name(fullname)
    parts = fullname.split
    self.first_name = parts.first
    self.last_name = parts.length > 1 ? parts.last : ""
  end
end

bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'

bob.name = "John Adams"
p bob.first_name            # => 'John'
p bob.last_name             # => 'Adams'

# Question 4

bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')
p rob.name == bob.name

# Question 5
=end
class Person
  attr_accessor :first_name, :last_name
  def initialize(fullname)
    parse_full_name(fullname)
  end

  def name
    "#{self.first_name} #{self.last_name}".strip
  end

  def name=(fullname)
    parse_full_name(fullname)
  end

  def parse_full_name(fullname)
    parts = fullname.split
    self.first_name = parts.first
    self.last_name = parts.length > 1 ? parts.last : ""
  end

  def to_s
    name
  end
end

bob = Person.new("Robert Smith")
puts "The person's name is: #{bob}"