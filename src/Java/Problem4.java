class Solution {
    public boolean isMatch(String s, String p) {
        int textLength = s.length();
        int pLength = p.length();
      
        
        boolean[][] dp = new boolean[textLength + 1][pLength + 1];
      
        
        dp[0][0] = true;
      
       
        for (int i = 0; i <= textLength; i++) {
            for (int j = 1; j <= pLength; j++) {
              
               
                if (p.charAt(j - 1) == '*') {
                   
                    dp[i][j] = dp[i][j - 2];
                   
                    if (i > 0 && (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1))) {
                       
                        dp[i][j] |= dp[i - 1][j];
                    }
                } else {
                   
                    if (i > 0 && (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1))) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                }
            }
        }
      
       
        return dp[textLength][pLength];
    }
}