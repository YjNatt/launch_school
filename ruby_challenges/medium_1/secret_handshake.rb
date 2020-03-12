class SecretHandshake
  def initialize(input)
    @reverse_binary = if input.is_a?(Integer)
                        input.to_s(2).reverse
                      else
                        input.to_i.to_s(2).reverse
                      end
  end

  def commands
    translations = ['wink', 'double blink', 'close your eyes', 'jump']

    commands = (0..3).each_with_object([]) do |index, arr|
      arr << translations[index] if @reverse_binary[index] == '1'
    end

    @reverse_binary[4] ? commands.reverse : commands
  end
end
