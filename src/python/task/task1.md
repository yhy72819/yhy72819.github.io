---
title: task1
icon: blog
date: 2025-09-19 21:13:34
author: yhy
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

#### Car Manufacturing

Cars and automobiles do not appear out of nowhere. How are they created from raw materials? Car factories! After design and engineering, different machines automate the process of creating parts of a car. This includes car doors, roofs, side frames, etc. These are then added to the main frame of a car. They are combined into a production line for assembly and further actions, such as painting.

In this lab, you will be working in the role of an IT intern in a car factory. Your manager, Sunny, has asked you to create programs to 1) calculate how much it would cost to produce a certain number of cars; and 2) calculate how long it would take to manufacture a certain number of cars.

You asked Sunny how this would help the factory and the work the company is doing. "It wouldn't, I'm just curious," he answered.

#### Task 1 - Calculating the Cost of Car Production

After gathering information about cars produced in your factory, Sunny told you that each car manufactured has:

- 4 car doors
- 4 wheels
- 4 tires
- 2 sets of lights
- 1 engine
- 1 steering wheel

Even though you know he definitely missed some parts, you decided to just go with it, and looked at the pricing of the car parts he provided:

| Car Part         | Price ($) |
| ---------------- | --------- |
| A Car Door       | 55.5      |
| A Car Wheel      | 20        |
| A Tire           | 15.3      |
| A Set of lights  | 10.16     |
| An Engine        | 150       |
| A Steering Wheel | 40        |

Complete the file `cost.py`, so that depending on the number of cars in the input, you would output the cost.

There are 3 parts to your task:

1. Get the number of cars
2. Calculate the total cost
3. Print the total cost

An example, where the number 3 is the input:

```txt
Enter the number of cars: 3
The total cost will be: $1720.56
```

Note: You **must** make sure that your output format is **exactly the same** as our given examples, so that you will not lose points in our auto-grading system, ZINC. The decimal places must be exactly the same as our given examples (which is **2 decimal places**). You can always assume that the input will be a **positive integer**.

#### Task 2 - Calculate the Time Taken for Car Production

You really start to doubt Sunny's competence, as he is asking you to do tasks that make no sense. He has now given you the time needed to assemble each car part through the production line:

| Car Part         | Time spent on Production Line (s) |
| ---------------- | --------------------------------- |
| A Car Door       | 8                                 |
| A Car Wheel      | 5.8                               |
| A Tire           | 5                                 |
| A Set of lights  | 10.5                              |
| An Engine        | 20                                |
| A Steering Wheel | 12.7                              |

Sunny also tells you that for those parts with count > 1, e.g., car doors, they would be installed **one by one**. Now you (kind of) understand why management keeps complaining about inefficiency and wanting to replace workers with AI. He also mentioned that it would take **an extra 30 seconds** to spray paint the car, and it should be accounted for. You do not understand Sunny's line of thinking (if any), but you are tasked to complete `time_taken.py`.

Similar to the previous task, there are 3 parts to your task:

1. Get the number of cars
2. Calculate the total time taken
3. Print the total time taken

An example, where the number 3 is the input:

```txt
Enter the number of cars: 3
The total time taken will be: 476.70 second(s)
```

Note: Just like before, you **must** make sure that your output format is **exactly the same** as our given examples, so that you will not lose points in our auto-grading system, ZINC. The decimal places must be exactly the same as our given examples (which is **2 decimal places**). You can always assume that the input will be a **positive integer**.