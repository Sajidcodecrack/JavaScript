def avg(*args):
    val = sum(args)
    avg_val = val / len(args)
    return avg_val

if __name__ == '__main__':
    # Take user input and convert it into a list of integers
    user_input = input()
    numbers = list(map(int, user_input.split()))

    # Calculate the average
    result = avg(*numbers)
    
    # Print the result formatted to 2 decimal places
    print(f"{result:.2f}")
