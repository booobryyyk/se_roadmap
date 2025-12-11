# Hashmap

Implementation for the Hashmap. Uses array of such structure - `[ [key1, value1], [key2, value2] ]`, because:

1. Arrays are more optimised (at least in JS)
2. Less overhead on managing the data
3. The same alogithmic complexity

Implementation itself:

```js
class HashMap {
  constructor() {
    this.DEFAULT_CAPACITY = 16;
    this.THRESHOLD = 0.75;

    this.capacity = this.DEFAULT_CAPACITY;
    this.data = new Array(this.capacity);
    this.size = 0;
  }

  /**
   * Internal Helper: Generates an index based on the key
   * @param {string} key
   * @returns {number}
   */
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 31) % this.capacity;
    }

    return hash;
  }

  /**
   * Internal Helper: Resizes the map when threshold is reached
   */
  _resize() {
    const oldData = this.data;

    this.capacity *= 2;
    this.data = new Array(this.capacity);
    this.size = 0;

    oldData.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(([key, value]) => {
          this.set(key, value);
        });
      }
    });
  }

  /**
   * Add value to the map
   * @param {string} key
   * @param {number} value
   *
   * @returns {void}
   */
  set(key, value) {
    let index = this._hash(key);

    if (this.data[index]) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          this.data[index][i][1] = value;

          return;
        }
      }
    }

    if (this.size + 1 > this.capacity * this.THRESHOLD) {
      this._resize();
      index = this._hash(key);
    }

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push([key, value]);
    this.size++;
  }

  /**
   * Return a value stored under the key
   * @param {string} key
   *
   * @returns {number|null}
   */
  get(key) {
    const index = this._hash(key);
    const bucket = this.data[index];

    if (bucket) {
      for (const [storedKey, storedValue] of bucket) {
        if (storedKey === key) {
          return storedValue;
        }
      }
    }

    return null;
  }

  /**
   * Empty the map
   * @returns {void}
   */
  clear() {
    this.capacity = this.DEFAULT_CAPACITY;
    this.data = new Array(this.capacity);
    this.size = 0;
  }

  /**
   * Return map's keys
   * @returns {string[]}
   */
  keys() {
    const keysArray = [];

    for (const bucket of this.data) {
      if (bucket) {
        for (const [key, value] of bucket) {
          keysArray.push(key);
        }
      }
    }

    return keysArray;
  }

  /**
   * Return map's values
   * @returns {number[]}
   */
  values() {
    const valuesArray = [];

    for (const bucket of this.data) {
      if (bucket) {
        for (const [key, value] of bucket) {
          valuesArray.push(value);
        }
      }
    }

    return valuesArray;
  }

  /**
   * Return map's entries
   * @returns {(string|number)[][]}
   */
  entries() {
    const entriesArray = [];

    for (const bucket of this.data) {
      if (bucket) {
        for (const entry of bucket) {
          entriesArray.push(entry);
        }
      }
    }

    return entriesArray;
  }
}
```
