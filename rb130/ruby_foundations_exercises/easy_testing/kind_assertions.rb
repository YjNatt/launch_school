require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class Example < Minitest::Test
  def test_class_or_subclass
    assert_kind_of(Numeric, value)
  end
end