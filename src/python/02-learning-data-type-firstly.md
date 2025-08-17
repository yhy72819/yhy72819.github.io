---
Title: 02-初识数据类型
icon: blog
date: 2025-08-17 21:25:35
author:
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

![89dea5355ca9eef9f87f5b52e837eb15](./02-learning-data-type-firstly.assets/89dea5355ca9eef9f87f5b52e837eb15.png)

## 1. 数字型

### 1.1 代码示例

1. 整型(没小数就是)：

    ```python
    int_num = 1
    t = type(int_num)  # type 用来检测变量的数据类型
    print(int_num)
    print("int num type is:", t)
    print("直接检测数据类型，并输出:>>>", type(int_num))
    ```

    演示结果为：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/03.py 
    1
    int num type is: <class 'int'>
    直接检测数据类型，并输出:>>> <class 'int'>
    
    Process finished with exit code 0
    ```

2. 浮点数(有小数就是)：

    ```python
    float_num = 1.5
    t = type(float_num)
    print(float_num)
    print("float num type is:>>>", t)
    print("直接检测数据类型，并输出:.>>>", type(float_num))
    ```

    演示结果为：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/03.py 
    1.5
    float num type is:>>> <class 'float'>
    直接检测数据类型，并输出:.>>> <class 'float'>
    
    Process finished with exit code 0
    ```

## 2. 字符串

![image-20250817215323873](./02-learning-data-type-firstly.assets/image-20250817215323873.png)

### 2.1 代码示例

```python
string = "Hello Bornforthis"
t = type(string)
print(string)
print("string type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(string))
```

演示结果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/03.py 
Hello Bornforthis
string type is:>>> <class 'str'>
直接检测数据类型，并输出:>>> <class 'str'>

Process finished with exit code 0
```

### 2.2 字符串三大特性

1. 有序性

    1. 从左往右，下标是从 0 开始
    2. 从右往左，下标是从 -1 开始
    3. 引号内出现的每个字符都算一个下标

2. 不可变性

    1. 不同的编程语言处理字符串的方式可能不同，但在大多数语言中，字符串是不可变的，这意味着一旦创建，字符串的内容就不能改变

    > **注**：我们所说的不可变，是指在代码运行的过程中，不能有对字符串修改、添加、删除之类的操作