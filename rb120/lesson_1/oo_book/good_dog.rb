class Parent
  def say_hi
    p "Hi from Parent."
  end
end

Parent.superclass

class Child < Parent
  def say_hi
    p "Hi from Child"
  end

  def send
    p "send from Child"
  end

  def instance_of?
    p "i'm a fake instance"
  end
end

son = Child.new
p son.instance_of? Child
p son.instance_of? Parent