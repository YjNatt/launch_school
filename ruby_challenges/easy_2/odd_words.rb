def reverse_odd_words(str)
  return '' if str == ''

  words = str[0..-2].scan(/\S+/)
  words.map.with_index do |word, index|
    index.odd? ? word.reverse : word
  end.join(' ') + '.'
end

# Bonus

def reverse_odd_words(str)
  word = ''
  result = ''
  is_odd_word = false

  (0...str.size).each do |index|
    char = str[index]

    case letter_space_point(char)
    when :letter
      word << char

    when :space
      if result == ''
        add_word_to_string(word, result, is_odd_word)
        is_odd_word = !is_odd_word
      elsif /[a-zA-Z]/.match?(str[index - 1])
        result << ' '
        add_word_to_string(word, result, is_odd_word)
        is_odd_word = !is_odd_word
      end

    when :point
      result << ' ' if /[a-zA-Z]/.match?(str[index - 1])
      add_word_to_string(word, result, is_odd_word)
      result << '.'

    when :invalid
      raise 'Invalid input.'
    end
  end

  result
end

def letter_space_point(char)
  if /[a-zA-Z]/.match?(char)
    :letter
  elsif '.' == char
    :point
  elsif ' ' == char
    :space
  else
    :invalid
  end
end

def add_word_to_string(word, result, is_odd_word)
  if is_odd_word
    word.size.times do
      result << word[-1]
      word[-1] = ''
    end
  else
    word.size.times do
      result << word[0]
      word[0] = ''
    end
  end
end

reverse_odd_words('  hello   world  hello .')
reverse_odd_words('whats the matter with kansas.')
reverse_odd_words('hello   there   bob   .')
reverse_odd_words('hello world.')
reverse_odd_words('')
reverse_odd_words(' .')
