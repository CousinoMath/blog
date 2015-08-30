# Semantics of Equals #

## Motivation ##

The simple question, &ldquo;what does &lsquo;=&rsquo; mean&rdquo;, has
a complex answer. In the two statements &ldquo;`\(1 + 1 = 2\)`&rdquo;
and &ldquo;`\(3 x + 7 = 28\)`&rdquo;, consider what &lsquo;=&rsquo;
means to a student and what they are prompted to do with each
statement. Granted, in both statements, &lsquo;=&rsquo; means typical
mathematical equality&mdash;the quantity on the left side has the same
value as the quantity on the right side. However, a student presented
with these two statements, and no other context, might say that nothing
needs to be done to the first statement, and the second one
should be solved for `\(x\)`. So the first statement would prompt only
agreement and no action, whereas the second would prompt the student
to employ algebra.

## Semantics ##

So far, I have identified four distinct uses for &lsquo;=&rsquo;.

### Transition Marker ###

This role of &lsquo;=&rsquo; is that of a transition from an
arithmetic computation to its result, or at least the next step. For
example, &ldquo;`\(1+1=2\)`&rdquo; could easily be written as
&ldquo;`\(1+1\rightarrow 2\)`&rdquo;. My guess is that at first glance,
most students would say these two statements mean the same thing. If
asked further questions, students may note that the first means both
left and right sides are equal, but the second conveys that the left
side becomes the right.

### Equation ###

In algebra and pre-algebra, students encounter &lsquo;=&rsquo; in a
context where naive arithemtic computation fails. This context has
&lsquo;=&rsquo; near phrases like &ldquo;solve for&rdquo; and
&ldquo;find the value of&rdquo;. One such example is
&ldquo;Solve for `\(x\)` in `\(x^{2} - 3 x + 2 = 0\)`&rdquo;. Once
again, students are prompted to perform another set of computations,
which we will term algebraic computations. These algebraic computations
finish once we reach a statement of the form
&ldquo;`\(x=\cdot\)`&rdquo;. This last statement in our computation is
the answer.

The trouble with the equation and transition roles is that they are
easy to conflate. Doing arithmetic computations under a transitional
&lsquo;=&rsquo;, the result is a number. Similarly, students can see
the result of algebraic computations under an equation &lsquo;=&rsquo;
as a number too. The extra `\(x=\cdot\)` is just dropped, and the
number is the answer, like with the transitional case. So students can
see both types of &lsquo;=&rsquo; as prompting computations to get a
numeric answer. The problem with this view point is that with an
equational &lsquo;=&rsquo;, the computational steps involve logical
implications. For example, consider &ldquo;`\(3 x + 7 = 28\)`&rdquo;.
The translation into English of the statement is the following,
&ldquo;Is there a value for `\(x\)` which makes `\(3 x + 7\)` equal to
`\(28\)` in value?&rdquo;. After subtracting `\(7\)` from both sides,
we get the mathematical statement &ldquo;`\(3 x = 21\)`&rdquo;; this
entire step translates to &ldquo;There is a value for `\(x\)` which
makes `\(3 x + 7 = 28\)` if and only if there is a value for `\(x\)`
will make `\(3 x = 21\)`&rdquo;. Finally, divide both sides by `\(3\)`
to get &ldquo;`\(x = 7\)`&rdquo;, &ldquo;The value for `\(x\)`
satisfies the equation `\(3 x + 7 = 28\)` if and only if the value for
`\(x\)` is `\(7\)`&rdquo;. Students conflating transition and equation
roles of &lsquo;=&rsquo; means that students are losing out on
algebraic reasoning.

### Definition Marker ###

When students see functions, they see &lsquo;=&rsquo; used in
definitions, such as the statement
&ldquo;`\(f(x)=x^{3} - 3 x + 1\)`&rdquo;. The student should not be
prompted to perform any computation, as with the transition marker and
equation roles. Rather, the correct prompt is to recognize that
wherever the student sees `\(f(x)\)` they should mentally substitute in
`\(x^{3} - 3 x + 1\)`.

In my classes, I will write
&lsquo;`\(\unicode[STIXGeneral]{x2254}\)`&rsquo; instead of
&lsquo;=&rsquo; in definitions. So rather than write
&ldquo;`\(f(x) = x^{3} - 3 x + 1\)`&rdquo;, I would write
&ldquo;`\(f(x)\unicode[STIXGeneral]{x2254} x^{3} - 3 x + 1\)`&rdquo;. I
do this in order to help students to distinguish this role as a
definition marker by making the distinction syntactic as well as a
contextual. This ambiguity of &lsquo;=&rsquo; can quickly be seen with
the statement &ldquo;`\(f(x)=0\)`&rdquo;. This could either be a
definition, defining the function `\(f(x)\)` to be the constant value
`\(0\)`, or it could be equating a function `\(f(x)\)` to the value
`\(0\)`.

### Identity ###

Technically, the statement &ldquo;`\(1+1=2\)`&rdquo; is an identity.
But I suspect most students do not recognize this role until they reach
trigonometry and see &ldquo;`\(\cos^{2} x + \sin^{2} x = 1\)`&rdquo;.
Unlike its other roles, this role for &lsquo;=&rsquo; is bidirectional.
In other words, an identity can be read left to right or right to left.
Like with the definition marker role, an identity should not prompt any
action from the student. Instead, an identity is to be memorized and
used for substitutions.

In my classes, I write &lsquo;`\(\equiv\)`&rsquo; in place of
&lsquo;=&rsquo; in identities. So I would write
&ldquo;`\(\cos^{2}(x) + \sin^{2}(x)\equiv 1\)`&rdquo; rather than
&ldquo;`\(\cos^{2}(x) + \sin^{2}(x) = 1\)`&rdquo;.

## Lesson for Teachers ##

For those of you who are instructors, here is my advice to you about
using &lsquo;=&rsquo;: make these different roles clear to your
students. Whether you stick with the symbol &lsquo;=&rsquo; or adopt
your own symbol, keep reminding your students about the meaning and
role of the particular equality symbol, and remark on how this role is
similar and how this role is different from the others used in class.

## Feedback ##

I realize that there is one more role of equality, that of synactic
equality. Syntactically, `\(1 + 1\neq 2\)`, because the two sides are
not the same unless computations are performed. This type of equality
is useful in logic and related areas, when the mathematical objects
being studied are mathematical formulas themselves. But once a student
reaches this level, I assume that they can deal with the ambiguous
nature of &lsquo;=&rsquo;. So I felt safe leaving it out of this
taxonomy.

If I missed a role or have an unnecessary role for &lsquo;=&rsquo;, let
me know in the comments. If you use other symbols as I do with
&lsquo;`\(\unicode{x2254}\)`&rsquo; and &lsquo;`\(\equiv\)`&rsquo;, put
them down in the comments as well.