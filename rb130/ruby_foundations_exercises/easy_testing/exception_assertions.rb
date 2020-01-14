require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class Employee < Minitest::Test
  def test_hire
    assert_raise(NoExperienceError) { employee.hire }
  end
end