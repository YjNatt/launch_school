=begin
  deal_cards(deck)
  cards_array = array
  length of deck
  delete_at random number between 0 and length of deck
    save value to cards_array
    return cards_array
    
=end
CARDS = [ '2', '3', '4', '5', '6', '7', '8', '9', '10',
               'Jack', 'Queen', 'King', 'Ace']
FACE_CARD_VALUE = {'King' => 10, 'Queen' => 10, 'Jack' => 10, 'Ace' => [1, 11]}

def Initialize_deck()
  deck = []
  4.times { deck << CARDS }
  deck.flatten
end

def deal_cards(dck)
  cards_dealt = []
  how_many_cards = dck.length
  2.times do
    cards_dealt << dck.delete_at(rand(how_many_cards))
  end

  cards_dealt
end

def cards_to_string(hand_arr)
  if hand_arr.length == 2
    hand_arr.join ' and '
  elsif hand_arr.length > 2
    hand_arr[0..-2].join(', ') + ' and ' + hand_arr[-1]
  else
    "#{hand_arr[0]} and unknown card"
  end
end

def who_has_what(player_arr, dealer_arr)
  puts "Dealer has: #{ cards_to_string(dealer_arr) }"
  puts "Player has: #{ cards_to_string(player_arr) }"
end

def hit(hand, dck)
  hand << dck.delete_at(rand(dck.length))
end

def calculate_ace(points)
  points <= 10 ? 11 : 1
end

def total(hand)
  total_points = 0
  
  hand.each do |card|
    if card.to_i > 0
      total_points += card.to_i
    elsif card != 'Ace'
      total_points += FACE_CARD_VALUE[card]
    end
  end

  hand.each do |card|
    if card == 'Ace'
      total_points += calculate_ace(total_points)
    end
  end

  total_points
end

def players_turn(players_hand, dealers_hand, dck)
  loop do
    puts 'hit or stay?'
    answer = gets.chomp
    if answer.downcase != 'stay'
      hit(players_hand, dck)
      who_has_what(players_hand, dealers_hand)
    else
      break
    end
  end
end

deck = Initialize_deck()

player = deal_cards(deck) 
dealer = deal_cards(deck)

who_has_what(player, dealer)
players_turn(player, dealer, deck)
p total(player)



