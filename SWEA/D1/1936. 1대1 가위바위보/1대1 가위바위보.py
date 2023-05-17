choice = list(map(int, input().split()))
if (choice[0] == 1 and choice[1] == 2) or (choice[0] == 2 and choice[1] == 3) or (choice[0] == 3 and choice[1] == 1):
	print("B")
else:
    print("A")