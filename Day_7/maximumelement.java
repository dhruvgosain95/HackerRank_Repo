import java.io.*;
import java.util.*;

public class Solution {

public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num_queries = sc.nextInt();
    int max = Integer.MIN_VALUE;
    Stack<StackNode> stack = new Stack<StackNode>();

    while (num_queries > 0) {
        int choice = sc.nextInt();
        if(choice == 1) {
            int val = sc.nextInt();
            max = Math.max(val, max);

            stack.add(new StackNode(val, max));
        } else if(choice == 2) {
            if(!stack.isEmpty())
                stack.pop();
            // reset max
            if(stack.isEmpty())
                max = Integer.MIN_VALUE;
            else
                /**
                  *peek() returns the value of the top ("front") of the collection without removing the element from the collection. 
                  */
                max = stack.peek().curMax;
        } else if(choice == 3) {
            if(!stack.isEmpty()) {
                System.out.println(stack.peek().curMax);
            }
        }

        num_queries--;
    }
    sc.close();
}

private static class StackNode {
    int val;
    int curMax;
    public StackNode(int val, int curMax) {
        this.val = val;
        this.curMax = curMax;
    }

    public String toString() {
        return val + " [" + curMax + "]";
    }
}
}