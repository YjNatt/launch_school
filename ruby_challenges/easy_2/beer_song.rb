class BeerSong
  def verse(bottle)
    first_line_verse(bottle) + second_line_verse(bottle)
  end

  def verses(start, finish)
    lyrics = []
    start.downto(finish) { |bottle| lyrics << verse(bottle) }
    lyrics.join("\n")
  end

  def lyrics
    verses(99, 0)
  end

  private

  def first_line_verse(bottle)
    case bottle
    when (2..99)
      "#{bottle} bottles of beer on the wall, #{bottle} bottles of beer.\n"
    when 1
      "#{bottle} bottle of beer on the wall, #{bottle} bottle of beer.\n"
    else
      "No more bottles of beer on the wall, no more bottles of beer.\n"
    end
  end

  def second_line_verse(bottle)
    case bottle
    when (3..99)
      "Take one down and pass it around, #{bottle - 1} bottles of beer on the wall.\n"
    when 2
      "Take one down and pass it around, #{bottle - 1} bottle of beer on the wall.\n"
    when 1
      "Take it down and pass it around, no more bottles of beer on the wall.\n"
    else
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    end
  end
end
