require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(100)
  end

  def test_accept_money
    transaction = Transaction.new(5.50)
    transaction.amount_paid = 5.50

    previous_amount = @register.total_money
    @register.accept_money(transaction)
    current_amount = @register.total_money
    
    assert_equal(previous_amount + 5.50, current_amount)
  end

  def test_change
    transaction = Transaction.new(5)
    transaction.amount_paid = 20

    assert_equal(15, @register.change(transaction))
  end

end