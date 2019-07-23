def teddy(name='Teddy')
  age = rand(20..200)
  puts "#{name} is #{age} years old" 
end

puts "What is Teddy's name"
teddy_name = gets.chomp
teddy_name == '' ? teddy : teddy(teddy_name)
