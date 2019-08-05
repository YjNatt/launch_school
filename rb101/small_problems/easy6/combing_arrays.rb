=begin
input: 2 arrays
output: 1 array with all the elements in each array but no dublication
rules: return single array
       no duplication in array
       do they have to be in certain order?
       return a new array?
       array with nothing?

data structure / algorithm: Array
  create new array called results
  loop through each element in both arrays
    if the element does not exist in results
      push element
    else 
      next
  return results
=end

def merge(arr1, arr2)
  results = []
  arr1.each { |el| results << el if !results.include?(el) }
  arr2.each { |el| results << el if !results.include?(el) }
  results
end

def merge(arr1, arr2)
  (arr1 + arr2).uniq
end

# launch school solution
def merger(arr1, arr2)
  arr1 | arr2
end

p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]