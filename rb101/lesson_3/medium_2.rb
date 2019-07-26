=begin 

Question 1

Question 2

Question 3
my_string will return the original string "pumpkins" because += does not mutate the called
my_array will return "pumpkins", "rutabaga"] because << does mutate the caller

Question 4
my_string will return "pumpkinsrutabage" because << mutates
my_array will return ["pumpkins"] because inside the method def,
the array was reassigned to a different variable

Question 5
def not_so_tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param += ["rutabaga"]
end

my_string = "pumpkins"
my_array = ["pumpkins"]
my_string, my_array =  not_so_tricky_method(my_string, my_array)

puts "My string looks like this now: #{my_string}"
puts "My array looks like this now: #{my_array}"

Question 6
def color_valid(color)
  color == "blue" || color == "green"
end

