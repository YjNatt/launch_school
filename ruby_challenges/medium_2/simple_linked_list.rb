class SimpleLinkedList
  def self.from_a(object)
    return new unless object

    simple_linked_list = new
    object.reverse.each do |number|
      simple_linked_list.push(number)
    end

    simple_linked_list
  end

  def initialize
    @number_of_elements = 0
  end

  def size
    @number_of_elements
  end

  def empty?
    @number_of_elements == 0
  end

  def push(number)
    @number_of_elements += 1

    @element = if @elements
                 Element.new(number, @elements)
               else
                 Element.new(number)
               end
  end

  def pop
    number = @elements.datum
    @elements = @elements.next
    @number_of_elements -= 1
    number
  end

  def peek
    @elements&.datum
  end

  def head
    @elements
  end

  def to_a
    array = []
    current_element = @elements
    while current_element
      array << current_element.datum
      current_element = current_element.next
    end
    array
  end

  def reverse
    reverse_linked_list = SimpleLinkedList.new
    to_a.each do |datum|
      reverse_linked_list.push(datum)
    end
    reverse_linked_list
  end
end

class Element
  attr_reader :datum, :next

  def initialize(number, next_element=nil)
    @datum = number
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end
