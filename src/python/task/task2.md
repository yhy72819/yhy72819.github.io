---
title: task2
icon: blog
date: 2025-10-08 21:08:02
author: yhy72819
category:
    - task
tag:
    - task
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

### Description

The following are tasks of the assignment. Please go through the tasks in the order listed. There are **more specific requirements in the comments of the relevant functions in the skeleton code**. This description is provided to give you a general overview of each function.

All tasks below should be implemented in the `game.py` file. All numbers used should be of type `int`.

#### Task 1: Initialize Game Board

```py
def init_gameboard():
```

**Description -** In this task, you have to implement the `init_gameboard` function to create a 20x6 empty gameboard. In other words, complete Python code in the function init_gameboard() such that the function returns a 2D list (a list of lists) of 20 rows and 6 columns in each row, with each item in the 2D list having a value of 0 of type `int`. Edit the code inside the function `init_gameboard()` specified between `### TASK 1 STARTS HERE ###` and `### TASK 1 ENDS HERE ###` to return the game board list of lists.

The lists inside the game board should be independent. That is, changing an element in a row should not affect the values of the other lists.

To generate a list of lists **independently**, use simple `for` loops or `list comprehension` compactly. A simple `for` loop to generate a 2x2 2D array with zeros:

```py
a = []
for i in range(2):
    a.append([0, 0])
print(a)        # prints [[0, 0], [0, 0]]
```



Please note, however, that the `list` inside the `append` function **must be a list of values and not variables defined elsewhere**. For example, `[0, 0]` in `a.append([0, 0])` can be replaced with `[0 for i in range (2)]` but not `b = [0, 0]; a.append(b)`.

#### Task 2: Biased Random Value Selection

```py
def default_random_number_generator():
```

**Description -** To make the game more interesting, we would like our game to generate blocks with random values. However, if the probability of generating a piece with a large value (like 255) is high, the game would be too easy. Therefore, we would like to favor generating blocks with smaller values. **Edit** the code inside the function `default_random_number_generator()`, including changing the example `return` statement, if necessary, and return an appropriate integer.

In this task, you have to modify the code between `### TASK 2 STARTS HERE ###` and `### TASK 2 ENDS HERE ###` in the `default_random_number_generator` function to generate a randomly selected number from the specified list that is more likely to be smaller (more likely to be within the smaller half subset than the larger half). To achieve this, you can generate 2 random numbers and take the minimum of the two numbers as the result. Return only an integer from this list: `1, 3, 7, 15, 31, 63, 127, 255`.

The `randint` function of the `random` library can be used to generate random integers between two numbers (inclusively). For example, if you want to randomly pick a number from among `0, 1, 2, 3, 4`:

```py
import random
x = random.randint(0, 4)
print(x)          # generates a random integer between 0 and 4 inclusively
```



To pick the smaller of two given integers, the `min(a, b)` function can be used.

```py
a, b = 0, 1
print(min(a, b)) # prints 0
```



#### Task 3: Valid Position Checking

```py
def is_valid_move(game_board, current_shape, current_location, current_rotation):
```

**Description -** In this task, you have to implement the `is_valid_move` function to check if the piece can be placed in the given location. You are given the gameboard and the new position of the piece. Return True if the move is valid (no block is out of bounds in any side and no piece of the block is in a position where there is already another block) or return False otherwise. Edit the code inside the function `is_valid_move()` between `### TASK 3 STARTS HERE ###` and `### TASK 3 ENDS HERE ###` including changing the example `return` statement, if necessary. The function should return a `Boolean` type, `True` or `False`.

A method to check validity is to iteratively go through each block (4 blocks in each shape) in a loop and calculate if that specific block's location on the grid is valid. Valid if not out of bounds and there is not already a block at that position. The `current_location` input parameter to the function represents the anchor coordinate of the position to check. Each block's location equals to the anchor position coordinate plus the offset from the specific rotation of the shape.

