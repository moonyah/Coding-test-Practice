T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    li = list(map(int, input().split(' ')))
    if li[2] > li[1]:
        answer = -1
    elif li[0] < li[2] and li[1] > li[2]:
        answer = 0
    else:
        answer = li[0] - li[2]
    print('#%d %d'%(test_case, answer))
