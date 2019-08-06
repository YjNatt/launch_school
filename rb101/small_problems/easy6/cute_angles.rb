=begin
input: floating point number representing an angle from (0-360)
output: string that represents input angle in degree minutes seconds
rules: degree symbol == "\xC2\xB0"
       minutes symbol == '
       seconds symbol == "
       degree == 60 minutes
       minute == 60 seconds

datastucte / algorithm
  recieve float
  create const degree symbol = "\xC2\xB0"
  create const degree to minutes = 60
         const minutes to seconds = 60
  create variable degree =  float.to_i
  create variable minute = (float - float.to_i) * 60
  create variable second = (minute - minute.to_i) * 60

  return %(#{degree}#{degree symbol}#{minutes.to_i}'#{seconds.to_i}")

=end
DEGREE_SYM = "\xC2\xB0"
DEGREE_TO_MIN = 60
DEGREE_TO_SEC = 60

def dms(float)
  float %= 360 if float < 0 || float > 360

  degree = float.to_i
  minutes_f = (float - degree) * 60
  seconds_f = (minutes_f - minutes_f.to_i) * 60

  minutes = format('%02d', minutes_f.to_i)
  seconds = format('%02d', seconds_f.to_i)

  %(#{degree}#{DEGREE_SYM}#{minutes}'#{seconds}")
end

p dms(30) == %(30°00'00")
p dms(76.73) == %(76°43'48")
p dms(254.6) == %(254°36'00")
p dms(93.034773) == %(93°02'05")
p dms(0) == %(0°00'00")
p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")
p dms(400) == %(40°00'00")
p dms(-40) == %(320°00'00")
p dms(-420) == %(300°00'00")
