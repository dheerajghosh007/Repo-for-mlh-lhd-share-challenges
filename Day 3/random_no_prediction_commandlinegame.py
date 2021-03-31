import random

ans = random.randint(1, 10)
print("Guess a number from 1 to 10")

count=0
while(True):
    count = count+1
    print("Can you guess it?")
    pred = int(input())
    if pred > ans :
        print("your prediction is too high")
    elif pred < ans :
        print("your prediction is too low")
    else:
        print("hurreh you predicted the correct ans")
        break
print("you reached to correct ans in " + str(count) + "times")
