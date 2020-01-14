require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class Example < Minitest::Test
  def test_collection
    refute_includes(list, 'xyz'
  end
end