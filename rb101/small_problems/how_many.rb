# recieve an array called 'vehicles'
# create a hash for each type of vehicle
#   "key" = vehicle type "value" = 0
# iterate through the array
#   for each element compare to hash and increment by 1 each instance
#   return hash in to string

def count_occurrences(vehicle)
  vehicle_hash = {
    'car' => 0,
    'truck' => 0,
    'SUV' => 0,
    'motorcycle' => 0
  }

  vehicle.each { |type| vehicle_hash[type] += 1 }

  vehicle_hash.each_pair do |key, value| 
    puts "#{key} => #{value}"
  end
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)

# Launch school solution
#------------------------
def count_occurrences(array)
  occurrences = {}

  array.each do |element|
    occurrences[element] = array.count(element)
  end

  occurrences.each do |element, count|
    puts "#{element} => #{count}"
  end
end