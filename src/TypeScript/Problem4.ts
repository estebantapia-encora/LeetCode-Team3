function isMatch(s: string, p: string): boolean {
    const inputLength: number = s.length;
    const plength: number = p.length;
    
    const dp: boolean[][] = Array.from({ length: inputLength + 1 }, () => Array(plength + 1).fill(false));
  
    
    dp[0][0] = true;
  
    
    for (let i = 0; i <= inputLength; ++i) {
        for (let j = 1; j <= plength; ++j) {
            
            if (p[j - 1] === '*') {
                
                dp[i][j] = dp[i][j - 2];
                if (i && (p[j - 2] === '.' || p[j - 2] === s[i - 1])) {
                   
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else if (i && (p[j - 1] === '.' || p[j - 1] === s[i - 1])) {
                
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    
    return dp[inputLength][plength];
};