## Into the Weeds ##

The intended audience for this post is primary and secondary school
teachers, and not their students. There is no &ldquo;Math
Symbols&rdquo; class that universities offer. This knowledge is
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

## Arities&mdash;Unary and Binary ##

Every mathematical symbol can be said to have an arity. The **arity**
is simply the number of arguments, or inputs, that the symbol takes.
For example, consider a generic function `\(f(x)\)`. This newly invoked
symbol `\(f\)` is a function, and its airty is 1. Because the function
takes exactly 1 argument.

### Unary ###

A symbol which has an arity of 1, i.e. takes only one argument, is said
to be a **unary** symbol. In the previous example, the function symbol
`\(f\)` is unary. But there are more standard mathematical symbols
which are also unary. Another example is `\(\sqrt{\cdot }\)`, the
square root as denoted by the radical symbol. A square root on
it&rsquo;s own doesn&rsquo;t make sense, `\(\sqrt{\; }\)`. So a square
root has to take at least one argument. And though the argument to
square root may be complicated, as in `\(\sqrt{b^{2} - 4 a c}\)`, there
is still only one argument.

### Binary ###

A symbol which has an arity of 2, i.e. takes exactly two arguments, is
said to be a **binary** symbol. The usual arithmetic symbols are
binary, such as `\(\cdot +\cdot\)`, `\(\cdot -\cdot\)`,
`\(\cdot = \cdot\)`, and `\(\cdot\ge\cdot\)`. If you wanted to do so,
you could call the symbol `\(\overleftrightarrow{\cdot\,\cdot}\)` a
binary symbol too. This symbol, with two points like `\(A\)` and
`\(B\)` as arguments references a line, namely
`\(\overleftrightarrow{AB}\)`. But this may be a bit too strange, and
so may not be a good topic to present to your students. We'll continue
to discuss this symbol later in the post.

## Operators, Functions, and Relations ##

The airty of symbols is one way to group them. Another is their
functional role. We will discuss the roles known as operators,
functions, and relations. Functional roles are perhaps the easiest to
address, because this role is that of a function. In the expression
&ldquo;`\(f(x)\)`&rdquo;, the symbol `\(f\)` is a functional one. When
the symbol is paired with an input like 5, the resulting expression,
`\(f(5)\)`, represents the output.

### Operators ###

Operators are just functions but written in a funny way. If the
standard way to write mathematical language was in
[Polish notation](https://en.wikipedia.org/wiki/Polish_notation), then
the expression &ldquo;`\(3 + 5\)`&rdquo; would be written as
&ldquo;`\(+\: 3\: 5\)`&rdquo;. Knowing that `\(+\)` is a binary symbol,
it is easy to see how this expression could be written as
&ldquo;`\(+(3,5)\)`&rdquo;. Further, the symbol `\(+\)` itself is
arbitrary. History could have easily have left us using the symbol
`\(f\)` for addition instead. In such an alternate universe, our
expression would now be &ldquo;`\(f(3, 5)\)`&rdquo;, an all too
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
&ldquo;entity&rdquo; representing a particular line.

### Relations ###

Relations are similar to operators, and therefore functions, but with a
key difference. Relations, like `\(=\)`, don&rsquo;t output anything.
In practice, relations are either true or false statements. For
example, `\(5 = 5\)` is a true statement, and `\(3 > 5\)` is a false
statement. &ldquo;Equality&rdquo;, &ldquo;inequalities&rdquo;,
&ldquo;parallel to&rdquo; (`\(\parallel\)`), &ldquo;not parallel
to&rdquo; (`\(\nparallel\)`), and &ldquo;is an element of&rdquo;
(`\(\in\)`) are all relations. In fact, they are all binary relations.

The only other note about relations that I&rsquo;d like to make is
that false statements aren&rsquo;t wrong. In the English language, the
sentence &ldquo;Unicorns were first discovered in this century&rdquo;
is grammatically correct, but it is false. Similarly,
&ldquo;`\(3=5\)`&rdquo; is grammaticaly correct in our mathematical
language, but it is also false. If a mathematical statement is
grammmatically correct, it&rsquo;s called a well-formed formula,
abbreviated as <abbr title="well-formed formula">WFF</abbr>
(pronounced &ldquo;woof&rdquo;).

## Table of Symbols ##

### Algebra ###

#### Binary Relations ####

<style>
	table, td, th {
		border: 1px solid black;
	}
	table {
		border-collapse: collapse;
	}
	.centered {
		text-align: center;
	}
	td, th {
		padding: 0 0.5em;
	}
	thead {
		border-bottom-style: double;
	}
</style>
	
<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\cdot =\cdot\)</td><td>Equal to</td></tr>
	<tr><td class="centered">\(\cdot &lt;\cdot\)</td><td>Less than (and not equal to)</td></tr>
	<tr><td class="centered">\(\cdot \le\cdot\)</td><td>Less than or equal to</td></tr>
	<tr><td class="centered">\(\cdot \ge\cdot\)</td><td>Greater than or equal to</td></tr>
	<tr><td class="centered">\(\cdot &gt;\cdot\)</td><td>Greater than (and not equal to)</td></tr>
	<tr><td class="centered">\(\cdot\neq\cdot\)</td><td>Not equal to</td></tr>
	<tr><td class="centered">\(\cdot\approx\cdot\)</td><td>Approximately equal to</td></tr>
	</tbody>
