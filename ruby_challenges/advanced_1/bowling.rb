class Game
  def initialize
    @status = :ongoing
    @frames = Array.new(12) { Frame.new }
    @current_frame_index = 0
  end

  def roll(points)
    raise StandardErrod.new('Should not be able to roll after game is over') unless @status == :ongoing
    frame = @frames[@current_frame_index]
    frame.add(points)

    if (@current_frame_index == 9 && frame.status == :open_frame) ||
        (@current_frame_index == 10 && @frames[@current_frame_index - 1].status == :spare) ||
        (@current_frame_index == 11 && @frames[@current_frame_index - 1].status == :strike) ||
        (@current_frame_index == 10 && @frames[@current_frame_index - 1].status == :strike && frame.status == :open_frame)
      @status = :over
    end

    @current_frame_index += 1 unless frame.status == :keep_rolling
  end

  def score
    raise StandardError.new('Score cannot be take until the end of the game') unless @status == :over 

    @frames[0...10].map.with_index do |frame, index|
      if frame.status == :strike
        additional_rolls = @frames[(index + 1)..(index + 2)].map{ |frame| frame.rolls }
                                                            .flatten
        frame.total_points + additional_rolls.take(2).sum
      elsif frame.status == :spare
        frame.total_points + additional_roll = @frames[index + 1].rolls.take(1).sum
      else
        frame.total_points
      end
    end.sum
  end
end

class Frame
  attr_reader :status, :rolls

  def initialize
    @status = :keep_rolling
    @rolls = []
  end

  def add(points)
    raise StandardError.new('Pins must have a value from 0 to 10') if points < 0 || points > 10
    raise StandardError.new('Pin count exceeds pins on the lane') if (@rolls.sum + points) > 10

    @rolls << points
    if total_points == 10 && @rolls.length == 1
      @status = :strike
    elsif total_points == 10 && @rolls.length == 2
      @status = :spare
    elsif @rolls.length == 2 && total_points < 10
      @status = :open_frame
    end
  end

  def total_points
    @rolls.sum
  end
end

# Launch School solution

class Game
  def initialize
    @frames = []
    @current_frame = []
  end

  def roll(pins)
    validate_roll!(pins)

    @current_frame << pins

    if @frames.size < 9
      if @current_frame == [10] ||
         @current_frame.reduce(:+) == 10 ||
         @current_frame.size == 2

        @frames << @current_frame
        @current_frame = []
      end
    elsif (@current_frame.size == 2 && @current_frame.reduce(:+) < 10) ||
          (@current_frame.size == 3)
      @frames << @current_frame
    end

  end

  def score
    total = 0
    10.times do
      current_frame = @frames.shift
      if current_frame == [10]
        total += (10 + @frames.flatten.take(2).reduce(:+))
      elsif _current_frame.reduce(:+) == 10
        total += (10 + @frames.flatten.first)
      else
        total += current_fram.reduce(:+)
      end
    end
    total
  end

  def validate_roll!(pins)
    raise StandardError, 'Pin count exceeds pins on the lane' if pins < 0 || pins > 10
  end
end
