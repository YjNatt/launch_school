require 'pry'
class Board
  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                  [[1, 5, 9], [3, 5, 7]]              # diagonals

  def initialize
    @squares = {}
    reset
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  def []=(num, marker)
    @squares[num].marker = marker
  end

  def [](num)
    @squares[num].marker
  end

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  def winning_marker
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      if three_identical_markers?(squares)
        return squares.first.marker
      end
    end
    nil
  end

  # rubocop:disable Metrics/AbcSize
  def draw
    puts "     |     |"
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts "     |     |"
  end
  # rubocop:enable Metrics/

  private

  def three_identical_markers?(squares)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 3
    markers.min == markers.max
  end
end

class Square
  INITIAL_MARKER = ' '

  attr_accessor :marker

  def initialize(marker=INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    @marker
  end

  def unmarked?
    marker == INITIAL_MARKER
  end

  def marked?
    marker != INITIAL_MARKER
  end
end

class Player
  attr_accessor :score, :marker, :name
  def initialize(marker)
    @marker = marker
    @score  = 0
    @name = nil
  end
end

class TTTGame
  HUMAN_MARKER = 'X'
  COMPUTER_MARKER = 'O'
  FIRST_TO_MOVE = "choose"
  ROUNDS_TO_WIN = 5
  COMPUTER_NAMES = ['James', 'Robert', "Joe"]
  attr_reader :board, :human, :computer

  def initialize
    @board = Board.new
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    @current_marker = FIRST_TO_MOVE
  end

  def play
    clear
    display_welcome_message

    loop do
      loop do
        display_board
        loop do
          current_player_moves
          break if board.someone_won? || board.full?
          clear_screen_and_display_board if human_turn?
        end
        add_point if board.someone_won?

        display_result
        break if game_won?
        reset_round
      end
      
      display_game_winner
      break unless play_again?

      reset_game
      display_play_again_message
    end

    display_goodbye_message
  end

  private
  def game_won?
    human.score == ROUNDS_TO_WIN || computer.score == ROUNDS_TO_WIN
  end

  def display_game_winner
    if human.score == ROUNDS_TO_WIN
      puts "#{human.name} won the game!"
    else
      puts "#{computer.name} won the game!"
    end
  end

  def add_point
    case board.winning_marker
    when human.marker then human.score += 1
    when computer.marker then computer.score += 1
    end
  end

  def display_welcome_message
    puts "Welcome to Tic Tac Toe, First to win #{ROUNDS_TO_WIN} rounds wins the game!"
    puts ""
    set_name
    set_human_marker
  end

  def set_name
    puts "Input your name"
    answer = gets.chomp
    @human.name = answer
    @computer.name = COMPUTER_NAMES.sample
  end

  def set_human_marker
    puts "Input the marker you want to use!"
    mark = gets.chomp
    @human.marker = mark
  end

  def display_goodbye_message
    puts "Thanks for playing Tic Tac Toe, Goodbye!"
  end

  def display_board
    puts "#{human.name} is #{human.marker}, Score: #{human.score}. #{computer.name} is #{computer.marker}, Score #{computer.score}."
    puts ""
    board.draw
    puts ""
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  def human_moves
    puts "Choose a square (#{joinor(board.unmarked_keys)}): "
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a valid choice."
    end

    board[square] = human.marker
  end

  def joinor(choices, join_by=', ', word='or')
    case choices.size
    when 0 then ''
    when 1 then choices.first
    when 2 then choices.join(" #{word} ")
    else
      choices[-1] = "#{word} #{choices.last} "
      choices.join(join_by)
    end
  end

  def computer_moves
    need_to_make_move = true

    Board::WINNING_LINES.each do |line|
      squares = line.map{ |marker| board[marker] }
      if squares.count(COMPUTER_MARKER) == 2 && squares.count(human.marker) == 0
        need_to_make_move = false
        return board[line[squares.index(Square::INITIAL_MARKER)]] = computer.marker
      end
    end

    Board::WINNING_LINES.each do |line|
      squares = line.map{ |marker| board[marker] }
      if squares.count(human.marker) == 2 && squares.count(COMPUTER_MARKER) == 0
        need_to_make_move = false
        return board[line[squares.index(Square::INITIAL_MARKER)]] = computer.marker
      end
    end

    if need_to_make_move
      if board[5] == Square::INITIAL_MARKER
        board[5] = computer.marker
      else
        board[board.unmarked_keys.sample] = computer.marker
      end
    end
  end


  def display_result
    clear_screen_and_display_board

    case board.winning_marker
    when human.marker then puts "#{human.name} won!"
    when computer.marker then puts "#{computer.name} won!"
    else puts "It's a tie"
    end
    puts "Press any key to continue"
    gets.chomp
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts "sorry, must be y or n"
    end

    answer == 'y'
  end

  def clear
    system 'cls'
  end

  def reset_game
    reset_round
    computer.score = 0
    human.score = 0
  end

  def reset_round
    board.reset
    @current_marker = FIRST_TO_MOVE
    system 'cls'
  end

  def display_play_again_message
    puts "Let's play again!"
    puts ""
  end

  def human_turn?
    @current_marker == human.marker
  end

  def current_player_moves
    if @current_marker == "choose"
      puts "Choose who goes first: (H)uman or (C)omputer"
      answer = gets.chomp
      answer.downcase == 'h' ? @current_marker = human.marker : @current_marker = COMPUTER_MARKER
    elsif human_turn?
      human_moves
      @current_marker = COMPUTER_MARKER
    else
      computer_moves
      @current_marker = human.marker
    end
  end
end

game = TTTGame.new
game.play
