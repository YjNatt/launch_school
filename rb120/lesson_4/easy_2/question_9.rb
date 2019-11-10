class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    #rules of play
  end
end

=begin
  if we add a play method to the Bingo class, the play method will overwrite
  the method in the Game class  
=end