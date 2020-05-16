class Deck
  attr_accessor :name
  attr_reader :questions, :answered

  def initialize(name)
    @name = name
    @answered_flashcards = []
    @unanswered_flashcards = []
  end
end
