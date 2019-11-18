require 'pry'

class Participant
  attr_accessor :hand

  def initialize
    @hand = []
  end

  def hit(deck)
    hand << deck.deal_one_card
  end

  def busted?
    total <= 21 ? false : true
  end

  def stay
    puts ""
  end

  def display_hand_total
    puts "#{name} has a total of #{total} points"
  end

  def total
    aces = hand.map(&:value).count('Ace')
    points = hand.map(&:points).sum
    calculate_ace(aces, points)
  end

  def calculate_ace(number_of_aces, points)
    while points > 21 && number_of_aces > 0
      number_of_aces -= 1
      points -= 10
    end
    points
  end

  def display_cards
    cards = hand.map(&:to_s)
    if hand.length == 2
      puts "#{name} has #{cards.join(' and ')}. Total points: #{total}"
    else
      puts "#{name} has #{cards[0...-1].join(', ')}" \
       "and #{cards.last}. Total points: #{total}"
    end
  end
end

class Player < Participant
  attr_accessor :name
  def initialize
    super
    @name = nil
  end
end

class Dealer < Participant
  attr_accessor :name
  def initialize
    super
    @name = "Dealer"
  end
end

class Deck
  CARD_SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
  CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
  FACE_CARD_VALUE = 10
  ACE_MAX_VALUE = 11

  attr_accessor :game_deck

  def initialize
    @game_deck = []

    CARD_SUITS.each do |suit|
      CARD_VALUES.each do |value|
        @game_deck << if value == value.to_s.to_i
                        Card.new(value, suit, value)
                      elsif value == 'Ace'
                        Card.new(value, suit, ACE_MAX_VALUE)
                      else
                        Card.new(value, suit, FACE_CARD_VALUE)
                      end
      end
    end
  end

  def deal_one_card
    game_deck.delete_at(rand(0...(game_deck.length)))
  end
end

class Card
  attr_reader :suit, :value, :points

  def initialize(value, suit, points)
    @suit = suit
    @value = value
    @points = points
  end

  def to_s
    "#{value} of #{suit}"
  end
end

class Game
  attr_accessor :deck, :player, :dealer

  def initialize
    @deck   = Deck.new
    @player = Player.new
    @dealer = Dealer.new
  end

  def display_welcome_message
    puts "Welcome to 21. To win you must beat the computer" \
    " in points without going over 21"
    puts ""
    set_name
  end

  def display_goodbye_message
    puts "Thank you for playing 21. Goodbye!"
  end

  def set_name
    name = nil
    loop do
      puts "What is your name?"
      name = gets.chomp
      break if !name.empty?
      puts "Please enter a name"
    end
    player.name = name
  end

  def deal_cards
    2.times do |_|
      @player.hand << deck.deal_one_card
      @dealer.hand << deck.deal_one_card
    end
  end

  def show_initial_cards
    player.display_cards
    puts "Dealer has #{dealer.hand.first} and unknown card"
    puts ""
  end

  def clear_screen
    system 'cls'
  end

  def press_any_key
    puts "Press any key to continue"
    gets.chomp
    clear_screen
  end

  def player_turn
    answer = nil
    loop do
      puts "Would you like to (h)it or (s)tay"
      answer = gets.chomp.downcase

      if answer.start_with?('h')
        puts "You chose to hit"
        player.hit(deck)
        player.display_cards
      end
      break if answer.start_with?(/s/) || player.busted?
    end

    if player.busted?
      puts " #{player.name} busted!"
    else
      puts " #{player.name} stays"
    end

    press_any_key
  end

  def dealer_turn
    dealer.display_cards

    loop do
      break if dealer.total >= player.total || dealer.busted? || player.busted?
      puts "#{dealer.name} chose to hit"
      dealer.hit(deck)
      dealer.display_cards
    end

    dealer.display_hand_total
    press_any_key
  end

  def more_points(participant1, participant2)
    participant1 > participant2
  end

  def show_result
    if player.busted? || dealer.total > player.total
      puts "#{dealer.name} wins the round"
    elsif dealer.busted? || dealer.total < player.total
      puts "#{player.name} wins the round"
    else
      puts "It's a tie"
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? Enter either yes or no"
      answer = gets.chomp.downcase
      break if answer == 'yes' || answer == 'no'
      puts "Enter either 'yes' or 'no'"
    end

    answer == 'yes'
  end

  def reset_game
    player.hand = []
    dealer.hand = []
    @deck = Deck.new
    clear_screen
  end

  def start
    display_welcome_message
    clear_screen
    loop do
      deal_cards
      show_initial_cards
      player_turn
      dealer_turn
      show_result
      break unless play_again?
      reset_game
    end
    display_goodbye_message
  end
end

Game.new.start
