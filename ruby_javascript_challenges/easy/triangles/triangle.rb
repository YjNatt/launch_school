=begin
  input: 3 integers
  output: string
  rules:
    - determine whether a triangle is equilateral, isosceles, or scalene
      - equilateral has all 3 sides the same length
      - isosceles has 2 sides the same length
      - scalene has all sides different length
    - valid triangle
      - all sides must be greater than 0
      - the sum of any two sides must be greater that the length of the third
        side

    - need a Triangle class
    - constructor takes 3 numbers as arguments
    - must have #kind instance method which returns a string
    - raises an ArgumentError if invalid triangle

  data structures
    - array to keep track of sides

  algorithm
    - Constructor
      - initialize sides and assign an empty array
      - check if triangle is valid
        - if valid push all arguments into sides array
        - if invalid raise ArgumentError

    - if all sides > 0 and any 2 side length is is greater than third side

    - define kind instance method
      - initialize unique_sides and assign an array of only unique sides length
      - if length of unique_sides is 1 return 'equilateral'
      - if length of unique_sides is 2 return 'isosceles'
      - if length of unique_sides is 3 return 'scalene'
=end

class Triangle
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3]

    raise ArgumentError unless valid?(side1, side2, side3)
  end

  def kind
    unique_sides = @sides.uniq

    case unique_sides.length
    when 1
      'equilateral'
    when 2
      'isoceles'
    else
      'scalene'
    end
  end

  private

  def valid?(side1, side2, side3)
    sides = [side1, side2, side3]
    sides.all? { |side| side > 0 } && sides.min(2).sum > sides.max
  end
end
