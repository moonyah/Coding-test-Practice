T = int(input())
 
for tc in range(1,1+T):
    n = int(input())
    income = list(map(int,input().split()))
    
    # 평균 소득
    income_avg = sum(income)/n
    
    # 소득이 평균 이하인 사람 숫자
    cnt = 0
    
    for q in income:
        if q <= income_avg:
            cnt += 1
 
    print('#{} {}'.format(tc,cnt))

