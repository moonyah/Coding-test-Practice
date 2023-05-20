for i in range(1, 11):
    n = int(input())
    a, b = map(int, input().split())
    def rec(a, b):
        if b == 0:
            return 1
        else:
            return a * rec(a, b-1)
    print(f"#{i} {rec(a, b)}")

    
