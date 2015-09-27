bench('Scope', function () {

  it('this', function () {
    this.x = 0
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
    this.x++;this.x++;this.x++;this.x++;this.x++
  })

  it('var self = this', function () {
    var self = this
    self.x = 0
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
    self.x++;self.x++;self.x++;self.x++;self.x++
  })

})
