class Solution {
    public String mergeAlternately(String word1, String word2) {
        int word1Length = word1.length();
        int word2Length = word2.length();
        char[] mergedString = new char[word1Length + word2Length];
        int k = 0;
        int i = 0;
        int j = 0;
        while (i < word1Length && j < word2Length) {
            mergedString[k++] = word1.charAt(i++);
            mergedString[k++] = word2.charAt(j++);
        }
        while (i < word1Length) {
            mergedString[k++] = word1.charAt(i++);
        }
        while (j < word2Length) {
            mergedString[k++] = word2.charAt(j++);
        }
        return new String(mergedString);
    }
}