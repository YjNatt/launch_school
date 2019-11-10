class Cube
  def initialize(volume)
    @volume = volume
  end

  def get_volume
    @volume
  end
end

p Cube.new(5).get_volume