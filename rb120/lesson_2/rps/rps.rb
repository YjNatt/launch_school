class Move
  VALUES = ['rock', 'paper', 'scissors', "lizard", "spock"]

  def initialize(value)
    @value = value
  end

  def scissors?
    @value == 'scissors'
  end

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def lizard?
    @value == "lizard"
  end

  def spock?
    @value == "spock"
  end

  def >(other_move)
    (rock? &&  (other_move.scissors? || other_move.lizard?)) ||
      (paper? && (other_move.rock? || other_move.spock?)) ||
      (scissors? && (other_move.paper? || other_move.lizard?)) ||
      (lizard? && (other_move.paper? || other_move.spock?)) ||
      (spock? && (other_move.scissors? || other_move.rock?))
  end

  def <(other_move)
    (rock? && (other_move.paper? || other_move.spock?)) ||
      (paper? && (other_move.scissors? || other_move.lizard?)) ||
      (scissors? && (other_move.rock? || other_move.spock?)) ||
      (lizard? && (other_move.rock? || other_move.scissors?)) ||
      (spock? && (other_move.lizard? || other_move.paper?))
  end

  def to_s
    @value
  end
end

class Player
  attr_accessor :move, :name, :score, :moves_made

  def initialize
    set_name
    @score = 0
    @moves_made = []
  end
end

class Human < Player
  def set_name
    n = ""
    loop do
      puts "What's your name?"
      n = gets.chomp
      break unless n.empty?
      puts "Sorry, must enter a value."
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      puts "Please choose rock, paper, scissors, lizard or spock:"
      choice = gets.chomp
      break if Move::VALUES.include? choice
      puts "Sorry, invalid choice."
    end
    moves_made << choice
    self.move = Move.new(choice)
  end
end

class Computer < Player
  def set_name
    self.name = ["R2D2", "Hal", "Chappie", "Sonny", "Number 5"].sample
  end

  def choose
    choice = Move.new(Move::VALUES.sample)
    moves_made << choice.to_s
    self.move = choice
  end
end

class R2D2 < Computer
  def choose
    self.move = "rock"
  end
end

# Game Orchestration Engine
class RPSGame
  PLAY_UP_TO = 10

  attr_accessor :human, :computer

  def initialize
    @human = Human.new()
    @computer = Computer.new()
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors, Lizard, Spock!"
  end

  def display_goodbye_message
    puts "Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Good bye!"
  end

  def display_moves
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}."
  end

  def display_winner
    if human.score == PLAY_UP_TO
      puts "#{human.name} won!"
    elsif human.score == PLAY_UP_TO
      puts "#{computer.name} won!"
    end
  end

  def display_history
    puts "#{human.name} previous moves are #{human.moves_made[0...-1].join(", ")} and #{human.moves_made[-1]}"
    puts "#{computer.name} previous moves are #{computer.moves_made[0...-1].join(", ")} and #{computer.moves_made[-1]}"
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      puts "Sorry. must by y or n"
    end

    return false if answer.downcase == 'n'
    return true if answer.downcase == 'y'
  end

  def add_score
    if human.move > computer.move
      human.score += 1
    elsif human.move < computer.move
      computer.score += 1
    end
  end

  def display_score
    puts "#{human.name}: #{human.score}"
    puts "#{computer.name}: #{computer.score}"
  end

  def reached_limit?
    (human.score == PLAY_UP_TO) || (computer.score == PLAY_UP_TO)
  end

  def reset_score
    human.score = 0
    computer.score = 0
  end

  def play
    display_welcome_message

    loop do
      loop do
        human.choose
        computer.choose
        display_moves
        add_score
        display_score
        break if reached_limit?
      end
      reset_score
      display_winner
      display_history
      break unless play_again?
    end
    display_goodbye_message
  end
end

RPSGame.new.play
