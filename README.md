# mathset

A small library implementing mathematical sets.

- [Description](#description)
    - [Set theory](#set-theory)
    - [Sets](#sets)
- [Implementation](#implementation)
- [API](#api)

## Description

Set theory is a branch of mathematical logic that studies sets, which informally are collections of objects. Although any type of object can be collected into a set, set theory is applied most often to objects that are relevant to mathematics. The language of set theory can be used in the definitions of nearly all mathematical objects. Set theory is commonly employed as a foundational system for mathematics, particularly in the form of Zermelo–Fraenkel set theory with the axiom of choice. Beyond its foundational role, set theory is a branch of mathematics in its own right, with an active research community.

### Set theory

Set Theory starts very simply: it examines whether an object belongs, or does not belong, to a set of objects which has been described in some non-ambiguous way. From this simple beginning, an increasingly complex (and useful!) series of ideas can be developed, which lead to notations and techniques with many varied applications.

The modern study of set theory was initiated by Georg Cantor and Richard Dedekind in the 1870s. After the discovery of paradoxes in naive set theory, such as the Russell's paradox, numerous axiom systems were proposed in the early twentieth century, of which the Zermelo–Fraenkel axioms, with the axiom of choice, are the best-known.

Set theory begins with a fundamental binary relation between an object o and a set A. If o is a member (or element) of A, the notation o ∈ A is used. Since sets are objects, the membership relation can relate sets as well.

### Sets

The definition of a set sounds very vague at first. A set can be defined as a collection of things that are brought together because they obey a certain rule. These 'things' may be anything you like: numbers, people, shapes, cities, bits of text ..., literally anything.

For example, the numbers 2, 4, and 6 are distinct objects when considered separately, but when they are considered collectively they form a single set of size three, written {2,4,6}. Sets are one of the most fundamental concepts in mathematics.

## Implementation

The implementation of Sets starts with a single class `MathSet`, which has several methods for binary operations on sets.

The sets are created in the form of arrays. They represent a sequence of elements (aka. members). The sets support only the following JavaScript primitives types - numbers, strings and booleans.

**Support for objects and arrays is planned and will come at some time in the future.**

## API

#### `new MathSet(<array>)`

create a new instance of MathSet.

#### `MathSet.prototype.isEmpty(<array | MathSet>)`

Checks if the set has any members or is empty. Returns `true` or `false`.

#### `MathSet.prototype.equal(<array | MathSet>)`

Checks whether the set is equal to a set. The order in which elements are listed does not matter. Returns `true` of `false`.

#### `MathSet.prototype.subset(<array | MathSet>)`

Checks if all the elements of the set are also elements of a new set. Returns `true` or `false`.

#### `MathSet.prototype.union(<array | MathSet>)`

Returns a new set of all objects that are a member of the set, the set passed or both.

#### `MathSet.prototype.insertion(<array | MathSet>)`

Returns a new set of all objects that are members of both the set and the passed set.

#### `MathSet.prototype.difference(<array | MathSet>)`

Returns a new set of all members of the set, that are not members of the passed set.

#### `MathSet.prototype.symDifference(<array | MathSet>)`

Returns a new set of all objects that are a member of exactly one of the set or the set passed (elements which are in one of the sets, but not in both).

#### `MathSet.prototype.cartesianProduct(<array | MathSet>)`

Returns a new set of all possible ordered pairs (_a_, _b_), where _a_ is a member of the set, and _b_ is a member of the passed set.