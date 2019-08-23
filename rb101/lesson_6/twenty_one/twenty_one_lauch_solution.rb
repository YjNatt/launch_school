GAME_UP_TO = 31
DEALER_STAYS = GAME_UP_TO - 4
SUITS = ['H', 'D', 'S', 'C']
VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_deck
  SUITS.product(VALUES).shuffle
end

def total(cards)
  # cards = [['H', '3'], ['S', 'Q'], ... ]
  values = cards.map { |card| card[1] }

  sum = 0
  values.each do |value|
    if value == "A"
      sum += 11
    elsif value.to_i == 0 # J, Q, K
      sum += 10
    else
      sum += value.to_i
    end
  end

  # correct for Aces
  values.select { |value| value == "A" }.count.times do
    sum -= 10 if sum > GAME_UP_TO
  end

  sum
end

def busted?(cards)
  cards > GAME_UP_TO
end

# :tie, :dealer, :player, :dealer_busted, :player_busted
def detect_result(dealer_points, player_points)

  if player_points > GAME_UP_TO
    :player_busted
  elsif dealer_points > GAME_UP_TO
    :dealer_busted
  elsif dealer_points < player_points
    :player
  elsif dealer_points > player_points
    :dealer
  else
    :tie
  end
end

def display_result(dealer_points, player_points)
  result = detect_result(dealer_points, player_points)

  case result
  when :player_busted
    prompt "You busted! Dealer wins this match!"
  when :dealer_busted
    prompt "Dealer busted! You win this match!"
  when :player
    prompt "You win this match!"
  when :dealer
    prompt "Dealer wins this match!"
  when :tie
    prompt "It's a tie!"
  end

end

def grand_ouput(d_cards, d_points, p_points, p_cards)
  puts "=============="
  prompt "Dealer has #{d_cards}, for a total of: #{d_points}"
  prompt "Player has #{p_cards}, for a total of: #{p_points}"
  puts "=============="
end

def play_again?
  puts "-------------"
  prompt "Do you want to play again? (y or n)"
  answer = gets.chomp
  answer.downcase.start_with?('y')
end

loop do
  prompt "Welcome to #{GAME_UP_TO}! First to win five rounds wins the game!"
  prompt ""
  player_score = 0
  dealer_score = 0

  loop do
    break if player_score == 5 || dealer_score == 5
    # initialize vars
    deck = initialize_deck
    player_cards = []
    dealer_cards = []

    # initial deal
    2.times do
      player_cards << deck.pop
      dealer_cards << deck.pop
    end

    player_points = total(player_cards)
    dealer_points = total(dealer_cards)

    prompt "Dealer has #{dealer_cards[0]} and ?"
    prompt "You have: #{player_cards[0]} and #{player_cards[1]}, for a total of #{player_points}."

    # player turn
    loop do
      player_turn = nil
      loop do
        prompt "Would you like to (h)it or (s)tay?"
        player_turn = gets.chomp.downcase
        break if ['h', 's'].include?(player_turn)
        prompt "Sorry, must enter 'h' or 's'."
      end

      if player_turn == 'h'
        player_cards << deck.pop
        player_points = total(player_cards)
        prompt "You chose to hit!"
        prompt "Your cards are now: #{player_cards}"
        prompt "Your total is now: #{player_points}"
      end

      break if player_turn == 's' || busted?(player_points)
    end

    if busted?(player_points)
      grand_ouput(dealer_cards, dealer_points, player_points, player_cards)
      display_result(dealer_points, player_points)
      dealer_score += 1
      next
    else
      prompt "You stayed at #{player_points}"
    end

    # dealer turn
    prompt "Dealer turn..."

    loop do
      break if dealer_points >= DEALER_STAYS

      prompt "Dealer hits!"
      dealer_cards << deck.pop
      dealer_points = total(dealer_cards)
      prompt "Dealer's cards are now: #{dealer_cards}"
    end

    if busted?(dealer_points)
      prompt "Dealer total is now: #{dealer_points}"
      grand_ouput(dealer_cards, dealer_points, player_points, player_cards)
      display_result(dealer_points, player_points)
      player_score += 1
      next
    else
      prompt "Dealer stays at #{dealer_points}"
    end

    # both player and dealer stays - compare cards!
    grand_ouput(dealer_cards, dealer_points, player_points, player_cards)
    display_result(dealer_points, player_points)

    case detect_result(dealer_points, player_points)
    when :player_busted
      dealer_score += 1
    when :dealer_busted
      player_score += 1
    when :player
      player_score += 1
    when :dealer
      dealer_score += 1
    end
  end

  if player_score == 5
    prompt "You have won the game!"
  else
    prompt "You have lost the game!"
  end

  break unless play_again?
end

prompt "Thank you for playing Twenty-One! Good bye!"
