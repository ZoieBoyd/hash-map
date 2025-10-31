export class HashMap {
   constructor() {
      this.loadFactor = 0.75;
      this.capacity = 16;
      this.buckets = new Array(this.capacity);
   }

   hash(key) {
      let hashCode = 0;
      const primeNumber = 31;

      for (let i = 0; i < key.length; i++) {
         hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }

      return hashCode;
   }

   getLoadFactor() {
      return this.length() / this.capacity;
   }

   set(key, value) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
         this.buckets[index] = new Array();
      }

      const entry = this.buckets[index].find((element) => element[0] === key);
      if (entry) {
         entry[1] = value;
      } else {
         this.buckets[index].push([key, value]);
      }

      if (this.getLoadFactor() > this.loadFactor) {
         this.grow();
      }
   }

   grow() {
      this.capacity *= 2;
      const entriesCopy = this.entries();
      this.clear();
      for (const entry of entriesCopy) {
         this.set(entry[0], entry[1]);
      }
   }

   get(key) {
      const bucket = this.buckets[this.hash(key)];
      if (!bucket) return null;
      const entry = bucket.find((element) => element[0] === key);
      if (!entry) return null;
      return !entry ? null : entry[1];
   }

   has(key) {
      const bucket = this.buckets[this.hash(key)];
      return bucket ? bucket.some((entry) => entry[0] === key) : false;
   }

   remove(key) {
      const bucket = this.buckets[this.hash(key)];
      if (!bucket) return false;
      const index = bucket.findIndex((element) => element[0] === key);
      if (index < 0) return false;
      bucket.splice(index, 1);
      return true;
   }

   length() {
      return this.entries().length;
   }

   clear() {
      this.buckets = new Array(this.capacity);
   }

   keys() {
      return this.entries().map((entry) => entry[0]);
   }

   values() {
      return this.entries().map((entry) => entry[1]);
   }

   entries() {
      return this.buckets.flatMap((bucket) => bucket);
   }
}
