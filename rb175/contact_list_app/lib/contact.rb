class Contact
  attr_reader :fname, :lname, :phone, :email, :group
  attr_writer :phone, :email

  def initialize(fname, lname, phone, email, group)
    self.fname = fname
    self.lname = lname
    self.group = group
    @phone = phone
    @email = email
  end

  def to_s
    "First name: #{@fname}, Last name: #{@lname}," +
    " Phone: #{@phone}, Email: #{@email}, Group: #{@group}"
  end

  def name
    "#{fname} #{lname}"
  end

  def details
    [name, phone, email, group]
  end

  def fname=(fname)
    @fname = fname.capitalize
  end

  def lname=(lname)
    @lname = lname.capitalize
  end

  def group=(group)
    @group = group.capitalize
  end
end
