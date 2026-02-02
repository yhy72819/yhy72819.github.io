---
title: numpy
icon: blog
date: 2025-11-13 15:18:07
author: yhy
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

## 1.NumPy Ndarray 对象

NumPy 最重要的一个特点是其 N 维数组对象 ndarray，它是一系列同类型数据的集合，以 0 下标为开始进行集合中元素的索引。

ndarray 对象是用于存放同类型元素的多维数组。

ndarray 中的每个元素在内存中都有相同存储大小的区域。

ndarray 内部由以下内容组成：

- 一个指向数据（内存或内存映射文件中的一块数据）的指针。
- 数据类型或 dtype，描述在数组中的固定大小值的格子。
- 一个表示数组形状（shape）的元组，表示各维度大小的元组。
- 一个跨度元组（stride），其中的整数指的是为了前进到当前维度下一个元素需要"跨过"的字节数。



ndarray 的内部结构:



![img](./numpy.assets/ndarray.png)

跨度可以是负数，这样会使数组在内存中后向移动，切片中 **obj[::-1]** 或 **obj[:,::-1]** 就是如此。

> 如上所示：数组的索引是由外至内在一个`[]`内表示，不同纬度的索引用逗号隔开，而顺序遵循由外而内的维度排序
>
> 例如：`[2,:]`就是提取第一维索引为2的所有数字，`[:,2]`就是提取第二维索引为2的所有数字

创建一个 ndarray 只需调用 NumPy 的 array 函数即可：

```
numpy.array(object, dtype = None, copy = True, order = None, subok = False, ndmin = 0)
```

注意 array 不是 numpy 中的函数，而是python自带的，numpy会省去输出前缀，正常情况下使用array输出结果也会出现array(结果)

**参数说明：**

| 名称   | 描述                                                      |
| :----- | :-------------------------------------------------------- |
| object | 数组或嵌套的数列                                          |
| dtype  | 数组元素的数据类型，可选                                  |
| copy   | 对象是否需要复制，可选                                    |
| order  | 创建数组的样式，C为行方向，F为列方向，A为任意方向（默认） |
| subok  | 默认返回一个与基类类型一致的数组                          |
| ndmin  | 指定生成数组的最小维度                                    |

### 实例

接下来可以通过以下实例帮助我们更好的理解。

#### 实例 1

`import numpy as np  `

`a = np.array([1,2,3])   `

`print (a)`

输出结果如下：

```
[1 2 3]
```

#### 实例 2

\# 多于一个维度   

`import numpy as np `

` a = np.array([[1,  2],  [3,  4]])   `

`print (a)`

输出结果如下：

```
[[1  2] 
 [3  4]]
```

#### 实例 3

\# 最小维度  

 `import numpy as np  `

`a = np.array([1, 2, 3, 4, 5], ndmin =  2)   `

` print(a)`

输出如下：

```
[[1 2 3 4 5]]
```

#### 实例 4

\# dtype 参数  

`import numpy as np  `

`a = np.array([1,  2,  3], dtype = complex)  `

` print (a)`

输出结果如下：

```
[1.+0.j 2.+0.j 3.+0.j]
```

ndarray 对象由计算机内存的连续一维部分组成，并结合索引模式，将每个元素映射到内存块中的一个位置。内存块以行顺序(C样式)或列顺序(FORTRAN或MatLab风格，即前述的F样式)来保存元素。

示例：

```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]])
a[0,0] = 1000
print(a)
```

结果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/07.py 
[[1000    2    3]
 [   4    5    6]]

Process finished with exit code 0

```

```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]])
c = a[0,0]
c = 1000
print(a)

```

结果为：
```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/07.py 
[[1 2 3]
 [4 5 6]]

Process finished with exit code 0

```

发现只要是不直接转换的而是经过赋值保存的就一定会创建一个新的数组而不修改原有数组

## 2. 布尔索引机制

以bool数组作为索引

bool数组可以通过直接指出保留的值（True）与舍弃的值（False），来构建输出的数组

我们只需限定范围，就可提取所要得出的数组

其主要原理如下：

```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]])
b = a<4
print(b)
```

结果为：

```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/07.py 
[[ True  True  True]
 [False False False]]

Process finished with exit code 0

```

这样我们只需要用 bool 判定就能提取了

我们利用python提取 True 的机制,利用索引来完成提取

```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]])
b = a<4
print(a[b])
```

结果即为：
```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/07.py 
[1 2 3]

Process finished with exit code 0

```

当然，我们有更为简化的写法：

```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]])
print(a[a<5])
```

结果就为：
```python
/Users/yhy/Coder/.venv/bin/python /Users/yhy/Coder/experiment/07.py 
[1 2 3 4]

Process finished with exit code 0

