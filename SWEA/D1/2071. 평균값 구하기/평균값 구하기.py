T = int(input())
for i in range(1, T+1):
    T = list(map(int, input().split()))
    avg = sum(T)/len(T)
    print(f'#{i}', round(avg))