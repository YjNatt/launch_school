=begin
input: integer
output: display a triangle where the sides have integer amount of starts
rules: right angle of triangle should be displayed at bottom right
datastructure / algorithm
  create string = ' ' * integer
  have variable count == 1
  1 upto integer display
    puts display count * star starting at right side [-1]
    increase count by 1
=end

def triangle(n)
  star = '*' * n
  count = n
  n.times do
    puts star[0..count-1].rjust(n)
    count -= 1
  end
end

triangle(5)
triangle(9)

