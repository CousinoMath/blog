# Semantics of Equals

## Motivation

The simple question, “what does ‘=’ mean”, has
a complex answer. In the two statements “`\(1 + 1 = 2\)`”
and “`\(3 x + 7 = 28\)`”, consider what ‘=’
means to a student and what they are prompted to do with each
statement. Granted, in both statements, ‘=’ means typical
mathematical equality—the quantity on the left side has the same
value as the quantity on the right side. However, a student presented
with these two statements, and no other context, might say that nothing
needs to be done to the first statement, and the second one
should be solved for `\(x\)`. So the first statement would prompt only
agreement and no action, whereas the second would prompt the student
to employ algebra.

## Semantics

So far, I have identified four distinct uses for ‘=’.

### Transition Marker

This role of ‘=’ is that of a transition from an
arithmetic computation to its result, or at least the next step. For
example, “`\(1+1=2\)`” could easily be written as
“`\(1+1\rightarrow 2\)`”. My guess is that at first glance,
most students would say these two statements mean the same thing. If
asked further questions, students may note that the first means both
left and right sides are equal, but the second conveys that the left
side becomes the right.

### Equation

In algebra and pre-algebra, students encounter ‘=’ in a
context where naive arithmetic computation fails. This context has
‘=’ near phrases like “solve for” and
“find the value of”. One such example is
“Solve for `\(x\)` in `\(x^{2} - 3 x + 2 = 0\)`”. Once
again, students are prompted to perform another set of computations,
which we will term algebraic computations. These algebraic computations
finish once we reach a statement of the form
“`\(x=\cdot\)`”. This last statement in our computation is
the answer.

The trouble with the equation and transition roles is that they are
easy to conflate. Doing arithmetic computations under a transitional
‘=’, the result is a number. Similarly, students can see
the result of algebraic computations under an equation ‘=’
as a number too. The extra `\(x=\cdot\)` is just dropped, and the
number is the answer, like with the transitional case. So students can
see both types of ‘=’ as prompting computations to get a
numeric answer. The problem with this view point is that with an
equational ‘=’, the computational steps involve logical
implications. For example, consider “`\(3 x + 7 = 28\)`”.
The translation into English of the statement is the following,
“Is there a value for `\(x\)` which makes `\(3 x + 7\)` equal to
`\(28\)` in value?”. After subtracting `\(7\)` from both sides,
we get the mathematical statement “`\(3 x = 21\)`”; this
entire step translates to “There is a value for `\(x\)` which
makes `\(3 x + 7 = 28\)` if and only if there is a value for `\(x\)`
will make `\(3 x = 21\)`”. Finally, divide both sides by `\(3\)`
to get “`\(x = 7\)`”, “The value for `\(x\)`
satisfies the equation `\(3 x + 7 = 28\)` if and only if the value for
`\(x\)` is `\(7\)`”. Students conflating transition and equation
roles of ‘=’ means that students are losing out on
algebraic reasoning.

### Definition Marker

When students see functions, they see ‘=’ used in
definitions, such as the statement
“`\(f(x)=x^{3} - 3 x + 1\)`”. The student should not be
prompted to perform any computation, as with the transition marker and
equation roles. Rather, the correct prompt is to recognize that
wherever the student sees `\(f(x)\)` they should mentally substitute in
`\(x^{3} - 3 x + 1\)`.

In my classes, I will write
“`\(\unicode[STIXGeneral]{x2254}\)`” instead of
‘=’ in definitions. So rather than write
“`\(f(x) = x^{3} - 3 x + 1\)`”, I would write
“`\(f(x)\unicode[STIXGeneral]{x2254} x^{3} - 3 x + 1\)`”. I
do this in order to help students to distinguish this role as a
definition marker by making the distinction syntactic as well as a
contextual. This ambiguity of ‘=’ can quickly be seen with
the statement “`\(f(x)=0\)`”. This could either be a
definition, defining the function `\(f(x)\)` to be the constant value
`\(0\)`, or it could be equating a function `\(f(x)\)` to the value
`\(0\)`.

### Identity

Technically, the statement “`\(1+1=2\)`” is an identity.
But I suspect most students do not recognize this role until they reach
trigonometry and see “`\(\cos^{2} x + \sin^{2} x = 1\)`”.
Unlike its other roles, this role for ‘=’ is bidirectional.
In other words, an identity can be read left to right or right to left.
Like with the definition marker role, an identity should not prompt any
action from the student. Instead, an identity is to be memorized and
used for substitutions.

In my classes, I write “`\(\equiv\)`” in place of
‘=’ in identities. So I would write
“`\(\cos^{2}(x) + \sin^{2}(x)\equiv 1\)`” rather than
“`\(\cos^{2}(x) + \sin^{2}(x) = 1\)`”.

## Lesson for Teachers

For those of you who are instructors, here is my advice to you about
using ‘=’: make these different roles clear to your
students. Whether you stick with the symbol ‘=’ or adopt
your own symbol, keep reminding your students about the meaning and
role of the particular equality symbol, and remark on how this role is
similar and how this role is different from the others used in class.

## Feedback

I realize that there is one more role of equality, that of syntactic
equality. Syntactically, `\(1 + 1\neq 2\)`, because the two sides are
not the same unless computations are performed. This type of equality
is useful in logic and related areas, when the mathematical objects
being studied are mathematical formulas themselves. But once a student
reaches this level, I assume that they can deal with the ambiguous
nature of ‘=’. So I felt safe leaving it out of this
taxonomy.

If I missed a role or have an unnecessary role for ‘=’, let
me know in the comments. If you use other symbols as I do with
‘`\(\unicode{x2254}\)`’ and ‘`\(\equiv\)`’, put
them down in the comments as well.
<!--
spell-checker:ignore STIXGeneral
-->
