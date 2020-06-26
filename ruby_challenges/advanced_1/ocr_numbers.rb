class OCR
  TEXTS_TO_NUMBER_STRING = { " _\n| |\n|_|\n" => '0',
                             "\n  |\n  |\n" => '1',
                             " _\n _|\n|_\n" => '2',
                             " _\n _|\n _|\n" => '3',
                             "\n|_|\n  |\n" => '4',
                             " _\n|_\n _|\n" => '5',
                             " _\n|_\n|_|\n" => '6',
                             " _\n  |\n  |\n" => '7',
                             " _\n|_|\n|_|\n" => '8',
                             " _\n|_|\n _|\n" => '9'
  }

  def initialize(text)
    p text
    p text.split("\n").map{ |chars| chars.scan(/[ ]{3}|.+_|/) }
     @texts = text
  end

  def convert
    TEXTS_TO_NUMBER_STRING.fetch(@texts, '?')
  end
end

    text = <<-NUMBER.chomp
    _
  || |
  ||_|

    NUMBER

    p OCR.new(text).convert
