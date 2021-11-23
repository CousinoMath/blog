## Into the Weeds

The intended audience for this post is primary and secondary school
teachers, and not their students. There is no “Math
Symbols” class that universities offer. This knowledge is
acquired incidentally over time spent in many math courses. This post
tries to distill some of that information into a short essay. Teachers
may find this helpful in preparing materials or presenting concepts to
their students. But I do not expect teachers to be transforming this
post into a lesson.

Thanks to
[misscalcul8](http://misscalculate.blogspot.com/)@blogspot.com for
inspiring this post, which is a response to her post
[Math Symbols Test](http://misscalculate.blogspot.com/2015/08/math-symbols-test.html)
that contained a definition sheet for math symbols and a test as well.

## Arities—Unary and Binary

Every mathematical symbol can be said to have an arity. The _arity_
is simply the number of arguments, or inputs, that the symbol takes.
For example, consider a generic function `\(f(x)\)`. This newly invoked
symbol `\(f\)` is a function, and its airty is 1. Because the function
takes exactly 1 argument.

### Unary

A symbol which has an arity of 1, i.e. takes only one argument, is said
to be a _unary_ symbol. In the previous example, the function symbol
`\(f\)` is unary. But there are more standard mathematical symbols
which are also unary. Another example is `\(\sqrt{\cdot }\)`, the
square root as denoted by the radical symbol. A square root on
it’s own doesn’t make sense, `\(\sqrt{\; }\)`. So a square
root has to take at least one argument. And though the argument to
square root may be complicated, as in `\(\sqrt{b^{2} - 4 a c}\)`, there
is still only one argument.

### Binary

A symbol which has an arity of 2, i.e. takes exactly two arguments, is
said to be a _binary_ symbol. The usual arithmetic symbols are
binary, such as `\(\cdot +\cdot\)`, `\(\cdot -\cdot\)`,
`\(\cdot = \cdot\)`, and `\(\cdot\ge\cdot\)`. If you wanted to do so,
you could call the symbol `\(\overleftrightarrow{\cdot\,\cdot}\)` a
binary symbol too. This symbol, with two points like `\(A\)` and
`\(B\)` as arguments references a line, namely
`\(\overleftrightarrow{AB}\)`. But this may be a bit too strange, and
so may not be a good topic to present to your students. We'll continue
to discuss this symbol later in the post.

## Operators, Functions, and Relations

The airty of symbols is one way to group them. Another is their
functional role. We will discuss the roles known as operators,
functions, and relations. Functional roles are perhaps the easiest to
address, because this role is that of a function. In the expression
“`\(f(x)\)`”, the symbol `\(f\)` is a functional one. When
the symbol is paired with an input like 5, the resulting expression,
`\(f(5)\)`, represents the output.

### Operators

Operators are just functions but written in a funny way. If the
standard way to write mathematical language was in
[Polish notation](https://en.wikipedia.org/wiki/Polish_notation), then
the expression “`\(3 + 5\)`” would be written as
“`\(+\: 3\: 5\)`”. Knowing that `\(+\)` is a binary symbol,
it is easy to see how this expression could be written as
“`\(+(3,5)\)`”. Further, the symbol `\(+\)` itself is
arbitrary. History could have easily have left us using the symbol
`\(f\)` for addition instead. In such an alternate universe, our
expression would now be “`\(f(3, 5)\)`”, an all too
familiar use of a function. We can transform all operators into
functions, if we are comfortable deviating from our abitrary notation
conventions. `\(7!\)` becomes `\(!(7)\)`; `\(\sqrt{7}\)` becomes
`\(\sqrt{\:}(7)\)`; and `\(|x - 2|\)` becomes `\(||(x - 2)\)`.

The basic idea is that, like functions, operators take mathematical
objects as inputs and return a mathematical object as an output. We can
even have different objects as inputs and outputs. Consider the
notation `\(\overleftrightarrow{AB}\)` denoting a line passing
through the points `\(A\)` and `\(B\)`. This is a binary operator which
takes two points as inputs, in this case `\(A\)` and `\(B\)`. And when
combined with its inputs, it produces a line as the output, represented as
`\(\overleftrightarrow{AB}\)`. This may be a bit of stretch for
students. So just call `\(\overleftrightarrow{AB}\)` an
“entity” representing a particular line.

### Relations

Relations are similar to operators, and therefore functions, but with a
key difference. Relations, like `\(=\)`, don�t output anything.
In practice, relations are either true or false statements. For
example, `\(5 = 5\)` is a true statement, and `\(3 > 5\)` is a false
statement. “Equality”, “inequalities”,
“parallel to” (`\(\parallel\)`), “not parallel
to” (`\(\nparallel\)`), and “is an element of”
(`\(\in\)`) are all relations. In fact, they are all binary relations.

The only other note about relations that I’d like to make is
that false statements aren’t wrong. In the English language, the
sentence “Unicorns were first discovered in this century”
is grammatically correct, but it is false. Similarly,
“`\(3=5\)`” is grammaticaly correct in our mathematical
language, but it is also false. If a mathematical statement is
grammmatically correct, it�s called a well-formed formula,
abbreviated as <abbr title="well-formed formula">WFF</abbr>
(pronounced �woof�).

## Table of Symbols

### Algebra

#### Binary Relations

|        Symbol         | Meaning                         |
| :-------------------: | :------------------------------ |
|   \(\cdot =\cdot\)    | Equal to                        |
|  \(\cdot &lt;\cdot\)  | Less than (and not equal to)    |
|  \(\cdot \le\cdot\)   | Less than or equal to           |
|  \(\cdot \ge\cdot\)   | Greater than or equal to        |
|  \(\cdot &gt;\cdot\)  | Greater than (and not equal to) |
|  \(\cdot\neq\cdot\)   | Not equal to                    |
| \(\cdot\approx\cdot\) | Approximately equal to          |

#### Unary Operators

|       Symbol        | Meaning                                                          |
| :-----------------: | :--------------------------------------------------------------- |
|    \(\pm\cdot\)     | Plus or minus (positive or negative)                             |
|  \(\sqrt{\cdot}\)   | Square root                                                      |
| \(\sqrt[3]{\cdot}\) | Cube root                                                        |
|     \(\cdot !\)     | Factorial                                                        |
|    \(f(\cdot)\)     | Function \(f\) of variable \(\cdot\) (short: \(f\) of \(\cdot\)) |
|   \(\Delta\cdot\)   | Change in variable \(\cdot\)                                     |
|   \(\Sigma\cdot\)   | Summation (adding up a bunch of stuff)                           |

#### Constants

|   Symbol   | Meaning                                                             |
| :--------: | :------------------------------------------------------------------ |
| \(\infty\) | Infinity                                                            |
|  \(\pi\)   | Pi, constant ratio between circumference and diameter of any circle |

### Geometry

#### Binary Relations

|          Symbol          | Meaning          |
| :----------------------: | :--------------- |
|   \(\cdot\cong\cdot\)    | Congruent to     |
|    \(\cdot\sim\cdot\)    | Similar to       |
|   \(\cdot\perp\cdot\)    | Perpendicular to |
| \(\cdot\parallel\cdot\)  | Parallel to      |
| \(\cdot\nparallel\cdot\) | Not parallel to  |

#### Notations

|           Symbol            | Meaning                                                     |
| :-------------------------: | :---------------------------------------------------------- |
|         \(\angle\)          | Angle, measurement is not important                         |
|     \(\measuredangle\)      | Measured angle                                              |
| \(\overleftrightarrow{AB}\) | Line through the points \(A\) and \(B\)                     |
|   \(\overrightarrow{AB}\)   | Ray (half-line) starting at point \(A\) through point \(B\) |
|      \(\overline{AB}\)      | Segment connecting points \(A\) and \(B\)                   |

### Sets

#### Binary Relations

| Symbol | Meaning |
| :---: | :--- |
| \(\cdot\in\cdot\) | Is a member of the set (short: in) |

#### Binary Operators

| Symbol | Meaning |
| :--: | :--- |
| \(\cdot\cap\cdot\) | Intersection of sets |
| \(\cdot\cup\cdot\) | Union of sets |

#### Notations

| Symbol | Meaning |
| :---: | :--- |
| \(\{5,2,7,11\}\) | Set consisting only of elements 2, 5, 7, and 11 |

#### Constants

| Symbol | Meaning |
| :---: | :--- |
| \(\emptyset\) | Empty set, or set with zero elements |
| \(\mathbb{N}\) | Set of natural numbers \(\{0, 1, 2, 3, \dots\}\) |
| \(\mathbb{Z}\) | Set of integers \(\{0, 1, -1, 2, -2, 3, -3, \dots\}\) |
| \(\mathbb{Q}\) | Set of rational numbers (fractions) |
| \(\mathbb{R}\) | Set of real numbers: fractional numbers and numbers like \(\pi\), \(\sqrt{2}\) |

## Feedback

If you have any comments, questions, or other mathematical symbols that
you’d like to have analyzed, just put it in a comment down below.
