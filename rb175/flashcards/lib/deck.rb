class Deck
  attr_accessor :name
  attr_reader :questions, :answered

  def initialize(name)
    @name = name
    @answered_flashcards = []
    @unanswered_flashcards = []
  end

  def add_flashcard(id, flashcard)
    @unanswered_flashcards << { id => flashcard }
  end
end
