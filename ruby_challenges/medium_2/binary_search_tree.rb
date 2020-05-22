class Bst
  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
  end

  def insert(new_data)
    node = Bst.new(new_data)
    if node.data <= data
      @left ? @left.insert(node.data) : @left = node
    else
      @right ? @right.insert(node.data) : @right = node
    end
  end

  def each(&block)
    return to_enum unless block_given?

    left&.each(&block)
    yield data
    right&.each(&block)
  end
end
