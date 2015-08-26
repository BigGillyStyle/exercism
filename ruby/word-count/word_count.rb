class Phrase
  VERSION = 1

  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    @phrase.downcase.split(/\W+/).inject(Hash.new(0)) do |a, e|
      a[e] += 1
      a
    end
  end
end
