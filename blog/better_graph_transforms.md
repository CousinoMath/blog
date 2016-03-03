# Better Graph Transformations #

I just wanted to offer a quick note, and extensive justification, for another
way of explaining horizontal graph transformations. The transformation from
`\(y = f(x)\)` to `\(y = f(2x - 4)\)` usually requires rewriting the result as
`\(y = f(2(x - 2))\)` before rendering the interpretation that the transform
changes the original graph by shrinking horizontally by a factor of 2 followed
by a shift right 2 units. Another interpretation, which doesn’t require a
rewrite, is that the original graph is changed by first shifting right 4 units,
and then shrinking horizontally by a factor of 2. We will see why this is a
correct conclusion in a moment. First, we will see the advantage of this
technique. We tell our students that horizontal transformations are backwards,
or counter-intuitive; while vertical transformations are straight-forwards.
Under this theme, the order of vertical transformations follow the order of
operations: scaling and reflections (which involve multiplication and division)
come before shifts (which involve addition and subtraction); but the order of
horizontal transformations are backwards and follow the reverse of the usual
order of operations. This keeps the theme of the backwards nature of horizontal
transformations. I suspect, with small anecdotal support, that this is easier
for students to learn. It keeps graph transformations within a simple theme and
avoids awkward rewrites of formulas.

## Correctness ##

To see the correctness of this interpretation, we will examine how the
transformations affect an arbitrary point on the graph, say `\((x,y)\)`. First,
the transformation to `\(y = f(2(x-2))\)` starts with a horizontal shrink which
moves our point to `\((x/2,y)\)` and is followed by a horizontal shift that
leaves the point at `\((x/2+2,y)\)`. Second, the alternative interpretation
would have us start with a shift, `\((x+4,y)\)`, followed by the shrink,
`\((\frac{x+4}{2},y)\)`. Clearly, both sequences of horizontal transformations
move our original point to the same destination. We can then conclude that both
transformations are equivalent.

## Extrapolating ##

These transformations are effectively composing the original function
`\(y = f(x)\)` with some simple functions. There are functions for
shifts/translations, `\(T_{h}(x)≔x-h\)`, and functions for
reflections and scaling, `\(S_{a}(x)≔a x\)`. To illustrate, the
transformation to `\(y=3 f(x - 2)\)` can be represented as the composition
`\(y = (S_{3}\circ f\circ T_{-2})(x)\)`. From this example, we can see that
vertical transformations are compositions that occur to the left of `\(f\)`,
and the horizontal transforms occur as compositions to the right.

To examine how the order of transformations is reflected in composition,
let’s take a look at the two examples. For the vertical case,
`\(y = -3 f(x) + 5\)` must be written as `\(y = (T_{5}\circ S_{-3}\circ f)(x)\)`
in order to encode the order of operations in composition. Here the order of
transformations is found in starting at `\(f\)` and reading the transformations
right to left. For the horizontal case, `\(y = f(2 x - 4)\)` must be
`\(y = (f\circ T_{-4}\circ S_{2})(x)\)`. This time the order of transformations
dictates that we read the composition left to right from `\(f\)`. So order can
be determined with this composition perspective by starting at `\(f\)` and
reading outwards.

The equivalence of the two interpretations of the ordering of two horizontal
transformations, in the composition viewpoint, amounts to interchanging
`\(T_{h}\)` and `\(S_{a}\)`. In our example, we have that
`\(f(2 x - 4)=(f\circ T_{-4}\circ S_{2}\))(x)\)` and
`\(f(2 (x - 2))=(f\circ S_{2}\circ T_{-2})(x)\)` are equal. In general,
`\((S_{a}\circ T_{h})(z) = a (z + h) = a z + a h = (T_{a h}\circ S_{a})(z)\)`
for any values of `\(a\)` and `\(h\)`. This provides us with another
justification for this alternate explanations of the order of horizontal
transforms.

## Final Thoughts ##

I realize that this is a simple observation. But since, the pervasiveness of
the `\(y = f(2 (x - 2)\)` method and the simplicity of reversing the order of
operations compelled me to write up this little post.
