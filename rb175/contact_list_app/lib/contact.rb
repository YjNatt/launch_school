class Contact
  attr_reader :fname, :lname, :phone, :email, :group

  def initialize(fname, lname, phone, email, group)
    @fname = fname.capitalize
    @lname = lname.capitalize
    @phone = phone
    @email = email
    @group = group.capitalize
  end

  def to_s
    "First name: #{@fname}, Last name: #{@lname}," +
    " Phone: #{@phone}, Email: #{@email}, Group: #{@group}"
  end

  def details
    [fname, lname, phone, email, group]
  end
end
