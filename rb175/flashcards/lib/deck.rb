class Deck
  attr_reader :name, :questions, :answered

  def initialize(name)
    @name = name
    @questions = []
    @answered = []
  end
end