For example, for shape 0 (`current_shape` == 0) and rotation 0 (`current_rotation` == 0), the coordinate offsets of the relevant four blocks are: `[[0, 0], [0, 1], [0, 2], [0, 3]]` (14th line of the skeleton program about the `shapes` variable initialization). If `current_location = [5, 5] `, then the coordinates of the four blocks to check are : `[5+0,5+0], [5+0,5+1], [5+0,5+2], [5+0,5+3]`, or the coordinates to check are: `[5,5], [5,6], [5,7], [5,8]`. Validity checks would include whether any of these coordinates are out of bounds (rows between 0 and 19 inclusive, columns between 0 and 5 inclusive) and if there is already a block in that coordinate. To check if there is already a block in that coordinate, check if the specific `game_board[row][column]` value of that block is not zero.

Do NOT modify the input parameters inside the function.

#### Task 4-6: Move Piece

```py
def move_left(game_board, current_shape, current_location, current_rotation):

def move_right(game_board, current_shape, current_location, current_rotation):

def move_down(game_board, current_shape, current_location, current_rotation):
```

**Description -** Implement the `move_left`, `move_right`, and `move_down` functions to move the piece to the left, right, and down, respectively. Keep the piece in the original position if the move is invalid. You may use the `is_valid_move` function to help with your implementation. Edit the code inside the functions `move_left()`, `move_right()`, and `move_down()` between `### TASK x STARTS HERE ###` and `### TASK x ENDS HERE ###` (x is the task number), including changing the example `return` statements, if necessary, and return two values: location and rotation. The syntax to `return` two variables, `x1` and `x2`, would be `return x1, x2`. Please note that location is a list of two integers and rotation is an integer.

In each of the functions `move_left`, `move_right`, and `move_down`, check if the piece with the proposed new location and unchanged rotation is valid. If valid, return the new location and rotation values. If invalid, return the original location and rotation values. The original location and rotation values are the input parameters to the functions.

Do NOT modify the game_board parameter inside these functions.

#### Task 7: Rotate Piece

```py
def rotate(game_board, current_shape, current_location, current_rotation):
```

**Description -** In this task, you have to implement the `rotate` function to rotate the piece (rotate means to increase rotation by 1 modulo 4). Keep the piece in the original orientation if the new position is invalid. You may use the `is_valid_move` function to help with your implementation. Edit the code inside the function `rotate()` between `### TASK 7 STARTS HERE ###` and `### TASK 7 ENDS HERE ###`, including changing the example `return` statement, if necessary, and return two values: location and rotation in similar syntax to `return x1, x2`.

Check if the **proposed** rotation with unchanged location is valid. Return new values if valid, return original values otherwise.

Do NOT modify the game_board parameter inside this function.

#### Task 8: Gravity and Merge

```py
def gravity_and_merge(game_board):
```

**Description -** In this task, you have to implement the `gravity_and_merge` function according to the mechanisms described above in the "Introduction" section. The parameter of the function is the gameboard only, with the new piece already inserted to the gameboard. The function should directly update the gameboard. Edit the code inside the function `gravity_and_merge()` between `### TASK 8 STARTS HERE ###` and `### TASK 8 ENDS HERE ###`.

There are two sets of actions in this task: gravity and merging:

- **Gravity**
- **Merging**



A possible algorithm can be:

```
Loop through each column:
  Repeat this 20 times (or number of rows): 
    Loop through each row, but from bottom to top, and check each cell to:
      Take the cell value above if the current cell is empty and reset the above cell (gravity); or
      Merge if the current cell value equals the cell value above and reset the above cell value (merge); or
      Do nothing
```



#### Task 9: Get Game Status

```py
def get_game_status(game_board):
```

**Description -** In this task, you have to implement the `get_game_status` function to check the game status. You should `return "Lose"` or `return "Win"` or `return "Playing"`. The game is considered to be "Win" if there is a block with a value of 1023 on the gameboard. The game is considered to be "Lose" if the blocks touch the line after the block merging process. To be specific, that is to check if any of the top five rows of the game board contain non zero values. Otherwise, the game is considered to be "Playing". If there is a block with a value of 1023 and a block in the top five rows at the same time, the game is considered to be "Lose".

Do NOT modify the game_board parameter inside this function.

#### Optional Task: Custom Random Value Selection

```py
def custom_random_number_generator():
```

**Description -** In this optional task, you can implement the `custom_random_number_generator` function to create your own random number generator to make the game more interesting. You can use any method to generate a random number. You can also use this function for debugging purposes. **This task will NOT be graded.**