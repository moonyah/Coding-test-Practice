N = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
# 크기 순으로 나열을 해서 
# 중간값 찾기
num = list(map(int, input().split()))
num.sort()
index = (N-1)//2
print("{}".format(num[index]))
