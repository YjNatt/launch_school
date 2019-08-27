def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3].sort
  case
  when angles.reduce(:+) != 180 || angles.include?(0)
    :invalid
  when angles.include?(90)
    :right
  when angles.count { |angle| angle > 90} == 1
    :obtuse
  else
    :acute
  end
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid