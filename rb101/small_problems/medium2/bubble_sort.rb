=begin
input: array
output: mutated sorted array
rules:  by making multiple iterations
            compare each pair of consecutive elements
            if first element is greater
              swap
            else stay
        stop iterations when a full loop iteration doesnt mutate the array

data structure / algorithm :
def bubble_sort!(arr)
  container = []
  loop
    for each with index |el, index|
      compare el with arr[index + 1]
      if el > arr[index + 1] 
        container << delete at arr[index + 1]
        container << delete at el
        arr insert at index container[0]
        arr insert at index + 1 container[0]
      
=end

# def bubble_sort!(arr)
#   loop do
#     swapped = false
#     arr.each_index do |index|
#       break if arr[index + 1] == nil
#       if arr[index] > arr[index + 1]
#         arr[index], arr[index + 1] = arr[index + 1], arr[index]
#         swapped = true
#       end
#     end

#     break if swapped == false
#   end
#   p arr
# end

def bubble_sort!(arr)
  n = arr.length
  loop do
    newn = 0
    1.upto(arr.size - 1) do |index|
      next if arr[index - 1] <= arr[index]
      arr[index], arr[index - 1] = arr[index - 1], arr[index]
      newn = index
    end

    break if newn <= 1
  end
end

names = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)

bubble_sort!([5,3])
bubble_sort!([6, 2, 7, 1, 4])
bubble_sort!(names)

p names