---
title: 01-变量
icon: blog
date: 2025-08-12 21:17:48
author: yhy72819
category:
    - python
tag:
    - note
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

## 1. 什么是 Python 的虚拟环境

### 1.1 虚拟环境定义

什么是虚拟环境：在一个大的系统空间中，以该空间为资源，切分成无数分小的虚拟环境，并使其互不干扰

### 1.2 虚拟环境应用原因

为什么用虚拟环境：在同一个系统环境下，不同版本的同一软件是互斥的，就是说，同一个系统环境只能容纳一个版本存在，而部分软件是你所创造的项目的基础所在，但由于时间的推进，版本不断更新，而每个项目所适应的版本是固定的，这就会导致同一系统环境只能同时开启一个项目，为解决这一问题，就创造虚拟环境来实现一台电脑同时运行多个版本，这个过程只需人工提供关联即可

## 2. 理解变量——生活中的例子

### 2.1 从字面意思去理解

- 变：变化
- 量：大小

### 2.2 举个例子

![094671d385cc7f3cdd157e34650fe0cb](./01-variable.assets/094671d385cc7f3cdd157e34650fe0cb.png)

——所以，**<span style="color:orange">变量就是在计算机的内存中开辟空间，来储存数据</span>**

### 2.3 变量的特点

特点：变量的值会被覆盖，只会记得最后一个值



## 3. 如何创建变量——赋值语句

1. 变量：通过变量名代表或引用某个值
2. 初始化赋值语句： 变量名=表达式（其中的等号是赋值运算符，即将等号左边的东西赋予右边东西的意义，如此时就是令变量名具有表达式的意义

**例**：1. x=3，自此之后所有x就都与3由相同含义

- 变量名：就是这个空间，我们叫他什么名字
- 表达式：类似数学表达

3. 程序的运行逻辑：从上到下，从右到左（这里的右，指的是先执行右边的整体），最后才是赋值
4. 代码示例

```pyhon
x=1 # 1 赋值给了 x，x 代表1
x=x+10 # x + 10 等价于 1 + 10 最后得出 11，11 赋值给 x
print(x) # print 打印，输出
# 井号是用来注释，注解，解释某一行代码的功能及作用
```

注意，由程序从上至下，从右往左的了逻辑，最后出现的变量x是第二行最左侧的x，又由于变量的值会被覆盖这一特点，故只会输出最后一个出现的x所代表的值，故结果为

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
11

Process finished with exit code 0

```

再来一次

```python
name1 = "lilei"
name2 = name1
print(name2)
```

结果是

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/02.py 
lilei

Process finished with exit code 0
```

这说明了**在等号两侧都为变量时，左侧变量会继承右侧变量的意义**

继续

```python
name1 = "lilei"
name1 = "hanmeiemi"
print(name1)
```

结果是

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/02.py 
hanmeiemi

Process finished with exit code 0

```

这说明了**在同一变量的情况下，程序只会记忆该变量的最后一次赋值**

## 3. 探究 print

### 3.1 同时输出多个数据

```python
a = 1
b = 2
c = 3
print(a,b,c)
```

结果是

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/02.py 
1 2 3

Process finished with exit code 0
```

### 3.2 sep 修改多个变量同时输出的间隔

```python
a = 1
b = 2
c = 3
print(a,b,c, sep='')
```

我们就可用sep语言来修改间隔，其中单括号内的内容便是间隔内容，**注意**：空格键也算内容，如上图结果为

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/02.py 
123

Process finished with exit code 0

```

如果加上空格

```python
a = 1
b = 2
c = 3
print(a,b,c, sep=' ')
```

那结果就是

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/02.py 
1 2 3

Process finished with exit code 0

```

同理，加上文字

```python
a = 1
b = 2
c = 3
print(a,b,c, sep='你好')
```

结果是

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/02.py 
1你好2你好3

Process finished with exit code 0

```

