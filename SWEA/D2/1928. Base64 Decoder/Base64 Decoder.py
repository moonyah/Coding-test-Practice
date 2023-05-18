# dic 리스트에 인코딩 값 넣기
dic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/' ]

T = int(input())
for test_case in range(1, T + 1):
    word = list(input())
    value = '' 
    
    for j in range(len(word)): # word의 수만큼
    
        # num 변수에 dic 리스트 인덱스값 넣기
        num = dic.index(word[j])
        
        # 2진수로 변환하고 맨 앞의 '0b'를 제거하기 위해 2번 인덱스부터 저장하기
        bin_num = str(bin(num)[2:])
        
        # bin_num 값 빈 자리를 0으로 채우기
        while len(bin_num) < 6:
            bin_num = '0' + bin_num
        value += bin_num
            
    result = ''
    
    # 10진수로 변환하기 위해 8자리로 만들어줌 (입력값*6) // 8
    for k in range(len(word)*6 // 8):
    
        # 10진수로 변환
        number = int(value[k*8 : k*8+8], 2) # 슬라이싱, 이진법으로 표현된 문자열을 10진수로 변환함
        result += chr(number)
    print('#%d %s' % (test_case, result))	