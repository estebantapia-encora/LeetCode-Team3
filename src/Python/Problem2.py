from collections import deque

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.list = deque()
        self.map = {}

    def get(self, key: int) -> int:
        if key in self.map:
            self.moveCacheElements(key)
            return self.map[key]
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            self.moveCacheElements(key)
        else:
            if len(self.map) >= self.capacity:
                removedElement = self.list.pop()
                self.map.pop(removedElement)

            self.list.appendleft(key) 
            self.map[key] = value

    def moveCacheElements(self, key) -> None:
        self.list.remove(key)
        self.list.appendleft(key)