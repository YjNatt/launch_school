require 'time'

HRS_TO_MIN = 60
def after_midnight(time)
  Time.parse(time).min + (Time.parse(time).hour * 60)
end

# def after_midnight(time)
#   hours, minutes = time.split(":").map(&:to_i)
#   p (hours * HRS_TO_MIN + minutes) % 1440
# end

def before_midnight(time)
  total_minutes = after_midnight(time)
  total_minutes == 0 ? 0 : 1440 - total_minutes
end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0