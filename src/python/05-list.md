---
title: 05-list
icon: blog
date: 2025-09-27 21:54:08
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

## 1. 列表的结构

### 1.1 列表的基本语法

- 使用中括号`[]`表示列表
- 列表中的元素用`,`隔开
- 请确保使用英文输入法下的逗号

如下为两个基本列表：

```python
student1 = ['aiyuechuang',18,'class01',202405]
student2 = ['bornforthis',19,'class02',202402]
```

### 1.2 列表的三大特性

1. 有序性：列表中的元素是按一定顺序存储的，可以通过索引访问。
2. 支持任意数据类型：列表可以存储不同且任意的数据类型
3. 可变性： 列表中的元素在运行过程中可被修改，后续会提及这一特性

### 1.3 字符串和列表的强制转换

在字符串的`input`环节我们提及过，当用list强制转换时，会自动识别输入的每一个字符并将它们隔离作为列表的一个元素（决定字符性质的字符不算，如字符串的第一对引号）

如：

```python
a = list(input())
print(a)
```

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/06.py 
'asda'
["'", 'a', 's', 'd', 'a', "'"]

Process finished with exit code 0

```

也就是说：我们可以利用这个性质，将字符串的每一个字符自动拆解，从而避免遗漏。

> ![04b8f70b3f0bc6eb5e7a4d03dd6b9400](./05-list.assets/04b8f70b3f0bc6eb5e7a4d03dd6b9400.png)以前遇到的一些问题，可能成为将来解决某些问题的方案

## 2. 获取列表的某些元素

### 2.1 单个字符元素

```python
grade = [98,99,95,80]
#98
print(grade[0])
#178
print(grade[0]+grade[3])
```

### 2.2 提取多个连续字符元素

```python
grade = [0,1,2,3,4,5,6,7,8,9]
# [2,3,4,5]
print(grade[2:6])
# [7,8,9]
print(grade[7:10])
```

结果为：

````python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/06.py 
[2, 3, 4, 5]
[7, 8, 9]

Process finished with exit code 0

````

观察发现：与字符串的提取规则并无区别，但提取多个元素时，输出结果会保留列表

### 2.2 提取多个不连续字符元素

```python
grade = [0,1,2,3,4,5,6,7,8,9]
# [1,3,5]
print(grade[1:6:2])
# [0,2,4，6，8]
print(grade[0:9:2])
# [8,7,6]
print(grade[-2:-5:-1])
# [9,7,5,3,1]
print(grade[-1:-10:-2])
```

结果为:

```python
[1, 3, 5]
[0, 2, 4, 6, 8]
[8, 7, 6]
[9, 7, 5, 3, 1]

Process finished with exit code 0
```

## 3. 列表的切片赋值

### 3.1 列表的部分覆盖

```python
In [2]: list("Python")
Out[2]: ['P', 'y', 't', 'h', 'o', 'n']

In [3]: name = list("Python")

In [4]: name[2:]
Out[4]: ['t', 'h', 'o', 'n']

In [5]: name[2:] = list('abc')

In [6]: name
Out[6]: ['P', 'y', 'a', 'b', 'c']
```

如上表所示：

我们的name[2:]本质上就是`[‘t’,'h','o','n']`,而list(‘abc’)已经如上表所示，我们拿list(‘abc’)直接覆盖name[2:]就会导致name中的后四元素直接被覆盖，而前两个元素不受影响，从而达到部分覆盖的效果

::: tips

```python
In [8]: number = [1,5]

In [9]: number[1:1]
Out[9]: []

```

如上表：我们发现Out9的输出结果为空列表而并非报错

这是因为：左侧为闭区间，指定的元素为number中的5 ，右边为开区间，无法览索到 5 ，因为索引只能取整数的特性，它从本质上指定的是1 ，那么这就导致，start和end 发生了反转，与步长方向相反，由字符串中反向索引章节中的描述，此时应当取到空列表而非报错

:::

## 4. 小试牛刀

![481c98e294c62cb118bfa84b36cc3c3c](./05-list.assets/481c98e294c62cb118bfa84b36cc3c3c.png)

