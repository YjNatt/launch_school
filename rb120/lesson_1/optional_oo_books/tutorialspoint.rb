# class Box
#   # Class variables
#   @@count = 0

#   def initialize(input_width, input_height)
#     @width, @height = input_width, input_height
#     @@count += 1
#   end

#   # accessors
#   def get_width
#     @width
#   end

#   def get_height
#     @height
#   end

#   # setter methods
#   def set_width=(input_width)
#     @width = input_width
#   end

#   def set_height=(input_height)
#     @height = input_height
#   end

#   # instance methods
#   def get_area
#     get_width * get_height
#   end

#   # class methods
#   def self.print_count
#     puts "You created #{@@count} boxes."
#   end

#   # to_s method
#   def to_s
#     "(width:#{get_width},height:#{get_height})"
#   end
# end

# box1 = Box.new(4, 6)
# box2 = Box.new(4, 6)

# puts box1.to_s

#---------------------------------------
# class Box
#   def initialize(w,h)
#     @width, @height = w, h
#   end

#   def get_area
#     @width * @height
#   end
# end

# class BigBox < Box
#   def get_area
#     @area = @width * @height
#     puts "The area of the box is #@area"
#   end
# end

# box = BigBox.new(10,20)

# p box.get_area

#------------------------------------------
class Box
  BOX_COMPANY = "TATA Inc"
  BOX_WEIGHT = 10

  def initialize(w, h)
    @width, @height = w, h
  end
  

end

puts Box::BOX_COMPANY
