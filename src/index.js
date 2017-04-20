export default class MathSet {
  constructor(set = []) {
    this.set = set.length ? [...new Set(set)] : [];
  }

  isEmpty() {
    return this.set.length === 0;
  }

  equal(set) {
    const orderedLocalSet = [...new Set(this.set)].sort();
    const orderedParamSet = [...new Set(set)].sort();

    for (let i = orderedLocalSet.length; i--;) {
      if (orderedLocalSet[i] !== orderedParamSet[i]) return false;
    }

    return true;
  }

  subset(set) {
    if (this.set.length > set.length) return false;

    if (this.set.length === 0) return true;

    const orderedLocalSet = [...new Set(this.set)].sort();
    const orderedParamSet = [...new Set(set)].sort();

    for (let i = orderedLocalSet.length; i--;) {
      if (orderedLocalSet[i] !== orderedParamSet[i]) return false;
    }

    return true;
  };

  union(set) {
    const concatenated = this.set.concat(set);
    return [...new Set(concatenated)];
  }

  insertion(set) {
    const uniqueSet = [...new Set(set)];
    return this.set.filter((member) => uniqueSet.indexOf(member) !== -1);
  }

  difference(set) {
    const uniqueSet = [...new Set(set)];
    return this.set.filter((member) => uniqueSet.indexOf(member) === -1);
  }

  symDifference(set) {
    const uniqueSet = [...new Set(set)];
    const setADiff = this.set.filter(member => uniqueSet.indexOf(member) === -1);
    const setBDiff = uniqueSet.filter(member => this.set.indexOf(member) === -1);
    return [].concat(setADiff, setBDiff);
  }

  cartesianProduct(set) {
    const uniqueSet = [...new Set(set)];

    const product = this.set
      .map(member => uniqueSet.map(setMember => [member, setMember]))
      .reduce((acc, array) => acc.concat(array));

    return new MathSet(product);
  }
}