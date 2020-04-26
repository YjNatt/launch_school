class Triangle
  def initialize(count)
    @count = count
  end

  def rows
    total_rows = [[1]]
    (@count - 1).times do |_|
      previous_row = total_rows.last
      new_row = [1]
      previous_row.each_with_index do |num, index|
        new_row << num + previous_row.fetch(index + 1, 0)
      end
      total_rows << new_row
    end
    total_rows
  end
end
