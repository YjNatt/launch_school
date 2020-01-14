require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class Example < Minitest::Test
  def test_process
    assert_same(list, list.process)
  end
end