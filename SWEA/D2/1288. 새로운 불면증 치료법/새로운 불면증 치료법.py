T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    num = [0] * 10 # 0으로 초기화된 10개의 요소를 가진 리스트 생성
    k = 1
    
    while(0 in num): # 리스트 num 안에 0이 존재하면 루프는 반복, 없으면 종료됨
        str_N = str(N * k) # N배로 str_N가 커짐
        for s in str_N: # str 순회
            num[int(s)] += 1
        k += 1
	
    print("#{} {}".format(test_case, (k - 1) * N))