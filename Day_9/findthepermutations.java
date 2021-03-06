import java.io.*;
import java.util.*;

public class Solution {

    static String s = " ";
    static long[] countSumms = new long[] { 
        0, 2, 5, 12, 28, 64, 144, 320, 704, 1536, 3328, 7168, 15360, 32768, 69632,
			147456, 311296, 655360, 1376256, 2883584, 6029312, 12582912, 26214400,
			54525952, 113246208, 234881024, 486539264, 1006632960, 2080374784,
			4294967296l, 8858370048l, 18253611008l, 37580963840l, 77309411328l,
			158913789952l, 326417514496l, 670014898176l, 1374389534720l, 2817498546176l,
			5772436045824l, 11819749998592l, 24189255811072l, 49478023249920l,
			101155069755392l, 206708186021888l, 422212465065984l, 862017116176384l,
			1759218604441600l, 3588805953060864l, 7318349394477056l, 14918173765664768l,
			30399297484750848l, 61924494876344320l, 126100789566373888l, 256705178760118272l,
			522417556774977536l };
	static int[] NOT_FOUND = new int[] { -1 };
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        for(int i = 0; i < t; i++) {
            int n = sc.nextInt();
            long k = sc.nextLong();
            int[] res = solve(n, k);
            StringBuilder b = new StringBuilder(countString(n));
			for (int j = 0; j < res.length; j++) {
				b.append(res[j]).append(s);
			}
			System.out.println(b.toString());
        }
        sc.close();
    }
    static int[] solve(int n, long k) {

        if(n == 1) {
            if(k == 1) {
                return new int[] { 1 };
            }
            return NOT_FOUND;
        }
        
		int min = n >> 1;

		/* even n */
		if ((n & 1) == 0) {
			if (k == 1) {
				int[] ret = new int[n];
				int ix = 0;
				for (int i = 0; i < min; i++) {
					ret[ix++] = min - i;
					ret[ix++] = n - i;
				}
                return ret;
			} else if (k == 2) {
				int[] ret = new int[n];
				int ix = 0;
				for (int i = 0; i < min; i++) {
					ret[ix++] = min + i + 1;
					ret[ix++] = i + 1;
				}
                return ret;
			} else {
				return NOT_FOUND;
			}
		}
		/* odd n */
		long midCount = 1L << min;
		boolean flip = false;
		boolean middle = false;
		int countSummIx = min;
		long countsSumm;

		k--;
		/* k is before mid section */
		if (countSumms.length < countSummIx || k < (countsSumm = countSumms[countSummIx])) {
		}
		/* k is inside of mid section */
		else if (k < (countsSumm = countSumms[countSummIx]) + midCount) {
			k = k - countsSumm;
			middle = true;
		}
		/* k is after mid section but before end of last side */
		else if (k < (countsSumm << 1) + midCount) {
			k = Math.abs(k - (countsSumm << 1) - midCount + 1);
			flip = true;
		}
		/* k out of range */
		else {
			return NOT_FOUND;
		}

		int[] arr = new int[n];
		if (middle) {
			arr[0] = min + 1;
			arr[1] = 1;
			if (k >= midCount >> 1) {
				k = midCount - 1 - k;
				flip = true;
			}
			solveRadius(n, k, min - 1, arr, min);
			if (flip) {
				int n_1 = n + 1;
				for (int i = 0; i < arr.length; i++) {
					arr[i] = n_1 - arr[i];
				}
			}
			return arr;
		}
		solveSide(arr, n, k, min);
		if (flip) {
			int n_1 = n + 1;
			for (int i = 0; i < arr.length; i++) {
				arr[i] = n_1 - arr[i];
			}
		}
		return arr;
	}
    static void solveSide(int[] arr, int n, long k, int min) {
		boolean[] cache = new boolean[n + 1];
		int ix = 0;
		outer:while (true) {
			if (k == 0) {
				arr[ix++] = 1;
				for (int i = min + 1; i > 1; i--) {
					if (!cache[i]) {
						arr[ix++] = i;
						arr[ix++] = i + min;
					}
				}
				break;
			}
			if (k == 1) {
				for (int left = 1, right = min + 2, n_1 = n - 1; ix < n_1;) {
					while (cache[left])	left++;
					while (cache[right]) right++;
					arr[ix++] = left++;
					arr[ix++] = right++;
				}
				arr[ix++] = min + 1;
				break;
			}
			k -= countSumms[1];
            long next = 1L;
			for (int i = 0, j = 2;; ++i, j++, next <<= 1) {
				if (k < countSumms[i + 1]) {
					arr[ix++] = j;
					arr[ix++] = j + min;
					cache[j] = cache[j + min] = true;
					break;
				}
				k -= countSumms[i + 1];
				if (k < next) {
					int left = j;
					int right = min + left + 1;
					while (true) {
						while (cache[left])	left++;
						if (left == min + 1) {
							break;
						}
						while (cache[right]) right++;
						arr[ix++] = left++;
						arr[ix++] = right++;
					}
					arr[ix++] = left;
					arr[ix++] = 1;
					solveRadius(n, k, i, arr, min);
					break outer;
				}
				k -= next;
			}
		}
	}
    static int countString(int n) {
		int ret = 0;
		if(n < 10) { return n << 1; }
		ret += 18;
		if(n < 100) { ret += (n - 9) * 3; return ret;}
		ret += 270;
		if(n < 1000) { ret += (n - 99) << 2; return ret;}
		ret += 3600;
		if(n < 10000) { ret += (n - 999) * 5; return ret;}
		ret += 45000;
		if(n < 100000) { ret += (n - 9999) * 6; return ret;}
		ret += 540000;
		ret += (n - 99999) * 7;
		return ret;
	}
    static void solveRadius(int n, long k, int radius, int[] arr, int min) {
		int left = n - (radius << 1) - 1;
		int right = n - 1;
		int min_2 = min + 2;
		for (int i = 0; i < radius; ++i) {
			long next = (1L << (radius - (i + 1)));
			if (k < next) {
				arr[left] = min_2 + i;
				arr[left + 1] = 2 + i;
				left += 2;
			} else {
				arr[right] = min_2 + i;
				arr[right - 1] = 2 + i;
				right -= 2;
				k -= next;
			}
		}
		arr[left] = min_2 + radius;
	}
}
