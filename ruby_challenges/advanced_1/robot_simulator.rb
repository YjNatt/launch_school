class Robot
  VALID_DIRECTIONS = [:north, :east, :south, :west]
  LEFT = -1
  RIGHT = 1

  attr_reader :bearing

  def orient(direction)
    raise ArgumentError unless VALID_DIRECTIONS.include?(direction)
    @bearing = direction
  end

  def turn_right
    index = VALID_DIRECTIONS.index(bearing)
    @bearing = VALID_DIRECTIONS.rotate(RIGHT)[index]
  end

  def turn_left
    index = VALID_DIRECTIONS.index(bearing)
    @bearing = VALID_DIRECTIONS.rotate(LEFT)[index]
  end

  def at(x, y)
    @x = x
    @y = y
  end

  def coordinates
    [@x, @y]
  end

  def advance
    case bearing
    when :north
      @y += 1
    when :south
      @y -= 1
    when :east
      @x += 1
    when :west
      @x -= 1
    end
  end
end

class Simulator
  LETTERS_TO_COMMANDS = { 'L' => :turn_left,
                          'R' => :turn_right,
                          'A' => :advance }

  def instructions(string)
    string.chars.map do |letter|
      LETTERS_TO_COMMANDS[letter]
    end
  end

  def place(robot, x:, y:, direction:)
    robot.orient(direction)
    robot.at(x, y)
  end

  def evaluate(robot, commands)
    instructions(commands).each do |command|
      robot.send(command)
    end
  end
end
