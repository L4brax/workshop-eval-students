var expect = require('chai').expect;

var store = require ('../src/store').store;

describe('Store', function() {

  it('with toString() should return a string', function() {
    expect(store.toString('$',1)).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(14);
  });

  it('with belowCost criteria should return right products', function() {
    expect(store.findProducts(20)).to.have.lengthOf(9);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

});


/* Le test est mauvais, ne sert à rien*/
describe('Product', function() {

  it('with getDuration() for a Book should return a Number', function() {
    expect(store.Book.toString()).to.be.a('number');
  });

  it('with getDuration() for a DVD should return a Number', function() {
    expect(store.DVD.toString()).to.be.a('number');
  });

  it('with getDuration() for a Video Game should return a Number', function() {
    expect(store.VideoGame.toString()).to.be.a('number');
  });

});