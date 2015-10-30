class Bob
  def hey(text)
    if text.strip.length == 0
      'Fine. Be that way!'
    elsif text =~ /[A-Z]/ && text.upcase == text
      'Whoa, chill out!'
    elsif text.end_with? '?'
      'Sure.'
    else
      'Whatever.'
    end
  end
end
