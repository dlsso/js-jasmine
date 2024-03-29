describe('Pluralize', function() {

  it('should return cups if we pass 0', function() {
    expect( pluralize("cup", 0) ).toBe("cups");
  });

  it('should return cat if we pass 1', function() {
    expect( pluralize("cat", 1) ).toBe("cat");
  });

  it('should return dogs if we pass 2', function() {
    expect( pluralize("dog", 2) ).toBe("dogs");
  });

});