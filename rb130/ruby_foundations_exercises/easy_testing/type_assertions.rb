require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class Numeric < Minitest::Test
  def test_instance_of
    assert_instance_of(Numeric, value)
  end
end