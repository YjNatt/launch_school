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
    @unanswered_flashcards.shuffle!
  end

  def flashcards
    flashcards = @answered_flashcards + @unanswered_flashcards
    flashcards.sort_by! { |card| card.keys.first }

    flashcards.each_with_object({}) do |card, hsh|
      id, flashcard = card.to_a.first
      hsh[id] = flashcard
    end
  end

  def delete(id)
    card = get_flashcard_by_id(id)
    @unanswered_flashcards.delete(card) || @answered_flashcards.delete(card)
  end

  def [](id)
    get_flashcard_by_id(id)
  end

  def question
    card = @unanswered_flashcards.pop
    @answered_flashcards << card
    card
  end

  private

  def get_flashcard_by_id(id)
    @unanswered_flashcards.detect { |card| card.keys.include?(id) } ||
      @answered_flashcards.detect { |card| card.keys.include?(id) }
  end
end
