function lengthOfLongestSubstring(s: string): number {
    const strArray : string [] = Array.from(s);
    let leftPointer : number  = 0;
    let length : number = 0
    let hash = new Set<string>();

    for(let i = 0; i < strArray.length ;i++){
        while(hash.has(strArray[i])){
            hash.delete(strArray[leftPointer]);
            leftPointer++;
        }
        hash.add(strArray[i]);
        length = Math.max(length, hash.size)

    }
    return length;

};