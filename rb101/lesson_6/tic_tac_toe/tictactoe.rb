require 'pry'

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                [[1, 5, 9], [3, 5, 7]]              # diagonals
CHOOSE = ['player', 'computer']

def prompt(msg)
  puts "=>#{msg}"
end

# def score(user, comp)
  
# end

# rubocop:disable Metrics/AbcSize
def display_board(brd, player, comp)
  system "clear"
  puts "You're a #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}"
  puts ""
  puts "You: #{player}, Computer: #{comp}"
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "     |     |"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_piece!(brd)
  square = ""
  loop do
    prompt "Choose a square (#{joinor(empty_squares(brd))}):"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice."
  end

  brd[square] = PLAYER_MARKER
end

def find_at_risk_square(line, board, marker)
  if board.values_at(*line).count(marker) == 2
    board.select{ |k, v| line.include?(k) && v == INITIAL_MARKER}.keys.first
  else
    nil
  end
end

def computer_places_piece!(brd)
  square = 0

  # Offense

  WINNING_LINES.each do |line|
    square = find_at_risk_square(line, brd, COMPUTER_MARKER)
    break if square
  end

  # Defense 
  if !square
    WINNING_LINES.each do |line|
      square = find_at_risk_square(line, brd, PLAYER_MARKER)
      break if square
    end
  end

  if !square
    brd[5] == INITIAL_MARKER ? square = 5 : square = empty_squares(brd).sample
  end

  brd[square] = COMPUTER_MARKER
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def joinor(arr, join1 = ', ', join2 = 'or')
  case arr.length
  when 0 then ''
  when 1 then arr.first
  when 2 then arr.join(" #{join2} ")
  else
    arr[-1] = "#{join2} #{arr[-1]}"
    arr.join(join1)
  end
end

def place_piece!(brd, who)
  who == 'player'? player_places_piece!(brd) : computer_places_piece!(brd)
end

def alternate_player(player)
  player == 'player' ? 'computer' : 'player'
end

loop do
  user_score = 0
  computer_score = 0
  current_player = 'player'

  loop do
    loop do
      prompt "Who goes first player or computer?"
      who_goes = gets.chomp
      case who_goes.downcase
      when 'player'
        current_player = 'player'
        break
      when 'computer' 
        current_player = 'computer'
        break
      else
        puts "Invalid choice, choose again."
      end
    end

    board = initialize_board

    loop do
      display_board(board, user_score, computer_score)
      place_piece!(board,current_player)
      current_player = alternate_player(current_player)
      break if someone_won?(board) || board_full?(board)
    end
    
    detect_winner(board) == "Player" ? user_score += 1 : computer_score += 1

    display_board(board, user_score, computer_score)

    if someone_won?(board)
      prompt "#{detect_winner(board)} won!"
    else
      prompt "It's a tie!"
    end

  break if user_score == 5 || computer_score == 5
  end

  puts ""

  prompt "Play again? (y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thanks for playing tic tac toe! goodbye"