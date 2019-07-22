VALID_CHOICES = {
  "r" => "rock",
  "p" => "paper",
  "s" => "scissors",
  "l" => "lizard",
  "S" => "Spock"
}

WHO_BEATS_WHO = {
  "r" => ["s", "l"],
  "p" => ["r", "S"],
  "s" => ["p", "l"],
  "S" => ["r", "s"],
  "l" => ["S", "p"]
}

def prompt(message)
  Kernel.puts("=> #{message}")
end

def choices_prompt
  choice_array = []
  VALID_CHOICES.each do |key, value|
    choice_array << "#{value}(#{key})"
  end
  choice_array
end

def win?(first, second)
  WHO_BEATS_WHO[first].include?(second)
end

def display_results(player, computer)
  if win?(player, computer)
    prompt("You won")
  elsif win?(computer, player)
    prompt("Computer won")
  else
    prompt("It's a tie!")
  end
end

loop do
  player = 0
  computer = 0
  loop do
    choice = ''
    loop do
      prompt("Choose one: #{choices_prompt.join(', ')}")
      choice = Kernel.gets().chomp()

      if VALID_CHOICES.key?(choice)
        break
      else
        prompt("That's not a valid choice")
      end
    end

    computer_choice = VALID_CHOICES.values.sample[0]

    prompt("You chose: #{VALID_CHOICES[choice]} " \
          "Computer chose: #{VALID_CHOICES[computer_choice]}")

    if win?(choice, computer_choice)
      player += 1
    elsif win?(computer_choice, choice)
      computer += 1
    end

    display_results(choice, computer_choice)

    prompt("Player score #{player} Computer score #{computer}")
    if player == 5
      prompt("You are the grand winner")
      break
    elsif computer == 5
      prompt("Computer is the grand winner")
      break
    end
  end

  prompt("Do you want to play again?")
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?('y')
end
