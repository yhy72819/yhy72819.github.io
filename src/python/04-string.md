---
title: 04-字符串
icon: blog
date: 2025-08-23 21:31:12
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

## 1. 字符串的定义

字符串是由字母、数字和特殊字符组成的序列

![5599328e8ffaa69ce384c4cd9f352f09](./04-string.assets/5599328e8ffaa69ce384c4cd9f352f09.png)

## 2. 创建字符串

### 2.1 基础创建

创建类型分为：

1. name：`‘yhy’`

2. number: `“18”`
3. paragraph : ` '''Hello,Bornforthis!Hello,World!'''`

### 2.2 单引号，双引号和三引号

其中单引号和双引号效果相同,但三个单引号或三个双引号连环可以使字符串跨行连接

```python
paragraph = '''hello
,nihao'''
paragraph_2 = """hello

,nihao"""
```

这是能正常运行的

效果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/06.py 
hello
,nihao
hello

,nihao

Process finished with exit code 0
```

而单个单引号或双引号组跨行则不能正常运行,但在每一行末尾加一个`\`就可以

以下为失败示例：

```python
paragraph = 'hello
,nihao'
paragraph_2 = "hello
,nihao"
print(paragraph)
print(paragraph_2)
```

发现报错代码：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/06.py 
  File "/Users/yhy/Coder/experiment/06.py", line 1
    paragraph = 'hello
                ^
SyntaxError: unterminated string literal (detected at line 1)

Process finished with exit code 1

```

那么既然单引号和双引号效果相同，那么为什么要存在单引号和双引号两个等效符合呢？

我们在编程中常用英语，在英语语法中我们常见到：`I'm ···`这一句式，那么在这一句式存在的情况下，单引号做字符串倒入时由于句子中有单引号，会自动识别为字符串结尾，发生错乱。

```python
name1 = "I'm Lilei"
name2 = 'I'm Lilei'
```

注意到，以双引号做引入时则没有这一问题。

因此，单双引号，包括三个引号的导入便是为了尽最大可能解决这种情况，毕竟，我们无法保证我们的内容是否一定不会出现单引号和双引号。

> **结论**：单双引号混用可以最大程度保证字符串内容在编程语言的合法性

那么，如何使下列输出内容按其原有格式运行呢？

```markdown
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

方法一：

```python
name ='我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\
\
浅者见浅，深者见深——黄家宝\
\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\
\
先实现功能，再去优化，否则一切会很乱。——AI悦创\
\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西'
print(name)
```

我们发现：结果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/05.py 
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

Process finished with exit code 0
```

其输出结果无法换行

方法二：用三引号输出多行

```python
a = '''我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西'''
print(a)
```

结果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/04.py 
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

Process finished with exit code 0
```

成功完成换行输出

由此，我们发现：三引号可以完美完成同一个字符串中所有行内格式的复制，而单双引号则单纯输出内容,同时三引号可以注释内容的

## 3. 检测字符串的长度

len()即为检测字符串长度的语法

示例:

```python
paragraph = 'Hello,Bornforthis'
print(len(paragraph))
```

> **注**：字符串长度不是按其下标来计算，而是从1开始计数

## 4. 字符串中的字符获取

### 4.1 获取单个字符

在Python中，可以用索引直接获取单个字符，索引从零开始，即字符串的第一个索引为0，第二个为1，以此类推

```python
string = "bornforthis"
select = string[position]
```

- `string`是字符串变量
- `select`是用于存储提取字符的变量
- `position`是字符在字符串中的位置（即索引），从0开始

**示例**：

```python
string = "bornforthis"
select = string[0]      # 提取字符串中的第一个字符 b
print(select)           # 输出： b
```

​                                                                                                  **牛刀小试：**

任务：提取最后一个字母s

要求：使用三种方法

由上述可知：

前两种方法只需利用字符串索引的双向性即可

::: tabs

@tab 方法一

```python
string = "bornforthis"
select = string[10]
print(select)
```

@tab 方法二

```python
string = "bornforthis"
select = string[-1]
print(select)
```

@tab 方法三

那么，如何去找到第三种解决方法呢？

我们学习了 len 语法，那么 len 语法是计算字符串长度的，即 len 语法本质上表达的就是数字

也就是说：len 语法是可以直接加到中括号里面充当数字的

可是，在实际操作下：我们发现：

```python
string = "bornforthis"
select = string[len(string)]
print(select)
```

在结果上只会

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
Traceback (most recent call last):
  File "/Users/yhy/Coder/experiment/01.py", line 2, in <module>
    select = string[len(string)]
             ~~~~~~^^^^^^^^^^^^^
IndexError: string index out of range

Process finished with exit code 1

```

