# Arithmetic on Trees

## Alternate Notations for Arithmetic

There are other ways to write down math. The style which we are used
to is known as [infix notation][1]. Two better known alternatives are
[Reverse Polish notation or postfix][3], and [Polish notation or prefix][2].
The main difference is that infix notation places operators, like +,
-, ×, ÷, are placed between the arguments, and
parentheses are used for grouping. Postfix notation
(<acronym title="Reverse Polish Notation">RPN</acronym>) puts the operators
after the arguments, and prefix
(<acronym title="Polish Notation">PN</acronym>) puts the operators before the
arguments. One interesting difference is that these other two notations
don’t require the use of any parentheses. Below is a table of a few
examples written in all three notations.

<table>
<thead>
<tr>
	<th>Infix</th>
	<th>Postfix</th>
	<th>Prefix</th>
</tr>
</thead>
<tbody>
<tr>
	<td><code>1 + 1</code></td>
	<td><code>1 1 +</code></td>
	<td><code>+ 1 1</code></td>
</tr>
<tr>
	<td><code>1 + 2 Ã— 3</code></td>
	<td><code>1 2 3 Ã— +</code></td>
	<td><code>+ Ã— 2 3 1</code></td>
</tr>
<tr>
	<td><code>(1 + 2) Ã— 3</code></td>
	<td><code>1 2 + 3 Ã—</code></td>
	<td><code>Ã— 3 + 1 2</code></td>
</tr>
<tr>
	<td><code>âˆš(3^2 + 4^2)</code></td>
	<td><code>3 2 ^ 4 2 ^ + âˆš</code></td>
	<td><code>âˆš + ^ 3 2 ^ 4 2</code></td>
</tr>
</tbody>
</table>

There are programming advantages of using these alternate notations,
most deal with entering in expressions and parsing expressions.
Many <acronym title="Hewlett Packard">HP</acronym> calculators use
<acronym title="Reverse Polish Notation">RPN</acronym> input which
allows them to forgo buttons for `(`, `)`, and `=`. The end of an
postfix expression is signaled by a entering an operation. This can be
seen in the postfix examples above in that each ends with an operation.
Parsing postfix and prefix expressions can be accomplished with simpler
programs than those required to parse infix expressions.

With the supremacy of <acronym title="Texas Instraments">TI</acronym>
calculators, which employ infix expression input, it is difficult to
test any benefit from students knowing these alternate notations due to
the cost of teaching either prefix or postfix. And there are benefits to
students who can think in these alternate notations. One is a better
understanding of order of operations. Neither prefix nor postfix
notation require an ordering on operation evaluation. This is because
the ordering is already encoded in the notation. A student who can
consistently convert expressions from a textbook or assignment into one
of these alternate notations will be able to correctly determine the
order of evaluation in the exercise. Second, often the last operation
performed in the evaluation is important to identify. In exercises like
expanding logarithmic expressions, computing derivatives, or even
solving equations, the last operation performed needs to be identified
to determine which rule should be the first to employ. With postfix, the
last operation is the last symbol in the expression, and likewise with
prefix, it is the first symbol. Third, distinguishing between horizontal
and vertical transformations requires an ability akin to identiyfing
which operations happen before the function is applied and which happen
after. All these benefits amount deeper understanding of order of
operations for not just numeric expression, but algebraic as well. For
those that would like a new phrase, perhaps we should call this deeper
concept the “order of evaluation”.

## Tree Notation for Arithmetic

I think that there might be a notation which is easier to read and
understand which provides all the benefits of prefix or postfix. This
notation may be correctly referred to as the abstract syntax tree of the
arithmetic expression. Learning this tree notation makes prefix and
postfix easier to understand, and vesa-versa. Below is an example of
using the tree notation to represent `1+1`.

Next is an example of the computations to show that
`3 / 4 - 2 / 3 = 1 / 12`.

Another learning example is the quadratic formula.

And the following are the steps in the computation of the quadratic
formula for the quadratic `\(x^{2} - 4 x + 3\)`.

One may notice the use of boxes for operators like - and ÷
versus the use of ovals for + and ×. This is due to the fact that
- and ÷ are noncommutative binary operators, whereas + and
× are commutative. So for - and ÷, it must be made
explicit which is the first argument and which is the second. But for

- and ×, it does not matter which argument is first and which is
  second. Also, note in the quadratic formula, the part of the tree
  corresponding to `\(4 a c\)` is just an oval for × with three
  leaves coming off it, one leave for each 4, `\(a\)`, and `\(c\)`. This
  might seem odd because × is not defined to take three arguments
  but only two. The associative property is what allows us to multiply
  together any number of arguments.

Already, we have used the properties of associativity and commutativity
to explain the features of this tree notation. The convenience of these
two properties in our notation push us to use + instead of - and
× instead of ÷.

[1]: https://en.wikipedia.org/wiki/Infix_notation "Infix notation"
[2]: https://en.wikipedia.org/wiki/Polish_notation "Polish notation"
[3]: https://en.wikipedia.org/wiki/Reverse_Polish_notation "Reverse Polish notation"
[4]: https://en.wikipedia.org/wiki/Lisp_%28programming_language%29#Syntax_and_semantics "LISP"
[5]: https://en.wikipedia.org/wiki/Smalltalk#Expressions "Smalltalk"
[6]: https://en.wikipedia.org/wiki/APL_%28programming_language%29 "APL"
