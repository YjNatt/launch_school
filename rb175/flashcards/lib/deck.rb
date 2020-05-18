class Deck
  attr_accessor :name
  attr_reader :answered_flashcards, :unanswered_flashcards

  def initialize(name)
    @name = name
    @answered_flashcards = []
    @unanswered_flashcards = []
  end

  def add(id, flashcard)
    @unanswered_flashcards << { id => flashcard }
  end

  def flashcards
    flashcards = @answered_flashcards + @unanswered_flashcards

    flashcards.each_with_object({}) do |card, hsh|
      id, flashcard = card.to_a.first
      hsh[id] = flashcard
    end
  end

  def delete(id)
    card = @unanswered_flashcards.detect { |card| card.keys.include?(id) } ||
           @answered_flashcards.detect { |card| card.keys.include?(id) }

    @unanswered_flashcards.delete(card) || @answered_flashcards.delete(card)
  end
end
