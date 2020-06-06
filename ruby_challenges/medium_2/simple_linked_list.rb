class SimpleLinkedList
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
    element = Element.new(number, @element)
    @element = element
  end

  def pop
    number = @element.datum
    @element = @element.next
    @number_of_elements -= 1
    number
  end

  def peek
    @element&.datum
  end

  def head
    @element
  end

  def to_a
    array = []
    current_element = @element
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

  def self.from_a(object)
    return new unless object

    simple_linked_list = new
    object.reverse.each do |number|
      simple_linked_list.push(number)
    end

    simple_linked_list
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
