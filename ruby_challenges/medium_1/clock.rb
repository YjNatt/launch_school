class Clock
  def initialize(hours, minutes)
    remainder, min = minutes.divmod(60)
    @hr = (hours + remainder) % 24
    @min = min
  end

  def self.at(hour, minutes=0)
    new(hour, minutes)
  end

  def +(minutes)
    Clock.new(@hr, @min + minutes)
  end

  def -(minutes)
    Clock.new(@hr, @min - minutes)
  end

  def ==(other)
    to_s == other.to_s
  end

  def to_s
    "#{format('%02d', @hr)}:#{format('%02d', @min)}"
  end
end
