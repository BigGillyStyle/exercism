class Grains
  class << self
    def square(n)
      2 ** (n-1)
    end

    def total
      (1..64).to_a.map {|x| square(x)}.reduce(:+)
    end
  end
end
