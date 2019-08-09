def sub(str)
  str.chars.map.with_index { |_,index| str[0..index] }
end

# def substrings(str)
#   result = []
#   0.upto(str.length - 1) do |i|
#     str.chars.map.with_index { |_,index| result << str[i..index] if index >= i }
#   end
#   result
# end

def substrings(str)
  results = []
  0.upto(str.length - 1) do |i|
    this_sub = str[i..-1]
    results.concat(sub(this_sub))
  end
  results
end

p substrings('abcde')
