T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N = int(input())
    num = [2, 3, 5, 7, 11]
    count = [0, 0, 0, 0, 0]
    for n in range(len(num)):
        while True:
            if N % num[n] == 0:
                N = N//num[n]
                count[n] += 1
            else:
                break
    print('#{}'.format(test_case), ' '.join(map(str, count)))