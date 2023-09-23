import java.util.*;
class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        Map<Integer,Integer> hm = new HashMap<>();
        for(int i = 0; i<mat.length;i++){
            int solders = 0;
            for(int j = 0; j<mat[0].length;j++){
                if(mat[i][j]==1){
                    solders++;
                }
            }
            hm.put(i, solders);
        }
        List<Map.Entry<Integer,Integer>> list = new ArrayList<>(hm.entrySet());

        Collections.sort(list, (a,b)->{
            if(a.getValue().equals(b.getValue())){
                return a.getKey().compareTo(b.getKey());
            } else {
                return a.getValue().compareTo(b.getValue());
            }
        });

        int[] answer = new int[k];
        for(int i = 0 ;i<k;i++){
            answer[i]= list.get(i).getKey();
        }
        return answer;
    }
}