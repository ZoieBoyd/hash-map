export class HashSet {
   constructor() {
      this.loadFactor = 0.75;
      this.capacity = 16;
      this.buckets = new Array(this.capacity);
   }

   #hash(key) {
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

   set(key) {
      const index = this.#hash(key);
      if (!this.buckets[index]) {
         this.buckets[index] = new Array();
      }

      if (!this.buckets[index].includes(key)) {
         this.buckets[index].push(key);
      }

      if (this.getLoadFactor() > this.loadFactor) {
         this.#grow();
      }
   }

   #grow() {
      this.capacity *= 2;
      const entriesCopy = this.entries();
      this.clear();
      for (const entry of entriesCopy) {
         this.set(entry);
      }
   }

   has(key) {
      const bucket = this.buckets[this.#hash(key)];
      return bucket ? bucket.includes(key) : false;
   }

   remove(key) {
      if (!this.has(key)) return false;
      const bucket = this.buckets[this.#hash(key)];
      bucket.splice(bucket.indexOf(key), 1);
      return true;
   }

   length() {
      return this.entries().length;
   }

   clear() {
      this.buckets = new Array(this.capacity);
   }

   entries() {
      return this.buckets.flatMap((bucket) => bucket);
   }
}
