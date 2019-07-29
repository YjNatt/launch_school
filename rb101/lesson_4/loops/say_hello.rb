say_hello = true
increment = 0

while say_hello
  puts 'Hello!'
  increment += 1
  say_hello = false if increment == 5
end