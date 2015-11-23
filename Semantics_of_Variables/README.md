# Semantics of Variables #

I was talking to
[@misscalcul8](https://twitter.com/misscalcul8/status/666474645906944001)
about representations of linear inequalities. She viewed the solutions
of the inequalities as regions in the coordinate plane. She was
intrigued by representing the solutions as intervals on the number line.
This reminded me of the various semantic roles that variables play.

## Fixed, Unknown Value ##

This is the initial idea of a variable that we present to students.
Here, a variable has a particular, but unknown value. We can learn the
value of the variable by solving an equation. For example, under this
interpretation, the equation `\(2 x + 7 = 21\)` translates to the
question “What number, call it `\(x\)`, when doubled and added to
7 equals 21?” By solving the equation, we solve the mystery to
discover the value of `\(x\)` to be 7.

Whenever a variable is seen to have a fixed but unknown value, our goal
is to learn the actual value. It is as if the value of the variable,
usually `\(x\)`, is hidden and locked away. We may uncover and retrieve
the value by employing algebra. This conception of a variable works well
for equations with exactly one solution, but can be extended to other
situations. For equations with more than one solution, like
`\(x^{2}=4\)`, we cannot deduce the true value of `\(x\)`. But we can
conclude that the correct value is either `\(2\)` or `\(-2\)`.
Similarly, inequalities will not typically yield the one true value but
are only able to restrict the possibilities.

When dealing with two or more variables, the fixed but unknown value
interpretation of variables is workable but not profitable. Take
`\(y = x + 3\)` as an example. Here, the idea of a graph is
inconceivable. If the correct values are `\((x, y)= (-3, 0)\)`, then
there cannot be another other values of `\(x\)` and `\(y\)`. Instead of
a line on the coordinate plane, the solution here is a single point.
Granted, if we know nothing about the variables beyond the equation, the
set of possible solutions is `\(\left\{ (t, 2 t + 3)\mid
t\in\mathbb{R}\right\}\)`, but according to this view, only one point is
the correct solution.

In summary, we start teaching algebra by introducing it to students as
“solving for the unknown”. By doing so, we instill in them
the view that a variable is merely a placeholder for a fixed and, as
yet, unknown value. This is a reasonable mental model of algebra for
those new to the subject. However, this model does not last very long.
We quickly want to move to the idea of variables as jointly varying
quantities when tackling relations with more than one variable,
and in particular functions.

## Varying Value ##

Anyone familiar with algebra is probably most familiar with the idea
that the value of a variable may vary. A fixed variable is
“faithful” to its value, whereas a changing variable cannot
be forced “to commit” to one value or another. Seeing a
variable as being free to change subsumes the fixed, unknown
interpretation. Solving equations or relations now can be understood as
saying “If this original equation `\(x^{2}=4\)` is true, then it
must be the case that either `\(x=2\)` or `\(x=-2\)`.”

The richness of variables as varying quantities is seen with two or more
variables. Graphs on the coordinate plane demand that the input variable
be permitted to take on many different values, one for each point on the
graph.  Despite students’ struggles, combining graphical and
algebraic perspectives reveals a treasure of insight. Even in college
algebra, we can ask deep questions like “as `\(x\)` increases does
`\(y\)` increase, decrease, or remain constant?” or “as
`\(x\)` increases, does the rate of increase of `\(y\)` accelerate,
decelerate, or remain the same?”

Despite being a familiar and fascinating perspective, variables as
changing quantities is rather sophisticated and is probably not the way
to introduce students to algebra.

## Fixed, Arbitrary Value ##

One might instead call these kinds of variables parameters. In the
point-slope form of a line
`\(y = \color{blue}{m} x + \color{blue}{b}\)`, the symbols
‘`\(y\)`’ and ‘`\(x\)`’ are varying quantity
variables; and ‘`\(\color{blue}{m}\)`’ and ‘`\(\color{blue}{b}\)`’ are
parameters. They aren’t values which are thought to change with `\(x\)`
and `\(y\)`. While they can change, these parameters are seen as having
values independent of the other variables. Like the fixed, unknown
variables, parameters are seen as placeholders, which are to be replaced
by their value in specific contexts.

## indeterminate Value ##

indeterminate variables appear in more theoretical mathematics, when
variables don’t have to represent for anything. For most people,
equality between polynomials is where this idea can be seen. We can say
that the two polynomials `\(p(x) = 2 + 5 x\)` and `\(q(x) = 5 + 2 x\)`
are equal when `\(x = 1\)`. But we also say that `\(p(x)\)` and
`\(q(x)\)` are **different** polynomials. In one sense, we have that
`\(p(x)=q(x)\)` if and only if `\(x = 1\)`; and in the other sense, we
have that `\(p(x)\neq q(x)\)`. The difference lies in the role of
`\(x\)`. If the variable is a fixed or varying quantity, then the
equation `\(p(x)=q(x)\)` is a prompt to solve for `\(x\)`, to find what
value(s) of `\(x\)` makes this equation true. If the variable is
indeterminate and doesn't represent a number, the `\(p(x)=q(x)\)` is a
statement about the algebraic equivalence of the two polynomials.
Equality holds if we can algebraic manipulate `\(p(x)\)` to look exactly
the same as `\(q(x)\)`. But if there are essential algebraic
differences, which is the case for `\(p(x) = 2 + 5 x\)` and
`\(q(x) = 5 + 2 x\)`, then we have that `\(p(x)\neq q(x)\)`. For
polynomials, two polynomials are equal if and only if their
coefficients, in standard form, are equal.

In other words, `\(p(x)=q(x)\)` asks “are these curves identical?” when
`\(x\)` is indeterminate, and `\(p(x)=q(x)\)` asks “do these curves
intersect?” otherwise. There are more, deeper examples such as
polynomials in modular arithmetic, formal power series, and generators
for free objects. But it is sufficient to show that this meaning gives
us a mathematical way of saying that two functions can intersect, and
yet still be different functions, such expressive power is justification
enough for many.