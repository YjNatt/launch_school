def hello
  "hello!"
end

def echo(str)
  str
end

def echo_with_yield(str)
  yield if block_given?
  str
end

def say(words)
  yield if block_given?
  puts "> " + words
end

def increment(number)
  if block_given?
    yield(number + 1)
  end
  number + 1
end

def test
  yield(1)
end

def compare(str)
  puts "Before: #{str}"
  after = yield(str)
  puts "After: #{after}"
end

def test(&block)
  puts "What's &block #{block}"
end