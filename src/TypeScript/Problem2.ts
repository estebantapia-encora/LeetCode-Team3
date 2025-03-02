class LRUCache {
    private capacity: number;
    private map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        if (this.map.has(key)) {

            const value = this.map.get(key)!;
            this.map.delete(key);
            this.map.set(key, value);
            
            return value;
        }
        
        return -1;

    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.delete(key); 
        }  
        
        if (this.map.size >= this.capacity) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        
        this.map.set(key, value);
    }
}