class Solution {
    public boolean isSubsequence(String s, String t) {
        for(int i = 0,j=0; i<s.length();i++,j++){
            j = t.indexOf(s.charAt(i),j);
            if(j==-1)return false;
        }
        return true;
    }
}