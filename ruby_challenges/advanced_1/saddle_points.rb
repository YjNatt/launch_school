class Matrix
  def initialize(string)
    @matrix = string.split("\n").map { |row_string| row_string.split(" ").map(&:to_i) }
  end

  def rows
    @matrix
  end

  def columns
    @matrix.transpose
  end

  def saddle_points
    saddle_points_coordinates = []

    @matrix.each_with_index do |row, row_index|
      row.each_with_index do |digit, col_index|
        if digit >= row.max && digit <= columns[col_index].min
          saddle_points_coordinates << [row_index, col_index]
        end
      end
    end

    saddle_points_coordinates
  end
end
