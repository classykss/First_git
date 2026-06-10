print("Addition",2+2)
print("Subtraction",7-4)
print("Multiplication",3*5)
print("Division",10/2)


// factorial of a number
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)   
print("Factorial of 5 is", factorial(5))


// create a list of numbers and print the sum
numbers = [1, 2, 3, 4, 5]   
print("Sum of numbers is", sum(numbers))
