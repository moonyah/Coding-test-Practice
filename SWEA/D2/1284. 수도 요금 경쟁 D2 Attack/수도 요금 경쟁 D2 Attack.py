T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    li = list(map(int, input().split(' ')))
    priceA = li[0] * li[4]
    if li[4] < li[2]:
        priceB = li[1]
    else:
        priceB = li[1] + (li[4]-li[2])*li[3]
    print('#%d %d' % (test_case, min(priceA, priceB)))