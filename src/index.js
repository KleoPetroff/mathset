function checkSet(set) {
  let setArray;

  if (set instanceof MathSet) setArray = set.set;
  else setArray = [...new Set(set)];

  return setArray;
}

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
    const setArray = checkSet(set);

    if (this.set.length > setArray.length) return false;
    if (this.set.length === 0) return true;

    const orderedLocalSet = [...new Set(this.set)].sort();
    const orderedParamSet = [...new Set(setArray)].sort();

    for (let i = orderedLocalSet.length; i--;) {
      if (orderedLocalSet[i] !== orderedParamSet[i]) return false;
    }

    return true;
  };

  union(set) {
    const setArray = checkSet(set);
    const concatenated = this.set.concat(setArray);

    return new MathSet([...new Set(concatenated)]);
  }

  insertion(set) {
    const setArray = checkSet(set);
    const filtered = this.set.filter((member) => setArray.indexOf(member) !== -1);

    return new MathSet(filtered);
  }

  difference(set) {
    const setArray = checkSet(set);
    const filtered = this.set.filter((member) => setArray.indexOf(member) === -1);

    return new MathSet(filtered);
  }

  symDifference(set) {
    const setArray = checkSet(set);

    const setADiff = this.set.filter(member => setArray.indexOf(member) === -1);
    const setBDiff = setArray.filter(member => this.set.indexOf(member) === -1);
    const concatenated = [].concat(setADiff, setBDiff);

    return new MathSet(concatenated);
  }

  cartesianProduct(set) {
    const setArray = checkSet(set);

    const product = this.set
      .map(member => setArray.map(setMember => [member, setMember]))
      .reduce((acc, array) => acc.concat(array));

    return new MathSet(product);
  }
}