#  import random module
import random

#  generate random number between 1-20
# random_number = random.randrange(1,20)
random_number = 5
# set the random number to a string for comparison to user input
random_number = str(random_number)
guess_count = 1

# prompt user for input "Guess a number between 1-20"
user_input = input("Guess a number between 1-20: ")
game_end_flag = False

while user_input != 'Quit' and game_end_flag == False:
# compare user input to random number
# if user guesses correct number output "You got it right!"
# limit number number of guesses to five
    if guess_count == 5:
        print('You have run out of guesses!')
        user_input = input("Would you like to play again? Yes or Quit. ")
        game_end_flag = True

        if user_input == 'Yes':
            guess_count = 1
            game_end_flag = False
            random_number = str(5)

    elif user_input == random_number:
        print('You got it right!')
        # show users how many guesses it took to get the right number
        print(f"It took you {guess_count} guesses!")
        game_end_flag = True
# if the user guesses incorrectly, check if the number is higher
# or lower than the random number
# if guess is too high output "Number too high"
    elif user_input != random_number:
        guess_count += 1
        print(guess_count)
        if user_input > random_number:
            user_input = input('Your guess was too high! Guess again: ')
            guess_count += 1
            print(guess_count)
# if guess is too low output "Number too low"
        if user_input < random_number:
            user_input = input('Your guess was too low! Guess again: ')
            guess_count += 1
            print(guess_count)
    else:
        user_input = input('Guess a number between 1 and 20. ')
