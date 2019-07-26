def oddities(array)
  array.select{ |element| array.index(element).even? }
end

# further exploration
def oddities(array)
  array.select{ |element| array.index(element).odd? }
end

def oddities(array)
  odd_elements = []

  array.each do |element|
    if array.index(element) % 2 == 0 then odd_elements << element end
  end

  odd_elements
end

p oddities([2, 3, 4, 5, 6])
p oddities([1, 2, 3, 4, 5, 6])
p oddities(['abc', 'def'])
p oddities([123])
p oddities([])
