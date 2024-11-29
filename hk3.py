def numCells(grid):
    count = 0
    rows = len(grid)
    cols = len(grid[0])
    
    for i in range(rows):
        for j in range(cols):
            val = grid[i][j]
            # Check all 8 possible neighbors
            if all(val > grid[ni][nj] for ni in range(max(0, i - 1), min(rows, i + 2))
                  for nj in range(max(0, j - 1), min(cols, j + 2))
                  if (ni, nj) != (i, j)):
                count += 1
    return count

def main():
    rows = int(input())
    cols = int(input())
    grid = []

    for _ in range(rows):
        row = list(map(int, input().split()))
        if len(row) != cols:
            return
        grid.append(row)

    result = numCells(grid)
    print(result)

if __name__ == "__main__":
    main()
