# Calculus Without Limits #

I want to propose the idea that a calculus curriculum can omit limits, at least an applied calculus course like business calculus.

## Why Drop Limits ##

We waive our hands at the technical definition of limits in order to
present a &ldquo;technically&rdquo; complete definition of derivatives.

And if you discuss `\(\epsilon\text{-}\delta\)` definition of limits, then I charge that your student&rsquo;s don&rsquo;t actually understand the definition, but have just memorized how 

### Derivatives Without Limits ###

### Integrals Without Limits ###

### Historial Precedence ###

## Other Alternatives to Limits ##

### Continuity ###

### Infinitesimals ###

## Fixed, Unknown Value ##

This is the initial idea of a variable that we present to students.
Here, a variable has a particular, but unknown value. We can learn the
value of the variable by solving an equation. For example, under this
interpretation, the equation `\(2 x + 7 = 21\)` translates to the
question “What number when doubled and added to 7 equals 21?” By solving
the equation, we discover the value of `\(x\)` to be 7.

Whenever a variable is seen to have a fixed but unknown value, our goal
is to learn the actual value. It is as if the value of the variable,
usually `\(x\)`, is hidden and locked away. We may retrieve the value by
employing algebra. This conception of a variable works well for
equations with exactly one solution, but can be extended to other
situations. For equations with more than one solution, like
`\(x^{2}=4\)`, we cannot deduce the true value of `\(x\)`. But we can
conclude that the correct value is either `\(2\)` or `\(-2\)`.
Similarly, inequalities will not typically yield the one true value but
are only able to restrict the possibilities of what the true value can
be. For example, the solution to `\(x^{2}\leq 4\)` is **exactly** one
of the two values `\(-2\)` and `\(2\)`, rather than being **any**
value.

When dealing with two or more variables, the fixed but unknown value
interpretation of variables is workable but not profitable. Take
`\(y = x + 3\)` as an example. Here, the idea of a graph is
inconceivable. If the correct values are `\((x, y)= (-3, 0)\)`, then
there cannot be another other values of `\(x\)` and `\(y\)`. Instead of
a line on the coordinate plane, the solution here is a single point.
Granted, if we know nothing about the variables beyond the equation, the
set of possible solutions is `\(\left\{ (t, 2 t + 3)\mid
t\in\mathbb{R}\right\}\)`. But according to this view, only one point,
among the possible solutions, is **the** correct solution.

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
algebra, we can ask deep questions like “as `\(x\)` increases, does
`\(y\)` increase, decrease, or remain constant?” or “as
`\(x\)` increases, does the rate of increase of `\(y\)` accelerate,
decelerate, or remain the same?”

Despite being a familiar and fascinating perspective, variables as
changing quantities is rather sophisticated and is probably not the way
to introduce students to elementary algebra.

## Fixed, Arbitrary Value ##

One might instead call these kinds of variables parameters. In the
point-slope form of a line
`\(y = \color{blue}{m} x + \color{blue}{b}\)`, the symbols
‘`\(y\)`’ and ‘`\(x\)`’ are varying quantities; and
‘`\(\color{blue}{m}\)`’ and ‘`\(\color{blue}{b}\)`’ are parameters. They
aren’t values which are thought to change with `\(x\)` and `\(y\)`.
While they can change, these parameters are seen as having values
independent of the other variables. Like the fixed, unknown variables,
parameters are seen as placeholders, which are to be replaced by their
value in specific contexts.

## Indeterminate Value ##

Indeterminate variables appear in more theoretical mathematics, when
variables don’t have to represent for anything. For most people,
equality between polynomials is where this idea can be seen. We can say
that the two polynomials `\(p(x) = 2 + 5 x\)` and `\(q(x) = 5 + 2 x\)`
are equal when `\(x = 1\)`. But we also say that `\(p(x)\)` and
`\(q(x)\)` are **different** polynomials. In one sense, we have that
`\(p(x)=q(x)\)` if and only if `\(x = 1\)`; and in the other sense, we
have that `\(p(x)\neq q(x)\)`. The difference lies in the role of
`\(x\)` (and [the role of ‘=’](http://cousinomath.website/)). If the
variable is a fixed or varying quantity, then the equation
`\(p(x)=q(x)\)` is a prompt to solve for `\(x\)` in order to find what
value(s) of `\(x\)` makes this equation true. If the variable is
indeterminate, then it doesn’t represent a number. So `\(p(x)=q(x)\)` is
a statement about the algebraic equivalence of the two polynomials.
Equality holds in this case if we can algebraic manipulate `\(p(x)\)` to
look exactly the same as `\(q(x)\)`, or vice-versa. But if there are
essential algebraic differences, which is the case for
`\(p(x) = 2 + 5 x\)` and `\(q(x) = 5 + 2 x\)`, then we have that
`\(p(x)\neq q(x)\)`. For polynomials, two polynomials are equal if and
only if their coefficients, in standard form, are equal.

In other words, `\(p(x)=q(x)\)` asks “are these curves identical?” when
`\(x\)` is indeterminate, and “do these curves intersect?” otherwise.
There are more, deeper examples such as polynomials in modular
arithmetic, formal power series, and generators for free objects. But it
is sufficient to show that this meaning gives us a mathematical way of
saying that two functions can intersect, and yet still be different
functions, such expressive power is justification enough for many.

## Conclusion ##

Can you think of another role or that there should be fewer roles?
Please let me know what you think in the comments below.