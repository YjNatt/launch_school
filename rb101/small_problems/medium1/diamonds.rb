def triangle(num)
  spaces = num -1
  stars = 1
  triangle_arr = []
  1.upto(num) do |x|
    string = ''
    if x.odd?
      string << " " * spaces + '*'
      triangle_arr << string
      spaces -= 1
      stars += 1
    end
  end
  triangle_arr
end

def diamond(num)
  left = triangle(num)
  right = triangle(num).reverse
  right.map {|x| p x}

  count = -1
  left.map do |left|
    left
  end
end

puts diamond(9)