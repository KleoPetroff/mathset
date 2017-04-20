import mocha from 'mocha';
import {expect, assert} from 'chai';

import MathSet from '../src/index';

describe('mathset', () => {
  let mathset;
  beforeEach(() => {
    mathset = new MathSet([1, 2, 3, 5, 6]);
  });

  it('should not have duplicates', () => {
    const newMathSet = new MathSet([1, 2, 3, 3, 2, 1, 5, 6, 6]);
    expect(newMathSet.set).to.deep.equal([1, 2, 3, 5, 6]);
  });

  describe('equal', () => {
    it('mathset should exist', () => {
      expect(MathSet).to.exist;
    });

    it('should have a equal method', () => {
      expect(mathset.equal).to.exist;
    });

    it('should return true if two sets are equal', () => {
      expect(mathset.equal([1, 2, 3, 5, 6])).to.be.true;
    });

    it('should return false if the sets have different members', () => {
      expect(mathset.equal([1, 2, 5, 6, 8])).to.be.false;
    });

    it('should return true if the set has duplicate members', () => {
      expect(mathset.equal([1, 2, 3, 5, 6, 2, 5, 5])).to.be.true;
    });

    it('should return true regardless of order', () => {
      expect(mathset.equal([6, 2, 5, 2, 3, 1])).to.be.true;
    });
  });

  describe('isEmpty', () => {
    it('should exist', () => {
      expect(mathset.isEmpty).to.exist;
    });

    it('should return boolean', () => {
      expect(mathset.isEmpty()).to.be.a('boolean');
    });

    it('should return true if the set is empty', () => {
      const newMathSet = new MathSet();
      expect(newMathSet.isEmpty()).to.be.true;
    });

    it('should return true if the set has no members - empty array', () => {
      const newMathSet = new MathSet([]);
      expect(newMathSet.isEmpty()).to.be.true;
    });

    it('should return false if the set is not empty', () => {
      expect(mathset.isEmpty()).to.be.false;
    });
  });

  describe('subset', () => {
    it('should exist', () => {
      expect(mathset.subset).to.exist;
    });

    it('should return boolean', () => {
      expect(mathset.subset([1, 2, 4])).to.be.a('boolean');
    });

    it('should return false if the local set has more elements that the parameter set', () => {
      expect(mathset.subset([1, 2])).to.be.false;
    })

    it('should return true if the local set is a subset', () => {
      expect(mathset.subset([1, 2, 3, 5, 6, 8, 9, 3, 5])).to.be.true;
    });

    it('should return false if the local set has different element from the param set', () => {
      expect(mathset.subset([1, 2, 3, 54, 6, 4, 32]));
    });

    it('should return true if the set is empty', () => {
      const newMathSet = new MathSet();
      expect(newMathSet.subset([1, 2, 3, 5])).to.be.true;
    });
  });

  describe('union', () => {
    it('should exist', () => {
      expect(mathset.union).to.exist;
      expect(mathset.union).to.be.a('function');
    });

    it('should return array', () => {
      expect(mathset.union([1, 2, 4])).to.be.instanceof(MathSet);
    });

    it('should concatenate two sets', () => {
      const expected = new MathSet([1, 2, 3, 5, 6, 4, 7, 8]);
      expect(mathset.union([1, 2, 3, 4, 5, 7, 8])).to.deep.equal(expected);
    });

    it('should not have duplicates', () => {
      const expected = new MathSet([1, 2, 3, 5, 6]);
      expect(mathset.union([1, 2, 3, 5, 6])).to.deep.equal(expected);
    });
  });

  describe('insertion', () => {
    it('should exist', () => {
      expect(mathset.insertion).to.exist;
      expect(mathset.insertion).to.be.a('function');
    });

    it('should return a new set instance', () => {
      expect(mathset.insertion([1, 2, 3])).to.be.instanceof(MathSet);
    });

    it('should return a new set even if no duplicates are found', () => {
      expect(mathset.insertion([11, 22, 33])).to.be.instanceof(MathSet);
      expect(mathset.insertion([11, 22, 33])).to.deep.equal(new MathSet([]));
    });

    it('should return a new set with the members in both sets', () => {
      expect(mathset.insertion([1, 2, 3, 12, 42])).to.deep.equal(new MathSet([1, 2, 3]));
    });

    it('should not have duplicated', () => {
      expect(mathset.insertion([1, 1, 2, 12, 42])).to.deep.equal(new MathSet([1, 2]));
    });

    it('should return a new set of all members of two sets', () => {
      const newSet = new MathSet([1, 3, 7, 8]);
      expect(mathset.insertion(newSet)).to.deep.equal(new MathSet([1, 3]));
    });
  });

  describe('difference', () => {
    it('should exist', () => {
      expect(mathset.difference).to.exist;
      expect(mathset.difference).to.be.a('function');
    });

    it('should return a new set', () => {
      expect(mathset.difference([1, 2, 3, 4])).to.be.instanceof(MathSet);
    });

    it('should return the difference of set A from set B', () => {
      expect(mathset.difference(new MathSet([1, 2, 3, 4]))).to.deep.equal(new MathSet([5, 6]));
    });

    it('should return empty array if no differences are found', () => {
      expect(mathset.difference([1, 2, 3, 5, 6])).to.deep.equal(new MathSet());
    });
  });

  describe('Symmetric Difference', () => {
    it('should exist', () => {
      expect(mathset.symDifference).to.exist;
      expect(mathset.symDifference).to.be.a('function');
    });

    it('should return a new set', () => {
      expect(mathset.symDifference([1, 2, 3])).to.be.instanceof(MathSet);
    });

    it('should return the symmetric difference of two sets', () => {
      expect(mathset.symDifference(new MathSet([1, 2, 3, 4]))).to.deep.equal(new MathSet([5, 6, 4]));
    });

    it('should return empty array if no symmetric differences are found', () => {
      expect(mathset.symDifference([1, 2, 3, 5, 6])).to.deep.equal(new MathSet());
    });
  });

  describe('cartesian product', () => {
    it('should exist', () => {
      expect(mathset.cartesianProduct).to.exist;
      expect(mathset.cartesianProduct).to.be.a('function');
    });

    it('should return a new set', () => {
      expect(mathset.cartesianProduct([7, 8])).to.be.an.instanceof(MathSet);
    });

    it('should return a new MathSet object with all possible ordered pairs', () => {
      const expected = new MathSet([
        [1, 'red'], [1, 'blue'],
        [2, 'red'], [2, 'blue'],
        [3, 'red'], [3, 'blue'],
        [5, 'red'], [5, 'blue'],
        [6, 'red'], [6, 'blue'],
      ]);

      expect(mathset.cartesianProduct(new MathSet(['red', 'blue']))).to.deep.equal(expected);
    });

    it('should return a new MathSet object with all possible pairs - numbers', () => {
      const expected = new MathSet([
        [1, 8], [1, 9],
        [2, 8], [2, 9],
        [3, 8], [3, 9],
        [5, 8], [5, 9],
        [6, 8], [6, 9],
      ]);

      expect(mathset.cartesianProduct(new MathSet([8, 9]))).to.deep.equal(expected);
    });

    it('should return a new MathSet object with all possible pairs - more that 2 elements', () => {
      const expected = new MathSet([
        [1, 8], [1, 9], [1, 10],
        [2, 8], [2, 9], [2, 10],
        [3, 8], [3, 9], [3, 10],
        [5, 8], [5, 9], [5, 10],
        [6, 8], [6, 9], [6, 10],
      ]);

      expect(mathset.cartesianProduct(new MathSet([8, 9, 10]))).to.deep.equal(expected);
    });
  });
});