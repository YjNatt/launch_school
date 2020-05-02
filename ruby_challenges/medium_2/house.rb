class House
  def self.recite
    new.recite
  end

  def recite
    create_verses.map do |verse|
      verse.strip << ".\n"
    end.join("\n")
  end

  private

  def create_verses
    verses = []
    (0...pieces.length).each do |index|
      verse = "This is #{pieces[index].first}\n"
      ((index + 1)...pieces.length).each do |index2|
        verse << "#{pieces[index2 - 1][1]} #{pieces[index2][0]}\n"
      end
      verses.unshift(verse)
    end
    verses
  end

  def pieces
    [
      ['the horse and the hound and the horn', 'that belonged to'],
      ['the farmer sowing his corn', 'that kept'],
      ['the rooster that crowed in the morn', 'that woke'],
      ['the priest all shaven and shorn', 'that married'],
      ['the man all tattered and torn', 'that kissed'],
      ['the maiden all forlorn', 'that milked'],
      ['the cow with the crumpled horn', 'that tossed'],
      ['the dog', 'that worried'],
      ['the cat', 'that killed'],
      ['the rat', 'that ate'],
      ['the malt', 'that lay in'],
      ['the house that Jack built']
    ]
  end
end
puts House.recite
