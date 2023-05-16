T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for i in range(1, T + 1):
    T = list(map(int, input().split()))
    answer = max(T)
    print(f'#{i}', answer)