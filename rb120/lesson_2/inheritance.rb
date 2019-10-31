=begin
# Question 1

class Dog
  def speak
    "bark!"
  end

  def swim
    "swimming!"
  end
end

class Bulldog < Dog
  def swim
    "can't swim"
  end
end

teddy = Bulldog.new
puts teddy.swim
puts teddy.speak

# Question 2

class Pet
  def run
    "running!"
  end

  def jump
    "jumping!"
  end
end

class Dog < Pet
  def fetch
    "fetching!"
  end

  def speak
    "bark!"
  end

  def swim
    "swimming!"
  end
end

class Bulldog < Dog
  def swim
    "can't swim"
  end
end

class Cat < Pet
  def speak
    "meow!"
  end
end

Question 4

Method lookup path is the order in which Ruby
will traverse the class hierarchy to look for methods to invoke.
Once it finds the method it will invoke the first method and stop its traversal


=end