发生错误

那么，这是为什么呢 ？

原来，len 语法是计算字符个数，字符从 1 开始计算，而索引是从 0 开始计算，也就是说，在 len 语法后加一个`-1`的计算公式即可

```python
string = "bornforthis"
select = string[len(string)-1]
print(select)
```

结果正常运行：

```python
Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
s

Process finished with exit code 0
```

:::

### 4.2 获取连续字符「子字符串」

```python
string = "bornforthis"
select = string[start: end]
```

> **注**：end 需要 +1 才能包含该字符（可以把中括号里的内容当作左闭右开的区间）

```python
string = "bornforthis"
select = string[0: 3]
print(select)
```

结果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
bor

Process finished with exit code 0

```

笔者在尝试例子的过程中，遗漏了print这一步输出，导致结果出现了如下情况

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 

Process finished with exit code 0

```

即没有输出结果，在遇到输出与自己所预想的不一样时，一定要去分层次思考原因：

- 第一步：观察是结构错误还是内容错误；一般结构错误会直接报错，而内容错误会正常运行，上述即为内容错误

- 第二步：思考是哪个方向的内容错误（结构错误），运用排除法，由常规到罕见，如上，先考虑字符串提取错误，如果是字符串提取出错不可能直接没有输出结果，所以在考虑其它情况。一般来说，输出毫无结果都是源于没有输出项

- 第三步：用上一步的可能检查是否有输出项（print），发现没有，问题解决

**牛刀小试**：

- 任务：提取`for`

    ```python
    string = "bornforthis"
    select = string[4:7]
    print(select)
    ```

    结果：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
    for
    
    Process finished with exit code 0
    ```

- 任务：提取`this`

    ```python
    string = "bornforthis"
    select = string[7:11]
    print(select)
    ```

    结果：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
    this
    
    Process finished with exit code 0
    ```

### 4.3 获取非连续字符

要获取多个**不连续**的字符，可以用切片语法`string[start:end:step]`。在切片中：

- `start`表示起始位置的索引(包含该位置的字符)。
- `end`表示结束位置的索引(**不包含该位置的字符**)。
- `step`表示步长，用于控制提取的间隔字符。(间隔所输入的数字为你想间隔字符量 + 1，默认 step = 1)
- 可以只设置`step`,索引会默认开始到结尾(详见第五点)

通过设置不同的`step`值，可以从字符串中按照指定的间隔提取字符。

通过观察上述关键词描述，我们发现 step 只能指定提取固定规律性间隔的字符，而不能是变化性间隔的字符，比方说：如果让它提取所有间隔为 1 的字符，那么中间不可能允许间隔为 2 或更多，不会跳跃两个字符提取；这是因为计算机运行有规律性，只能提取规律间隔的字符，而如果要提取无规律间隔的字符，就需要人为设定来人为影响其提取的字符，而这样做的文本量是大大超过上述字符的(实际上，这只是对于未设定该规则的计算机无规律，而人类将其规律赋予了计算机，所以：计算机本质上只能做**有规律的事情**)

**小试牛刀**：

- 任务：`string = "0123456789"`,提取：02468

    ```python
    string = "0123456789"
    select = string[0:9:2]
    print(select)
    ```

    结果：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
    02468
    
    Process finished with exit code 0
    ```

- 任务：`string = "0123456789"`,提取：13579

    ```python
    string = "0123456789"
    select = string[1:10:2]
    print(select)
    ```

    结果：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
    13579
    
    Process finished with exit code 0
    ```

- 任务：`string = "bornforthis"`,提取：bnri

    ```python
    tring = "bornforthis"
    select = string[0:10:3]
    print(select)
    ```

    结果：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
    bnri
    
    Process finished with exit code 0
    ```

- 任务：``string = "bornforthis"`,提取：ofts

    ```python
    string = "bornforthis"
    select = string[1:11:3]
    print(select)
    ```

    结果：

    ```python
    /Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/01.py 
    ofts
    
    Process finished with exit code 0
    ```

## 5. 字符串的优化

语法：

```python
string = "0123456789"
select = string[::step]
```

