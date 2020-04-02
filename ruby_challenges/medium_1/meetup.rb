require 'date'
class Meetup
  WEEKDAYS = %w(sunday monday tuesday wednesday thursday friday saturday)
  SCHEDULES = { first: 1, second: 8, third: 15,
                fourth: 22, teenth: 13, last: -7 }

  def initialize(month, year)
    @month = month
    @year = year
  end

  def day(weekday, schedule)
    date = Date.new(@year, @month, SCHEDULES[schedule])

    until date.wday == WEEKDAYS.index(weekday.to_s)
      date = date.next
    end

    date
  end

  def ==(other)
    date == other.date
  end
end
