# Python基础教程

## 简介

Python是一种简单易学且功能强大的编程语言，广泛应用于Web开发、数据科学、人工智能等领域。本教程将带你从零开始，掌握Python的基础语法和核心概念。

## 目录

1. [环境搭建](#环境搭建)
2. [Hello, World!](#Hello-World)
3. [变量与数据类型](#变量与数据类型)
4. [运算符](#运算符)
5. [控制流（条件语句与循环）](#控制流)
6. [函数](#函数)
7. [数据结构（列表、元组、字典、集合）](#数据结构)
8. [文件操作](#文件操作)
9. [异常处理](#异常处理)
10. [模块与包](#模块与包)

## 环境搭建

### Windows

1. 访问 [Python官网](https://www.python.org/) 下载最新版本的Python安装包。
2. 运行安装包，勾选"Add Python to PATH"选项，然后点击"Install Now"。
3. 安装完成后，打开命令提示符（CMD），输入 `python --version` 检查是否安装成功。

### macOS

1. 使用Homebrew安装：`brew install python`
2. 或从官网下载安装包进行安装。

### Linux

1. Ubuntu/Debian: `sudo apt update && sudo apt install python3 python3-pip`
2. CentOS/RHEL: `sudo yum install python3 python3-pip`

## Hello, World!

让我们编写第一个Python程序：

```python
print("Hello, World!")
```

将上述代码保存为 `hello.py`，然后在命令行中运行：`python hello.py`，你将看到输出：`Hello, World!`。

## 变量与数据类型

### 变量

Python中的变量不需要声明类型，可以直接赋值：

```python
name = "ZYH Team"
age = 2025
height = 1.85
is_student = True
```

### 数据类型

Python的基本数据类型包括：

- **整数（int）**: 如 `42`, `-10`
- **浮点数（float）**: 如 `3.14`, `-0.001`
- **字符串（str）**: 如 `"Hello"`, `'Python'`
- **布尔值（bool）**: `True`, `False`
- **空值（None）**: `None`

## 运算符

### 算术运算符

```python
a = 10
b = 3

print(a + b)   # 加法: 13
print(a - b)   # 减法: 7
print(a * b)   # 乘法: 30
print(a / b)   # 除法: 3.3333333333333335
print(a // b)  # 整除: 3
print(a % b)   # 取余: 1
print(a ** b)  # 幂运算: 1000
```

### 比较运算符

```python
print(a > b)   # 大于: True
print(a < b)   # 小于: False
print(a == b)  # 等于: False
print(a != b)  # 不等于: True
print(a >= b)  # 大于等于: True
print(a <= b)  # 小于等于: False
```

### 逻辑运算符

```python
x = True
y = False

print(x and y)  # 与: False
print(x or y)   # 或: True
print(not x)    # 非: False
```

## 控制流

### 条件语句

```python
age = 18

if age >= 18:
    print("你是成年人。")
elif age >= 13:
    print("你是青少年。")
else:
    print("你是儿童。")
```

### 循环

#### for 循环

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 使用 range()
for i in range(5):
    print(i)  # 输出: 0, 1, 2, 3, 4

for i in range(2, 10, 2):
    print(i)  # 输出: 2, 4, 6, 8
```

#### while 循环

```python
count = 0
while count < 5:
    print(count)
    count += 1

# 使用 break 和 continue
count = 0
while True:
    if count == 3:
        count += 1
        continue
    if count == 5:
        break
    print(count)
    count += 1
```

## 函数

### 定义函数

```python
def greet(name):
    """这是一个打招呼的函数（文档字符串）"""
    print(f"Hello, {name}!")

# 调用函数
greet("Alice")  # 输出: Hello, Alice!
```

### 默认参数

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Bob")  # 输出: Hello, Bob!
greet("Bob", "Hi")  # 输出: Hi, Bob!
```

### 返回值

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 输出: 8
```

## 数据结构

### 列表（List）

列表是可变的有序序列。

```python
# 创建列表
numbers = [1, 2, 3, 4, 5]
mixed = [1, "apple", True, 3.14]

# 访问元素
print(numbers[0])   # 第一个元素: 1
print(numbers[-1])  # 最后一个元素: 5

# 修改元素
numbers[0] = 10
print(numbers)  # 输出: [10, 2, 3, 4, 5]

# 添加元素
numbers.append(6)
numbers.insert(1, 15)

# 删除元素
numbers.remove(3)
del numbers[0]
popped = numbers.pop()

# 列表方法
numbers.sort()
numbers.reverse()
print(len(numbers))
```

### 元组（Tuple）

元组是不可变的有序序列。

```python
# 创建元组
point = (10, 20)
single = (5,)  # 注意：单个元素的元组需要加逗号

# 访问元素
print(point[0])

# 元组不可变，以下操作会报错
# point[0] = 15
```

### 字典（Dictionary）

字典是键值对的无序集合。

```python
# 创建字典
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# 访问值
print(person["name"])
print(person.get("age"))

# 修改值
person["age"] = 26

# 添加键值对
person["job"] = "Engineer"

# 删除键值对
del person["city"]
job = person.pop("job")

# 遍历字典
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(key, value)
```

### 集合（Set）

集合是无序的、不重复的元素集合。

```python
# 创建集合
fruits = {"apple", "banana", "cherry", "apple"}
print(fruits)  # 输出: {'apple', 'banana', 'cherry'}

# 添加元素
fruits.add("orange")

# 删除元素
fruits.remove("banana")
fruits.discard("grape")  # 如果元素不存在，不会报错

# 集合运算
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)  # 并集: {1, 2, 3, 4, 5}
print(a & b)  # 交集: {3}
print(a - b)  # 差集: {1, 2}
print(a ^ b)  # 对称差集: {1, 2, 4, 5}
```

## 文件操作

### 读取文件

```python
# 读取整个文件
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# 逐行读取
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### 写入文件

```python
# 写入（覆盖）
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a new file.")

# 追加
with open("example.txt", "a") as file:
    file.write("\nAppended text.")
```

## 异常处理

```python
try:
    num = int(input("请输入一个数字: "))
    result = 10 / num
    print(result)
except ValueError:
    print("输入的不是有效数字！")
except ZeroDivisionError:
    print("除数不能为零！")
except Exception as e:
    print(f"发生了一个错误: {e}")
else:
    print("没有发生异常。")
finally:
    print("无论是否发生异常，都会执行这里。")
```

## 模块与包

### 导入模块

```python
# 导入整个模块
import math
print(math.pi)
print(math.sqrt(16))

# 导入特定函数
from math import pi, sqrt
print(pi)
print(sqrt(16))

# 给模块起别名
import math as m
print(m.pi)

# 导入所有函数（不推荐）
from math import *
```

### 创建自己的模块

将你的代码保存为 `.py` 文件，就可以作为模块被导入。例如，创建一个 `my_module.py`：

```python
# my_module.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159
```

然后在另一个文件中导入：

```python
import my_module

print(my_module.greet("Bob"))
print(my_module.PI)
```

## 下一步

恭喜你完成了Python基础教程！接下来，你可以学习：

- 面向对象编程（OOP）
- 正则表达式
- 多线程与多进程
- Web开发（Flask/Django）
- 数据科学（NumPy, Pandas, Matplotlib）
- 人工智能（TensorFlow, PyTorch）

## 资源推荐

- [Python官方文档](https://docs.python.org/zh-cn/3/)
- [Python 100天从新手到大师](https://github.com/jackfrued/Python-100-Days)
- [菜鸟教程 - Python](https://www.runoob.com/python/python-tutorial.html)