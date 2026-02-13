import random

options = ["Rock", "Paper", "Scissors"]

user = input("Rock, Paper or Scissors \n")
comp = random.choice(options)

print(f"Your choice is {user}, computer choice {comp}")

if user == comp:
    print("Tie")
elif user == "Rock":
    if comp == "Paper":
        print("Computer wins")
    else:
        print("You Win")

elif user == "Paper":
    if comp == "Scissors":
        print("Computer wins ")
    else:
        print("You Win")
elif user == "Scissors":
    if comp == "Paper":
        print("Computer wins")
    else:
        print("You Win")