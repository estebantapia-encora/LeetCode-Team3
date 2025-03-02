public class LRUCache {
    private final int capacity;
    HashMap<Integer,Integer> map = new HashMap<>();
    LinkedList<Integer> list = new LinkedList<>();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        if(this.map.containsKey(key)){
            this.moveCacheElements(key);
            return this.map.get(key);
        }
        return -1;
    }

    public void put(int key, int value) {

        if(this.map.containsKey(key)){
            this.moveCacheElements(key);
        }

        if(this.map.size() >= this.capacity){
            int removedElement = this.list.removeLast();
            this.map.remove(removedElement);
        }

        this.list.addFirst(key);
        this.map.put(key, value);

    }
    
    private void moveCacheElements(int key){
        this.list.remove((Integer) key);
        this.list.addFirst(key);
    }
}




