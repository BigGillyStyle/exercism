class Grains
  class << self
    def square(n)
      2**(n - 1)
    end

    def total
      (1..64).inject { |a, e| a + square(e) }
    end
  end
end