```

既然能用比较运算符，就一定能用`or` `and` `not`

注意：你可以构造一个表格来方便理解

## 3. 乘法

在 NumPy 中，数组相乘主要有两种方式：**对应元素相乘**（使用 `*` 运算符或 `np.multiply()`）和**矩阵乘法**（使用 `@` 运算符或 `np.dot()`）。对应元素相乘要求数组形状相同，而矩阵乘法有更严格的规则，第一个矩阵的列数必须等于第二个矩阵的行数。 

1. 对应元素相乘

- **方法**: 使用 `*` 运算符或 `numpy.multiply()` 函数。

- **特点**: 将两个数组中相同位置的元素相乘。

- **要求**: 两个数组的形状必须相同。

- **示例**:

    ```python
    import numpy as np
    a = np.array([1, 2, 3])
    b = np.array([2, 2, 2])
    # 对应元素相乘
    c = a * b
    # 或 c = np.multiply(a, b)
    print(c)
    # 输出: [2 4 6]
    
    ```

2. 矩阵乘法

- **方法**: 使用 `@` 运算符或 `numpy.dot()` 函数。

- **特点**:

    - 对于二维数组，执行标准的矩阵乘法。
    - 对于一维数组（向量），`np.dot()`执行的是向量的点积（点乘后求和）。

- **要求**:

    - **二维数组**: 第一个矩阵的列数必须等于第二个矩阵的行数。
    - **一维数组与二维数组**: 一维数组的长度必须等于二维数组的第一个维度（行数）或最后一个维度（列数）等，这取决于其作为行向量还是列向量处理。

- **示例**:

    ```python
    import numpy as np
    # 二维数组矩阵乘法
    x = np.array([[1, 2], [3, 4]])
    y = np.array([[5, 6], [7, 8]])
    # 矩阵乘法
    z = x @ y
    # 或 z = np.dot(x, y)
    print(z)
    # 输出:
    # [[19 22]
    #  [43 50]]
    
    ```

3. 广播（broadcasting）

    [广播机制](https://zhida.zhihu.com/search?content_id=177499759&content_type=Article&match_order=1&q=广播机制&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjQ0MDA0OTQsInEiOiLlub_mkq3mnLrliLYiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxNzc0OTk3NTksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.Dv_-4hxBnJRY6tPVZ9bAS2mCP2joxuYv_5mYD6ARQwY&zhida_source=entity)在numpy中乃至[pytorch](https://zhida.zhihu.com/search?content_id=177499759&content_type=Article&match_order=1&q=pytorch&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjQ0MDA0OTQsInEiOiJweXRvcmNoIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MTc3NDk5NzU5LCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.ru9nni75CVZsb4m--HSvxU3Asi50ngi34aRNaipnmYM&zhida_source=entity)的矩阵（张量）运算中都有发挥作用，个人感觉这部分内容特别是官方对于这个机制的文字叙述比较晦涩，需要一种更形象的方式进行理解，因此值得拿出一章的内容专门进行讲解。

    ### **1.问题的引出**

    经过上节内容的介绍我们知道，numpy 的数组相加、相减以及相乘运算都是对应元素之间的操作，当两个数组大小完全相同的情况下很好想象。

    ```python
    import numpy as np
    [in]: x = np.array([[2,2,3],[1,2,3]])
    [in]: y = np.array([[1,1,3],[2,2,4]])
    [in]: print(x * y)
    [out]: [[ 2  2  9]
            [ 2  4 12]]
    ```

    然而有没有想到如果两个数组shape不同时数组该如何计算呢？

    我们可以做一个小实验：

    ```python
    [in]: x = np.array([[10,11,12],[13,14,15]])
    [in]: y = np.array([1,1,1])
    [in]: print(x + y)
    ```

    按我们的之前的思路一个2 * 3的数组和一个1 * 3的数组维度不同，是没有办法相加的，然鹅！！

    ```python
    [out]: [[11 12 13]
            [14 15 16]]
    ```

    代码没有报错并且打印出了计算结果！

    我们可以观察一下打印出来的结果，可以发现貌似 `x` 数组的每个元素都被加了 1 ，好像 `y` 数组和 `x` 数组的每一行都进行了一次相加一样，numpy 中这种通过扩展数组的方法来实现相加、相减、相乘等操作的机制就叫做**广播**（broadcasting）。

    

    ### **2.广播的原则**

    广播的原则：如果两个数组的[后缘维度](https://zhida.zhihu.com/search?content_id=177499759&content_type=Article&match_order=1&q=后缘维度&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjQ0MDA0OTQsInEiOiLlkI7nvJjnu7TluqYiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxNzc0OTk3NTksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.Ec6EbT9OEZe3ImThxpiunAPT6I8zdmizTAuTUlM7T2Q&zhida_source=entity)（[trailing dimension](https://zhida.zhihu.com/search?content_id=177499759&content_type=Article&match_order=1&q=trailing+dimension&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NjQ0MDA0OTQsInEiOiJ0cmFpbGluZyBkaW1lbnNpb24iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxNzc0OTk3NTksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.1WOId1qnX5PI-g3jnVQAY-bmcr5UmMSEmvHoA1WRq98&zhida_source=entity)，即从末尾开始算起的维度）的轴长度相符，或其中的一方的长度为1，则认为它们是广播兼容的。广播会在缺失和（或）长度为1的维度上进行

    广播规则详解

    - **逐维比较**：从两个数组的形状的最后一个维度开始向后比较。
    - **匹配条件**：对于要执行运算的两个数组的对应维度，它们要么相同，要么其中一个维度的大小为 1。
    - **维度对齐**：如果两个数组的维度数量不一致，较小的数组会通过在前面添加一个维度（值为 1）来向最长维度的数组对齐。
    - **失败情况**：如果两个数组的某个维度不相等，并且它们都不是 1，那么广播将无法进行，并会引发错误。 

    这句话乃是理解广播的核心，但是文字的定义还是比较难以理解。这里通俗的解释一下就是广播机制可以在两种情况下作用，一种是两个数组的维数不相等，但是它们的后缘维度的轴长相符（其实就是从后数的连续若干个维度数都相同），另外一种是有一方的长度为1（其实就是如果从后数有维度不同，但是维度大小为1时，广播机制同样可以发挥作用）。

    还不理解不要紧，我们后续还会有实例进行说明。

    ### **对于第一种情况(后缘维度的轴长相符)**

    举一个例子：

    ```python
    import numpy as np
    [in]: x = np.array([[0, 0, 0],[1, 1, 1],[2, 2, 2], [3, 3, 3]])  
    [in]: y = np.array([1, 2, 3])    
    [in]: print(x + y)
    [out]: [[1 2 3]
            [2 3 4]
            [3 4 5]
            [4 5 6]]
    ```

    上例中 x 的shape为（4，3），y 的shape 为（3，）。虽然前者是一维的，后者是二维的，但是比较后缘维度可知：

    ```text
    (4,3)
       ^
      (3, )
       ^
    ```

    它们的后缘维度相等，x 的第二维长度为3，和 y 的维度相同。因此他们可以通过广播机制完成相加，在这个例子当中是将 y 沿着0轴进行扩展。

    上面这段程序当中的广播如下图所示：

    

    ![img](./numpy.assets/v2-87f0be4142448c4b2ddbf519e478eac5_1440w.jpg)

    

    同样的还有：

    

    ![img](./numpy.assets/v2-658c89561ffa892d5f7935c0d1cd3dca_1440w.jpg)

    

    从上面的图可以看到，（3,4,2）和（4,2）的维度是不相同的，前者为3维，后者为2维。但是它们后缘维度的轴长相同，都为（4,2），所以可以沿着0轴进行广播。

    #### **对于第二种情况(后缘维度不全相同，有一方长度为1)**

    ```python
    import numpy as np
    [in]: x = np.array([[0, 0, 0],[1, 1, 1],[2, 2, 2], [3, 3, 3]]) 
    [in]: y = np.array([[1],[2],[3],[4]])   
    [in]: print(x + y)
    [out]: [[1 1 1]
            [3 3 3]
            [5 5 5]
            [7 7 7]]
    ```

    虽然 x 的shape为（4，3），y的shape为（4，1），但第二个数组在1维轴上长度为1，所以可以在1轴上进行广播。

    ```python
    (4,3)
     ^ ^
    (4,1)
     ^ ^
    ```

    

    ![img](./numpy.assets/v2-a870a11727cc188a1749725228e372e0_1440w.jpg)

    

    反例：如果输入的两个数组大小如下

    ```python
    import numpy as np
    [in]: x = np.ones((4,3,5))
    [in]: y = np.ones((4,1,3))
    [in]: print(x + y)
    [out]: ValueError: operands could not be broadcast together with shapes (4,3,5) (4,1,3) 
    ```

    代码会报错无法计算，因为从后缘维度数起 2 轴上 x 、y 大小即不相同也不为 1。

    类似的例子还有：数组大小为（3,5,6）可以和大小为（1,5,6）的数字相加，同样也可以和（3,1,6）大小相加，感兴趣的同学可以自己动手尝试一下。

## 4.性质

1. 同 tuple 一样，即便数组只有一维，其 shape 也应写成：`[n,]`,用逗号来区分其与数学计算意义上的数字

2. 尽管一个维度中可以有多个元素，但只要能满足广播规则或干脆每个维度元素数一致也是可以计算距离的，同一维度的总距离计算式为每个相同位置的元素之差的平方和并开根，

​	其具体体现为：

​	计算欧氏距离还可以利用数学公式展开进行优化： 

​	![image-20251127161953205](./numpy.assets/image-20251127161953205.png)

​	NumPy 中可以通过矩阵运算实现这个公式，避免显式地减法和平方和操作，特别适用于处理稀疏数据时，效率更高

```python
# 假设 A 和 B 是 NumPy 数组 (M, D) 和 (N, D)
A_sq = np.sum(A**2, axis=1).reshape((M, 1))
B_sq = np.sum(B**2, axis=1).reshape((1, N))
distances_sq = A_sq + B_sq - 2 * np.dot(A, B.T)
distances = np.sqrt(distances_sq)

```

## 5.比较

![image-20251201152620547](./numpy.assets/image-20251201152620547.png)

![s](./numpy.assets/image-20251201153443331.png)

注意 数组为`None`时使用此方法会报错

![image-20251201162036106](./numpy.assets/image-20251201162036106.png)
