---
title: 本网站文章搭建过程
icon: blog
date: 2025-08-06 21:58:44
author: yhy72819
category:
    - 教程
tag:
    - notebook
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

## 1. 标题编写

n个#+空格+1.+空格即为标题n（n最大为6），建议从两个#开始，因为有总标题，>加空格即为开启注解

::: preview 演示

# 标题一

## 标题二

### 标题三

#### 标题四

##### 标题五

###### 标题六

> 文章中不需要标题一，一般从标题二开始就行（不需要标题一的格式`# title` 标题一会被识别为文本标题而不显示出来。

:::

## 2. 代码块

::: preview 代码块添加语法

1. Markdown 语法

```markdown
# 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五
###### 标题六
```

2. python 代码

```python
import random

number_to_guess = random.randint(1, 100)
guess_count = 0
max_tries = 10

print("猜数字游戏开始！尝试猜测一个在 1 到 100 之间的数字。你有 10 次机会。")

while guess_count < max_tries:
    guess_str = input("请输入你的猜测：")
    if not guess_str.isdigit():
        print("请输入一个有效数字！")
        continue
    guess = int(guess_str)
    guess_count += 1

    if guess < number_to_guess:
        print("太低了！再试一次。")
    elif guess > number_to_guess:
        print("太高了！再试一次。")
    else:
        print(f"恭喜！你猜对了数字 {number_to_guess}！你总共猜了 {guess_count} 次。")
        break
if guess != number_to_guess:
    print(f"很遗憾，你的机会已用完。正确的数字是 {number_to_guess}。")
```

3. java代码

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 输出 Hello Bornforthis 到控制台
        System.out.println("Hello, Bornforthis!");
    }
}
```

:::
