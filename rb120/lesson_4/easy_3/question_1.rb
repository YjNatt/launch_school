class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# hello = Hello.new
# hello.hi
# outputs hello
# hello.bye
# exception raised
# hello.greet
# parameter exception
# hello.greet("Goodbye")
# outputs goodbye
# Hello.hi
# no method exception raised