</table>

#### Unary Operators ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\pm\cdot\)</td><td>Plus or minus (positive or negative)</td></tr>
	<tr><td class="centered">\(\sqrt{\cdot}\)</td><td>Square root</td></tr>
	<tr><td class="centered">\(\sqrt[3]{\cdot}\)</td><td>Cube root</td></tr>
	<tr><td class="centered">\(\cdot !\)</td><td>Factorial</td></tr>
	<tr><td class="centered">\(f(\cdot)\)</td><td>Function \(f\) of variable \(\cdot\) (short: \(f\) of \(\cdot\))</td></tr>
	<tr><td class="centered">\(\Delta\cdot\)</td><td>Change in variable \(\cdot\)</td></tr>
	<tr><td class="centered">\(\Sigma\cdot\)</td><td>Summation (adding up a bunch of stuff)</td></tr>
	</tbody>
</table>

#### Constants ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\infty\)`</td><td>Infinity</td></tr>
	<tr><td class="centered">\(\pi\)</td><td>Pi, constant ratio between circumference and diameter of any circle</td></tr>
	<tr><td class="centered">\(\theta\)</td><td>Theta, usually represents measure of an angle</td></tr>	
	</tbody>
</table>

### Geometry ###

#### Binary Relations ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\cdot\cong\cdot\)</td><td>Congruent to</td></tr>
	<tr><td class="centered">\(\cdot\sim\cdot\)</td><td>Similar to</td></tr>
	<tr><td class="centered">\(\cdot\perp\cdot\)</td><td>Perpendicular to</td></tr>
	<tr><td class="centered">\(\cdot\parallel\cdot\)</td><td>Parallel to</td></tr>
	<tr><td class="centered">\(\cdot\nparallel\cdot\)</td><td>Not parallel to</td></tr>
	</tbody>
</table>

#### Notations ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\angle\)</td><td>Angle, measurement is not important</td></tr>	
	<tr><td class="centered">\(\measuredangle\)</td><td>Measured angle</td></tr>
	<tr><td class="centered">\(\overleftrightarrow{AB}\)</td><td>Line through the points \(A\) and \(B\)</td></tr>
	<tr><td class="centered">\(\overrightarrow{AB}\)</td><td>Ray (half-line) starting at point \(A\) through point \(B\)</td></tr>
	<tr><td class="centered">\(\overline{AB}\)</td><td>Segment connecting points \(A\) and \(B\)</td></tr>
	</tbody>
</table>

### Sets ###

#### Binary Relations ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\cdot\in\cdot\)</td><td>Is a member of the set (short: in)</td></tr>
	</tbody>
</table>

#### Binary Operators ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\cdot\cap\cdot\)</td><td>Intersection of sets</td></tr>
	<tr><td class="centered">\(\cdot\cup\cdot\)</td><td>Union of sets</td></tr>
	</tbody>
</table>

#### Notations ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\{5,2,7,11\}\)</td><td>Set consisting of elements 2, 5, 7, and 11</td></tr>
	</tbody>
</table>

#### Constants ####

<table>
	<thead>
	<tr><th>Symbol</th><th>Meaning</th></tr>
	</thead>
	<tbody>
	<tr><td class="centered">\(\emptyset\)</td><td>Empty set, or set with zero elements</td></tr>
	<tr><td class="centered">\(\mathbb{N}\)</td><td>Set of natural numbers \(\{0, 1, 2, 3, \dots\}\)</td></tr>
	<tr><td class="centered">\(\mathbb{Z}\)</td><td>Set of integers \(\{0, 1, -1, 2, -2, 3, -3, \dots\}\)</td></tr>
	<tr><td class="centered">\(\mathbb{Q}\)</td>
	   <td>Set of rational numbers (fractions)
	      \(\{0, 1, -1, \frac{1}{2}, 2, -2, -\frac{1}{2}, \frac{1}{3}, \dots\}\)</td></tr>
	<tr><td class="centered">\(\mathbb{R}\)</td>
	   <td>Set of real numbers, fractional and numbers like \(\pi\), \(\sqrt{2}\)</td></tr>
	   </tbody>
</table>

## Feedback ##

If you have any comments, questions, or other mathematical symbols that
you'd like to have analyzed, just put it in a comment down below.