=begin
input: 1-3 arguments.(array of num, delimiter, and/ or)
output: string
rules:  first argument is array of integers
        second argument (if given) is a string that will be in between
          the integers except in between the last two integers
          if no arguement given it is default to ', '
        third argument (if given) is a string that will be in between
            the last two integers.
            if no argument is given it will default to 'or'
        if 2 integers only use the third argument not the second
data structure / algorithm:
create joinor method
  has default parameters (array, join1 = ', ', join2 = 'or')
if argument is bigger then two elements
  "#{arr[0..-2].join(join1) + join2} #{arr[-1]}"
if argument has only 2 elements
  "#{arr[0]} #{join2} #{arr[1]}"
=end

# def joinor(arr, join1 = ', ', join2 = 'or')
#   if arr.length > 2
#     arr[-1] = "#{join2} #{arr[-1]}"
#     arr.join(join1)
#   elsif arr.length < 2
#     arr[0].to_s
#   else
#     "#{arr[0]} #{join2} #{arr[1]}"
#   end
# end

def joinor(arr, join1 = ', ', join2 = 'or')
  case arr.length
  when 0 then ''
  when 1 then arr.first
  when 2 then arr.join(" #{join2} ")
  else
    arr[-1] = "#{join2} #{arr[-1]}"
    arr.join(join1)
  end
end
  


p joinor([1])
p joinor([1, 2]) == "1 or 2"
p joinor([1, 2, 3]) == "1, 2, or 3"
p joinor([1, 2, 3], '; ') == "1; 2; or 3"
p joinor([1, 2, 3], ', ', 'and') == "1, 2, and 3"