import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

public static boolean isBalanced(String s) {
   int len=s.length();
    if(len==0 || s==null) return true;
      Stack<Character> stack = new Stack<Character>();
    for(int i=0;i<s.length();i++)
    {
        if(s.charAt(i)=='(' || s.charAt(i)=='[' || s.charAt(i)=='{')  stack.push(s.charAt(i));
        else if(s.charAt(i)==')' && !stack.empty() && stack.peek()=='(') stack.pop();
        else if(s.charAt(i)==']' && !stack.empty() && stack.peek()=='[') stack.pop();

        else if(s.charAt(i)=='}' && !stack.empty() && stack.peek()=='{') stack.pop();
        else return false;


    }
    return stack.empty();
    }

    public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int t = in.nextInt(); // Number of strings
    for (int j = 0; j < t; j++) {
        String expression = in.next();
        System.out.println( (isBalanced(expression)) ? "YES" : "NO" );
    }
}
}