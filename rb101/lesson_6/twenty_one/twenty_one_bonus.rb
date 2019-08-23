CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
         'Jack', 'Queen', 'King', 'Ace']

SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs']

GAME = 21
DEALER_STAY = GAME - 4

def prompt(msg)
  puts "=> #{msg}"
end

def display(item)
  puts ''
  puts item.center(25, '-')
  puts ''
end

def initialize_deck
  SUITS.product(CARDS).shuffle
end

def deal(deck)
  hands = [[], []]
  2.times { hands.each { |hand| hand << deck.pop } }
  hands
end

def calculate_ace(sum_of_points)
  sum_of_points > 10 ? 1 : 11
end

def total(hand)
  card_value = hand.map { |card| card[1] }
  how_many_aces = card_value.count('Ace')
  sum = 0

  card_value.each do |card|
    if card.to_i > 0
      sum += card.to_i
    elsif card != 'Ace'
      sum += 10
    end
  end

  how_many_aces.times { sum += calculate_ace(sum) }

  sum
end

def hit(hand, deck)
  hand << deck.pop
end

def busted?(points)
  points > GAME
end

def detect_winner(player_points, dealer_points)
  if player_points > GAME
    :player_busted
  elsif dealer_points > GAME
    :dealer_busted
  elsif player_points > dealer_points
    :player
  elsif player_points < dealer_points
    :dealer
  else
    :tie
  end
end

def who_won?(player_points, dealer_points)
  result = detect_winner(player_points, dealer_points)
  case result
  when :player_busted then prompt "You have busted. Dealer wins!"
  when :dealer_busted then prompt "Dealer has busted. You win!"
  when :player        then prompt "Player wins!"
  when :dealer        then prompt "Dealer wins!"
  when :tie           then prompt "It's a tie!"
  end
end

def grand_output(player, p_points, dealer, d_points)
  display('')
  prompt("Dealers Hand and Players Hand")
  puts ''
  prompt "Dealer has #{dealer}, for a total of #{d_points} points"
  prompt "Player has #{player}, for a total of #{p_points} points"
  display('')
end

def continue_buffer
  puts 'Press any key to continue'
  gets.chomp
  system 'cls'
end

# Game Starts
system 'cls'

loop do
  prompt "Welcome to #{GAME}. First to win 5 rounds wins the game!"
  player_score = 0
  dealer_score = 0

  loop do
    break if dealer_score == 5 || player_score == 5

    deck = initialize_deck
    player_hand, dealer_hand = deal(deck)

    display("Player's Score: #{player_score}")
    display("Dealer's Score: #{dealer_score}")

    players_total = total(player_hand)
    dealers_total = total(dealer_hand)

    display("Players turn")

    prompt "Dealer has #{dealer_hand[0]} and unknown..."
    prompt "Player has #{player_hand}. Total of #{players_total} points"

    # Players turn

    loop do
      answer = nil

      loop do
        prompt "Would you like to hit (h) or stay (s)"
        answer = gets.chomp
        break if ['h', 's'].include?(answer)
        prompt "enter either 'h' to hit or 's' to stay"
      end

      if answer == 'h'
        hit(player_hand, deck)
        players_total = total(player_hand)
        prompt "You got a #{player_hand.last}"
        prompt "Your total score is #{players_total}"
      end

      break if answer == 's' || busted?(players_total)
    end

    if busted?(players_total)
      dealer_score += 1
      grand_output(player_hand, players_total, dealer_hand, dealers_total)
      who_won?(players_total, dealers_total)
      continue_buffer
      next
    else
      prompt "You stayed at #{players_total} points"
    end

    # Dealers turn
    display("Dealers turn")
    prompt "Dealer has #{dealer_hand}. Total of #{dealers_total} points"
    loop do
      break if dealers_total >= DEALER_STAY
      hit(dealer_hand, deck)
      dealers_total = total(dealer_hand)
      prompt "Dealer hit and got a #{dealer_hand.last}"
    end

    if busted?(dealers_total)
      player_score += 1
      grand_output(player_hand, players_total, dealer_hand, dealers_total)
      who_won?(players_total, dealers_total)
      continue_buffer
      next
    else
      prompt "Dealer stays at #{dealers_total} points"
    end

    continue_buffer

    case detect_winner(players_total, dealers_total)
    when :player_busted then dealer_score += 1
    when :dealer_busted then player_score += 1
    when :player        then player_score += 1
    when :dealer        then dealer_score += 1
    end

    grand_output(player_hand, players_total, dealer_hand, dealers_total)
    who_won?(players_total, dealers_total)

    continue_buffer
  end

  if player_score == 5
    display("Player wins the game!")
  else
    display("Dealer wins the game!")
  end

  prompt "Would you like to play again? y or n"
  play_again = gets.chomp
  break unless play_again.downcase.start_with?('y')
end

prompt "Thank you for playing #{GAME}"
prompt "Good bye..."
