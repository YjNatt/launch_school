module CircularBufferExceptions
  class BufferEmptyException < StandardError; end
  class BufferFullException < StandardError; end
end

class CircularBuffer
  include CircularBufferExceptions

  def initialize(size)
    @max_size = size
    @circular_buffer = Array.new
  end

  def read
    returned_element = circular_buffer.shift
    !returned_element.nil? ? returned_element : (raise BufferEmptyException)
  end

  def write(element)
    raise BufferFullException if circular_buffer.size >= max_size
    add_to(element)
  end

  def write!(element)
    circular_buffer.shift if circular_buffer.size >= max_size && !element.nil?
    add_to(element)
  end

  def clear
    circular_buffer.clear
  end

  private

  attr_accessor :circular_buffer
  attr_reader   :max_size

  def add_to(element)
    circular_buffer << element if !element.nil?
  end
end
