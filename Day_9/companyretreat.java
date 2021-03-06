import java.io.*;
import java.util.*;

public class E {

	static final int P = 1_000_000_007;
	BufferedReader br;
	PrintWriter out;
	StringTokenizer st;
	boolean eof;

	List<Integer>[] g;

	int result;

	int dfs(int v, int maxLen) {
		int seen = 0;
		for (int i = 0; i < g[v].size(); i++) {
			int u = g[v].get(i);
			seen = Math.max(seen, dfs(u, maxLen) - 1);
		}
		if (seen == 0) {
			result++;
			return maxLen;
		}
		return seen;
	}

	void solve() throws IOException {
		int n = nextInt();
		int q = nextInt();

		g = new List[n];
		for (int i = 0; i < n; i++) {
			g[i] = new ArrayList<>();
		}

		for (int i = 1; i < n; i++) {
			int par = nextInt() - 1;
			g[par].add(i);
		}
		
		int leaves = 0;
		for (int i = 0; i < n; i++) {
			if (g[i].isEmpty()) {
				leaves++;
			}
		}

		int[] minCnt = new int[n + 1];
		for (int i = 1; i <= n; i++) {
			if (minCnt[i - 1] == leaves) {
				minCnt[i] = leaves;
				continue;
			}
			result = 0;
			dfs(0, i);
			minCnt[i] = result;
		}
		int ans = 0;

		while (q-- > 0) {
			int perGroup = nextInt();
			int maxSize = nextInt();
			maxSize = Math.min(maxSize, n);
			ans += (int) ((long) perGroup * minCnt[maxSize] % P);
			if (ans >= P) {
				ans -= P;
			}
		}

		out.println(ans);
	}

	E() throws IOException {
		br = new BufferedReader(new InputStreamReader(System.in));
		out = new PrintWriter(System.out);
		solve();
		out.close();
	}

	public static void main(String[] args) throws IOException {
		new E();
	}

	String nextToken() {
		while (st == null || !st.hasMoreTokens()) {
			try {
				st = new StringTokenizer(br.readLine());
			} catch (Exception e) {
				eof = true;
				return null;
			}
		}
		return st.nextToken();
	}

	String nextString() {
		try {
			return br.readLine();
		} catch (IOException e) {
			eof = true;
			return null;
		}
	}

	int nextInt() throws IOException {
		return Integer.parseInt(nextToken());
	}

	long nextLong() throws IOException {
		return Long.parseLong(nextToken());
	}

	double nextDouble() throws IOException {
		return Double.parseDouble(nextToken());
	}
}
