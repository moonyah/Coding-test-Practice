def solution(angle):
    answer = 0
    if 0 < angle and 90 > angle :
        answer = 1
    elif angle == 90:
        answer = 2
    elif 90 < angle and 180 > angle:
        answer = 3
    elif angle == 180:
        answer = 4
    return answer