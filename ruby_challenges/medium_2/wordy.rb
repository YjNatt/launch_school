class WordProblem
  OPERATION_RULES = { 'plus' => '+', 'minus' => '-',
                      'multiplied by' => '*', 'divided by' => '/' }

  def initialize(phrase)
    self.operators_numbers = phrase
  end

  def answer
    raise ArgumentError if @operators_numbers.length <= 1
    operation = '+'
    @operators_numbers.reduce(0) do |total, str|
      if str.match?(/[^0-9\-]/)
        operation = OPERATION_RULES[str]
      else
        total = total.public_send(operation, str.to_i)
      end
      total
    end
  end

  private

  def operators_numbers=(str)
    @operators_numbers = str.scan(/-?\d+|#{OPERATION_RULES.keys.join('|')}/)
  end
end
