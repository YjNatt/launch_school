HOURS = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09' ]
MINUTES = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09' ]

def time_of_day(num)
  time = ':'

  if num > 1440
    loop do 
      num -= 1440
      break if num <= 1440
    end
  elsif num < -1440
      loop do
        num += 1440
        break if num >= -1440
      end
  end
  
  hour, min = num.divmod(60)

  if num >= 0
    hour < 10 ? time.prepend(HOURS[hour]) : time.prepend(hour.to_s)
    min < 10 ? time.concat(HOURS[min]) : time.concat(min.to_s)
  elsif num < 0
    hour += 24
    hour < 10 ? time.prepend(HOURS[hour]) : time.prepend(hour.to_s)
    min < 10 ? time.concat(HOURS[min]) : time.concat(min.to_s)
  end
end

# Launch school solution

MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def time_of_day(delta_minutes)
  delta_minutes =  delta_minutes % MINUTES_PER_DAY
  hours, minutes = delta_minutes.divmod(MINUTES_PER_HOUR)
  format('%02d:%02d', hours, minutes)
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"