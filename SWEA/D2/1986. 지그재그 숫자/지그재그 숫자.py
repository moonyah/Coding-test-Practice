T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    answer = 0
    for i in range(1, int(input())+1):
        if i%2 == 0:
            answer -= i
        else:
            answer += i
    print('#%d %d' % (test_case, answer))
            
