=begin
input: [array of strings]
output: multiple string
rules:  words in array are case sensitive
        print each element from input array with the number of occurrences
datastructure / algorithm
define method count_occurrences with 1 parameter(vehicles)
  have new array without the duplicates on vehicles
  iterate through each element in the array with no duplicates
    use the current element to count how many there are in the vehicles array
    initalize local variable count and save the return value
    out put a string and use string interpolation for current element and
    count. To display how many occurrences

    occurrences = vehicles.count(vehicle)
    puts "#{vehicle} => #{occurrences}"
=end

def count_occurrences(vehicles)
  vehicles = vehicles.map { |v| v.downcase }
  
  vehicles.uniq.each_with_object({}) do |vehicle, hsh|
    hsh[vehicle] = vehicles.count(vehicle)
  end
  
end

vehicles = [
  'car', 'car', 'truck', 'CAR', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

p count_occurrences(vehicles)

=begin
On `lines 16-23` we define method count_occurrences with 1 parameter

On `line 17` we call #map method on vehicles and pass a {} block as an argument
in the {} block we have 1 parameter, local variable `v` and call downcase on 
local variable `v`. The return value is an array of strings with each string
being lowercase and save the return value to reassign the local variable `vehicles`

On `line 19-22` we call #uniq method on vehicles and use the return value to call on
#each method and pass in a do..end block with 1 parameter as the argument block as the
argument

On `line 20' we call #counts method on local variable vehicles passing through 
local variable vehicle as the argument. The return value is saved and intialize
local variable occurences and assigned the return value as the value

On `line 21` we call #puts method and pass a string object as the argument
  the string object uses string interpolation on local variable vehicle and occurences"

The output of this method is the vehichles and occernces within the array
the return is nil
=end
