class Solution {
    public int lengthOfLongestSubstring(String s) {
        int leftPointer = 0;
        int length = 0;
        HashSet<Object> hash = new HashSet<>();

        char[] chars = s.toCharArray();

        for (int i = 0; i < chars.length; i++) {
            System.out.println(hash);
            while (hash.contains(chars[i])) {
                System.out.println(chars[i]);
                hash.remove(chars[leftPointer]);
                leftPointer++;

            }
            System.out.println("repeti");
            hash.add(chars[i]);
            length=Math.max(length, hash.size());
        }

        return length;


    }
}