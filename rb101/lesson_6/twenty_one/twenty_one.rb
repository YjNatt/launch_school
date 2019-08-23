CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
         'Jack', 'Queen', 'King', 'Ace']

SUITS = ['Heart', 'Spades', 'Diamonds', 'Clubs']

FACE_CARD_VALUE = { 'King' => 10, 'Queen' => 10,
                    'Jack' => 10, 'Ace' => [1, 11] }

def initialize_deck
  full_deck = []
  SUITS.each do |suit|
    CARDS.each { |card| full_deck << [suit, card] }
  end
  full_deck.shuffle!
end

def deal_cards(deck)
  cards_dealt = []
  2.times { cards_dealt << deck.pop }
  cards_dealt
end

def cards_to_string(hand_arr)
  cards = []
  hand_arr.each { |array| cards << array[1] }
  if cards.length == 2
    cards.join ' and '
  else
    cards[0..-2].join(', ') + ' and ' + cards[-1]
  end
end

def who_has_what(player_arr, dealer_arr, end_game = false)
  system "clear"
  if end_game == false
    puts "Dealer has: #{dealer_arr.last.last} and unknown card"
  else
    puts "Dealer has: #{cards_to_string(dealer_arr)}"
  end

  puts "Player has: #{cards_to_string(player_arr)}"
end

def hit(hand, deck)
  hand << deck.pop
end

def calculate_ace(points)
  points <= 10 ? 11 : 1
end

def total(hand)
  total_points = 0

  hand.each do |card|
    if card[1].to_i > 0
      total_points += card[1].to_i
    elsif card[1] != 'Ace'
      total_points += FACE_CARD_VALUE[card[1]]
    end
  end

  hand.each do |card|
    if card[1] == 'Ace'
      total_points += calculate_ace(total_points)
    end
  end

  total_points
end

def busted?(hand)
  total(hand) > 21 ? true : false
end

def players_turn(players_hand, dealers_hand, deck)
  loop do
    puts 'hit or stay?'
    answer = gets.chomp
    hit(players_hand, deck) if answer.downcase == 'hit'
    break if answer.downcase == 'stay' || busted?(players_hand)
    who_has_what(players_hand, dealers_hand)
  end

  if busted?(players_hand)
    who_has_what(players_hand, dealers_hand)
    puts 'You have busted... Dealer wins!'
  else
    puts 'You chose to stay'
  end
end

def dealers_turn(dealers_hand, deck)
  loop do
    hit(dealers_hand, deck) if total(dealers_hand) < 17
    break if total(dealers_hand) >= 17 || busted?(dealers_hand)
  end

  puts 'Dealer has busted... Player wins!' if busted?(dealers_hand)
end

def who_won?(players_hand, dealers_hand)
  player_points = total(players_hand)
  dealer_points = total(dealers_hand)

  if player_points > dealer_points
    'Player'
  elsif player_points < dealer_points
    'Dealer'
  else
    'Tie'
  end
end

def display_who_won?(players_hand, dealers_hand)
  winner = who_won?(players_hand, dealers_hand)
  case winner
  when 'Player' then puts 'Player has won the game'
  when 'Dealer' then puts 'Dealer has won the game'
  else               puts "It's a tie!"
  end
end

loop do
  deck = initialize_deck
  player = deal_cards(deck)
  dealer = deal_cards(deck)
  who_has_what(player, dealer)

  loop do
    players_turn(player, dealer, deck)
    break if busted?(player)

    dealers_turn(dealer, deck)
    break if busted?(dealer)

    who_has_what(player, dealer, true)
    display_who_won?(player, dealer)
    break
  end

  puts "Would you like to play again? (y / n)"
  answer = gets.chomp
  break if answer.downcase.start_with?('n')
end
