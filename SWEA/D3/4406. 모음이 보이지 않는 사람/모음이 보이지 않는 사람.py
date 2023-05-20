T=int(input())
for i in range(T):
    string = input()
    collection = ['a','e','i','o','u']
    for j in collection:
        if j in string:
            string = string.replace(j,'') # ''으로 대체하기 
    print("#{} {}".format(i+1, string))