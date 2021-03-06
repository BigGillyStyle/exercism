module RomanNumerals

  def to_roman
    remaining = self
    ROMANS.each_with_object('') do |(arabic, roman), result|
      result << roman * (remaining / arabic)
      remaining %= arabic
    end
  end

  ROMANS = {
    1000 => 'M',
    900 => 'CM',
    500 => 'D',
    400 => 'CD',
    100 => 'C',
    90 => 'XC',
    50 => 'L',
    40 => 'XL',
    10 => 'X',
    9 => 'IX',
    5 => 'V',
    4 => 'IV',
    1 => 'I'
  }

  Fixnum.send :include, RomanNumerals

end
