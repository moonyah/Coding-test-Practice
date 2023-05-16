T = int(input())
for i in range(1, T + 1):
    num1, num2 = map(int, input().split())
    if num1 > num2:
        sign = '>'
    elif num1 == num2: 
        sign = '='
    else :
        sign = '<'
        
    print(f'#{i}', sign)