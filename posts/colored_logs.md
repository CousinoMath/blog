`\(\require{color}\)`
I have found that using colors helps students work better with logarithms.
Starting with inverse functions, I introduce colors. Then this carries over to
exponentials and logarithms.

`\[\begin{align*}
  {\color{red}f}({\color{blue}x}) & = {\color{green}y} &
    ⟷ {\color{red}f^{-1}}({\color{green}y}) & = {\color{blue}x} \\
  {\color{red}b}^{\color{blue}x} & = {\color{green}y} &
    ⟷ {\color{red}\log_{b}}({\color{green}y}) & = {\color{blue}x}
\end{align*}\]`

Color is an arbitrary way to distinguishing the symbols. Alternatively, you
could enclose the three symbols with shapes, e.g. triangle, square, and circle.
The rest of this post can be modified to fit your chosen way of differentiating.
I emphasize how the colors change between the two equations by removing the
symbols.

`\[\begin{align*}
  \text{Exponentials} & \longleftrightarrow & \text{Logarithms} \\
  \colorbox{red}{ }\left(\colorbox{blue}{ }\right)
    = \colorbox{green}{ } &
    ⟷ & \colorbox{red}{ }\left(\colorbox{green}{ }\right)
    = \colorbox{blue}{ }
\end{align*}\]`

And I continue the coloration with examples like evaluating `\(\log_{3} 81\)`.
As we’re trying to figure out unknown value, we write
`\(\log_{3} 81 = ?\)`.

`\[\begin{align*}
  {\color{red}\log_{3}}{\color{blue}81} & = {\color{green}?} \\
  {\color{red}3}^{\color{green}?} & = {\color{blue}81} \\
  {\color{red}3}^{\color{green}4} & = {\color{blue}81}
  \end{align*}\]`

This means that `\(\log_{3}(81) = 4\)`. Here is where I reinforce the idea that
the expression `\(\log_{3}(81)\)` asks the question “3 to what power is 81” just
like `\(81÷3\)` asks “3 times what is 81” and `\(\sqrt[3]{81}\)` asks “what
number to the 3rd power is 81”.

### Addressing Criticism ###

One obvious critique of this technique is that it emphasizes symbol manipulation
over deeper understanding. I agree. But deeper understanding often comes after
superficial symbol shuffling. Unfortunately,  I haven”t had time in my
college-level courses, with about 48 contact hours, to delve into helping my
students develop a mastery of logarithms. The reality of my classroom is aiming
for student mastery is near impossible, and a more realistic goal for my
students is symbolic understanding with a little deeper mastery.

One of the ways that I aim for deeper mastery is by reinforcing that the result
of a logarithm is a question: the expression `\(\log_{3} 81\)` is asking the
question “3 to what power gives the answer 81”, and the value of this expression
is the answer to its question. Another way I stress mastery is solving
exponential and logarithmic equations by converting the two, and introduce
exponentiation and taking logarithms as an ancillary method. Also, I write out
log properties along side their equivalent exponential properties and emphasize
their similarities.

### Homologous Properties ###

Take for example the product rule,

```
\[\begin{align*}
  {\color{red}b^{x + y}} &
    = {\color{blue}b^{x}} ⋅ {\color{green}b^{y}} &
    ⟷ {\color{red}\log_{b} (u ⋅ v)} &
    = {\color{blue}\log_{b} (u)} + {\color{green}\log_{b} (v)}
  \end{align*}\]
```

```
\[\begin{align*}
   \text{Exponentials} & \longleftrightarrow & \text{Logarithms} \\
   \colorbox{red}{ } = \colorbox{blue}{ } \cdot \colorbox{green}{ } &
      \longleftrightarrow & \colorbox{red}{ } = \colorbox{blue}{ } + \colorbox{green}{ }
   \end{align*}\]
```

Converting the logs in property to questions results in the statement

>  Whatever exponent of `\(b\)` yields `\(u ⋅ v\)` is the same as
>  whatever exponent of `\(b\)` yields `\(u\)` plus whatever exponent of `\(b\)`
>  yields `\(v\)`.

This is very verbose, which is why mathematical notation is both efficient and
comprehensible. If you want an intermediate step, introduce the new variables
`\(x\)`, `\(y\)`, and `\(z\)` as follows.

```
\[\begin{align*}
  {\color{red}z} & ≔ {\color{red}\log_{b} (u ⋅ v)} & ⟷ {\color{red}b^{z}} & = {\color{red}u ⋅ v}\\
  {\color{blue}x} & ≔ {\color{blue}\log_{b} u} & ⟷ {\color{blue}b^{x}} & = {\color{blue} u} \\
  {\color{green}y} & ≔ {\color{green}\log_{b} v} & ⟷ {\color{green}b^{y}} & = {\color{green} v}\\
  \end{align*}\]
```

Our verbose question becomes

> `\(z\)`, the exponent of `\(b\)` which yields `\(u ⋅ v\)`, is the same as
> `\(x\)`, the exponent of `\(b\)` which yields `\(u\)`, plus `\(y\)`, the
> exponent of `\(b\)` which yields `\(v\)`. In short, `\(z\)` is `\(x\)` plus
> `\(y\)`.

Converting each of the three above equations and the log property to
exponentials, we get the following.

```
\[\begin{align*}
  {\color{red}b^{z}} & = {\color{red}u ⋅ v} \\
  {\color{blue}b^{x}} & = {\color{blue}u} \\
  {\color{green}b^{y}} & = {\color{green}v} \\
  {\color{red}z} & = {\color{blue}x} + {\color{green}y}
  \end{align*}\]
```

Substituting away the variables in the third equation using the other equations,
we see
`\({\color{red}b^{x + y}} = {\color{blue}b^{x}} ⋅ {\color{green}b^{y}}\)`.
And we can do the reverse, going from the exponential property to the
logarithmic, by introducing three new variables, converting all four equations,
and substituting to get the result.

## Comments ##

Please leave any comments, criticisms, or suggestions below.
