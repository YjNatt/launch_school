require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class value < Minitest::Test
  def test_downcase
    value = 'abc'
    assert_equal('xyz', value.downcase)
  end
end