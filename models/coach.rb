class Coach
  @@coaches = []
  def self.add(name)
    @@coaches << name
  end

  def self.all
    @@coaches
  end
end