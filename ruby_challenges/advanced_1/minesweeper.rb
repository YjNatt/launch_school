class ValueError < StandardError; end

class Board
  def self.transform(board)
    raise ValueError unless valid_board?(board)

    board.map.with_index do |current_row, index|
      (1...current_row.length).each do |char_index|
        next unless current_row[char_index] == ' '

        previous_row = board[index - 1] || ''
        next_row = board[index + 1] || ''

        count = count_mines(current_row, previous_row, next_row, char_index)

        current_row[char_index] = count.to_s if count >= 1
      end

      current_row
    end
  end

  def self.valid_board?(board)
    valid_rows_length(board) &&
      valid_chars(board) &&
      valid_border(board.first, board.last) &&
      valid_middle_rows(board[1...-1])
  end

  def self.valid_middle_rows(rows)
    rows.all? { |row| row.match?(/\A\|[* \-+]+\|\z/) }
  end

  def self.valid_border(first_row, last_row)
    first_row.match?(/\A\+-+\+\z/) || last_row.match?(/\A\+-+\+\z/)
  end

  def self.valid_rows_length(board)
    board.all? { |row| row.length == board.first.length }
  end

  def self.valid_chars(board)
    !board.any? { |row| row.match?(/[^* \-+|]/) }
  end

  def self.count_mines(row, previous_row, next_row, index)
    surrounding_chars = row[index - 1..index + 1] +
                        previous_row[index - 1..index + 1] +
                        next_row[index - 1..index + 1]

    surrounding_chars.count('*')
  end
end
