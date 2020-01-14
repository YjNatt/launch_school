require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.new

class IncludeObjectAssertions < Minitest::Test
  def test_include_object
    list = ['abc']
    assert_includes(list, 'xyz')
  end
end