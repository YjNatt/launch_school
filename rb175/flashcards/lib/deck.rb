class Deck
  attr_accessor :name
  attr_reader :questions, :answered

  def initialize(name)
    @name = name
    @questions = []
    @answered = []
  end
end
