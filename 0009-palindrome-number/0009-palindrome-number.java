class Solution {
    public boolean isPalindrome(int x) {
        StringBuilder sb = new StringBuilder();
        String str = x+"";
        String backward = sb.append(str).reverse().toString().substring(0,str.length()/2);
        String forward = str.substring(0,str.length()/2);
        return backward.equals(forward) ? true : false;
    }
}