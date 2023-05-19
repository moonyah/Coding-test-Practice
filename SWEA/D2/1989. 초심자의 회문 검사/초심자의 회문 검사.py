T = int(input())

for i in range(1, T + 1):
    answer = 0
    a = list(input())
    r = a[::-1] # 뒤집은 것
    
    if a == r:
        answer = 1
    else:
        answer = 0
    print("#%d" %i, answer)