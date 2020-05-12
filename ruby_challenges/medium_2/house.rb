class House
  def self.recite
    new.recite
  end

  def recite
    pieces.map.with_index do |_, index|
      verse(pieces[index..-1])
    end.reverse.join("\n")
  end

def verse(pieces)
  verse = "This is " 
  pieces.each do |first_part, second_part|
    verse += first_part
    if second_part
      verse += "\n" + second_part + " "
    else
      verse += ".\n"
    end
  end
  verse
end

  private

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
