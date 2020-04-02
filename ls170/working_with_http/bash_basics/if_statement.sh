integer=4

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10

  if [[ $integer -lt 5 ]]
  then
    echo $integer is also less than 5
  fi
fi

integer_3=15
if [[ $integer -lt 10 ]]
then
  echo $integer_3 is less than 10
else
  echo $integer_3 is not less than 10
fi

integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
elif [[ $integer -gt 20 ]]
then
  echo $integer is greater than 20
else
  echo $integer is between 10 and 20
fi

integer=15

if [[ $integer -gt 10 ]] && [[ $integer -lt 20 ]]
then
  echo $integer is between 10 and 20
fi

integer=7

if ! ([ $integer -eq 5 ]) || ! ([ $integer -eq 6 ])
then
  echo $integer is not 5 or 6
fi

