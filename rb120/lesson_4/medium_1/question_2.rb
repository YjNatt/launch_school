=begin
  there is no setter method created to change the
  instance variable so line 11 will throw an error
=end
class InvoiceEntry
  attr_reader :product_name
  attr_accessor :quantity

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(update_count)
    self.quantity = update_count if update_count >= 0
  end
end

cheese = InvoiceEntry.new("cheese", 1)
p cheese.update_quantity(5)
p cheese.quantity