require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class EmptyObjectAssertions < Minitest::Test
  def test_empty_object_assertion
    value = [1]
    assert_empty(value, 'Array list is not empty')
  end
end