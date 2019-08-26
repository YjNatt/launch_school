=begin
input: 3 integer arguments
output: what type of triangle or invalid triangle
rules: the sum of the 2 shortest sides must be greater than the longest
         to be a triangle and all sides must be greater than 0
       equilateral == 3 sides all equal length
       isosceles == 2 side equal length
       scalene == all 3 sides different length
datastructure / algorithm
store all three arguments in an array and sort
  if the sum of first 2 in array is less than last element it is invalid triangle

=end

def triangle(x,y,z)
  sides = [x, y, z].sort
  case
  when sides[0..1].sum < sides[-1] || sides.include?(0)
    :invalid
  when sides.count(sides[0]) == 3
    :equilateral
  when sides.count(sides[1]) == 2
    :isosceles
  else
    :scalene
  end
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid