class Phrase
  VERSION = 2

  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    @phrase.downcase.scan(/(\w+'?\w+|\d+)/).inject(Hash.new(0)) do |a, e|
      a[e[0]] += 1
      a
    end
  end
end
