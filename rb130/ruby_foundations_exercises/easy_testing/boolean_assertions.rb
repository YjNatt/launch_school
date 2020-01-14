require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class Int < Minitest::Test
  def test_odd
    int = 2
    assert_equal(true, int.odd?, 'value is not odd')
  end
end