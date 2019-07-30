def select_fruit(hash)
  fruit_hash = hash.select { |key, value| value == 'Fruit' }
end
  
def select_fruit(hash)
  hash_keys = hash.keys
  count = 0
  fruit = {}

  loop do
    break if count == hash_keys.length
    hash_key = hash_keys[count]
    if hash[hash_key] == 'Fruit'
      fruit[hash_key] = 'Fruit'
    end
    count += 1
  end

  fruit
end

def double_numbers(numbers)
  counter = 0
  
  loop do
    break if counter == numbers.size

    current_number = numbers[counter]
    numbers[counter] = current_number * 2
    counter += 1
  end
  numbers
end

my_numbers = [1, 4, 3, 7, 2, 6]
double_numbers(my_numbers)

def double_odd_numbers(my_numbers)
  counter = 0
  doubled_numbers = []

  loop do 
    break if counter == my_numbers.length

    current_num = my_numbers[counter]
    current_num *= 2 if counter.odd?
    doubled_numbers << current_num

    counter += 1
  end
  doubled_numbers
end