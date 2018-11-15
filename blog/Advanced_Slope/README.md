<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_CHTML" async="async"></script>

# [Advanced Slope Mockup][1] in [Geogebra][2]

## Preamble

This is a lab/studio/exercise, initially written in [Geogebra][2], which intends
to address a technical, but important, misunderstanding of slopes of lines. This
post is both a manual for how to use the tool and how one might integrate the
tool into a lesson plan. If there is sufficient interest in this tool, then I
will strongly consider writing a native web app which has a better interface and
can be used on (mostly) any device without needing any extra software.

All credit for this exercise goes to my doctoral advisor and one of his
post-doctoral students. Their names are not mentioned out of respect for their
privacy. I post this here for two reasons: (1) a lot of good teaching comes from
stealing from other teachers and (2) this is too good not to share with others.
If you want to cite this utility properly to these two anonymous sources,
I&rsquo;d be happy to contact them on your behalf.

## tl;dr

Consider the following definition of a line: moving from one point on the line
to another always involves rising/falling vertically and running horizontally by
a constant ratio, which we call slope. By this definition of a line,
[the graph shown in the Geogebra file][1] must be a line with slope 2 since
rising two units and running one unit moves from one point on the
&ldquo;line&rdquo; to another. If you disagree that this is a line, mess with
the `\(run\)` slider to move one of two points off of the graph. Thereby,
providing conclusive evidence the graph is _not_ a line. But I guarantee that
you can find a value of `\(\delta\)`, though maybe not accessible through the
slider, which will change the graph to one that where the two points will lie on
the graph. Changing `\(\delta\)` can give you a new graph which is a
&ldquo;line&rdquo; according to the above definition and your chosen value of
`\(run\)`.

How could we clarify this definition of a line&mdash;moving from one point on
the line to another always involves rising/falling vertically and running
horizontally by a constant ratio&mdash;so that we can say confidently that these
weird graphs are _not_ lines, regardless of the value of `\(\delta\)`?

[The Geogebra file][1] is a rough draft, as are these instructions. If you find
a better way to present this or tweak [the Geogebra file][1], feel free to make
those changes. Everything here is in the public domain. You may change anything
as much or as little as you like. Still, alerting me to mistakes and/or
improvements is appreciated.

## Sketch of a Lesson Plan

### Purpose of this lesson

To describe the purpose of this tool in the classroom, imagine asking your class
about the meaning of the slope of a line. More specifically, imagine asking your
class how the slope of a line tells you how to get from one point on the line to
the &ldquo;next&rdquo; point on the line. For a line with slope
`\(m = \frac{2}{1}\)`, you&rsquo;re likely to get an answer like &ldquo;rise 2
units and run 1 unit to get to the next point&rdquo;. This is mostly correct,
and a good indication that your class understands the basics of slope. However,
it isn&rsquo;t technically correct. And as Futurama has taught us, technically
correct is the best kind of correct. This tool is an attempt to introduce a
technically correct understanding of slope.

### Upon opening the file

Once you open the [Geogebra file][1], you&rsquo;re immediately confronted with
something that is obviously not a line.

![Opening the Geogebra file][3]

But in a sense, it is a line, one with slope `\(m = 2\)`. Look at the point
`\(P\)` and notice how if we rise 2 units and run 1 unit, then we find ourselves
sitting on another point of the graph, `\(Q\)`. This is true regardless of where
we move the point `\(P\)`. So according to the naive definition of &ldquo;rise 2
and run 1 to get to the next point&rdquo;, this weird graph _is_ a line. And yet
it obviously is not a line.

### The hook: what does `\(Slope = Rise/Run\)` really mean

What&rsquo;s the problem? This is where the sliders enter the picture. There is
a `\(run\)` slider and a `\(\delta\)` slider. Play around with these to see what
they do. You&rsquo;ll find that the `\(run\)` slider does exactly what you
expect it to do, adjust the amount by which one runs to get to the next point.
An excellent exercise in class would be to find a formula for the `\(rise\)`
given values for slope, `\(m\)`, and for the `\(run\)`. The `\(\delta\)` slider
is harder to explain, but still may be a good exercise for students. (For those
who don&rsquo;t want to introduce scary Greek letters to their students, feel
free to change the name of this variable.) After playing around with this value
for a while, you will hopefully notice that this governs how large one piece of
the graph can be before it starts over in another place. In fact, changing the
value of `\(\delta\)` actually changes the graph itself to a different, though
related, graph. We can call all of these graphs a _family of graphs_, and
every value of `\(\delta\)` uniquely corresponds with a specific member of this
family of graphs.

### Some terminology

While playing around with the values for `\(run\)` and `\(\delta\)`, you will
notice that the graph fails our criterion of a line, namely that rising and
running for appropriate amounts from the point `\(P\)` to the point `\(Q\)`
results in `\(Q\)` not lying on the graph. Ah ha, this is how we will show the
graph isn&rsquo;t a line! Before we get carried away, it will be helpful to have
some terms before continuing. First, the _rise and run stair_ will be the
backwards &lsquo;L&rsquo; shape drawn on the graph which indicates the movement
from `\(P\)` to `\(Q\)` by rising vertically and running horizontally for the
appropriate amounts. Second, the values `\(run\)` and `\(\delta\)` _work_
together if and only if the rise and run stair has both `\(P\)` and `\(Q\)`
lying on the graph. Similarly, values for `\(run\)` and `\(\delta\)` don&rsquo;t
work together if and only if `\(P\)`, `\(Q\)`, or both doesn&rsquo;t fall on the
graph. Finally, we will say _rise and run definition of a line_ when we mean
our working definition of a line&mdash;the graph of a line is one in which you
can get from any point on the graph to another by rising and running according
to a fixed ratio (which we call the slope).

### The meat of the lesson: the game of `\(run\)` versus `\(\delta\)`

This is a good time to distinguish who has control over what values. Your
students should have control over `\(run\)`. Some adversary, e.g. you the
teacher, other classmate(s), or just an imaginary foe, has control over the
value of `\(\delta\)`. For convenience, I&rsquo;ll call these two groups the
student and the adversary. Here are the goals of each group.

- Student&rsquo;s move&mdash;show the graph for the current value of
  `\(\delta\)` by finding a value of `\(run\)` which don&rsquo;t work together
  with `\(\delta\)`. This means that the student has shown the graph that the
  adversary claims to be a line, is really not the graph of a line, according to
  our rise and run definition of lines.
- Adversary&rsquo;s move&mdash;find a new value of `\(\delta\)`, and therefore a
  new graph in the family, which works for the new value of `\(run\)` that the
  student has just chosen. This means that the adversary admits that the
  previous graph wasn&rsquo;t really a line according to the rise and run
  definition, but is now claiming that the new graph is a &ldquo;line&rdquo; by
  our definition.
- Advanced challenge: find a new value of `\(\delta\)` which works for _all_ the
  values of `\(run\)` that the student has chosen throughout all of their moves.

This requires an example.

### Example of how the game should run

Starting with the default values, `\(slope = run = 2\)` and `\(\delta = 1\)`.
The following is one of many ways in which the game could be played. At this
point, the values of `\(run\)` and `\(\delta\)` are working together. So this
means that it is the Student&rsquo;s turn to find a value for `\(run\)` which
doesn&rsquo;t work.

1. Student&rsquo;s turn&mdash;any non-integer value of `\(run\)` will achieve
   the goal of the student. So suppose the student chooses `\(run = 1/2\)`. This
   value of `\(run\)` stair fails to work together with the the the current
   `\(\delta\)`. Thus, it is now the Adversary&rsquo;s turn to choose a value
   for `\(\delta\)` to produce a new graph that is a &ldquo;line&rdquo;
   according to our definition and this new `\(run\)` value.

   ![Student's first move][4]

2. Adversary&rsquo;s turn&mdash;the student just chose `\(run = 1/2\)`, and
   previously `\(run\)` was 1. So the adversary must now choose a value of
   `\(\delta\)` which works with `\(run = 1/2\)` (and works with `\(run = 1\)`
   for the advanced challenge). Suppose the adversary chose `\(\delta = 1/2\)`.
   This produces a graph which works with `\(run = 1/2\)` (and with
   `\(run = 1\)`).

   ![Adversary's first move][5]

3. Student&rsquo;s turn&mdash;to find a value of `\(run\)` which doesn&rsquo;t
   work with the current value of `\(\delta=1/2\)`, we must choose a value into
   which is not an integer multiple of the value `\(\delta=1/2\)`. Suppose the
   student chooses `\(run = 1/3\)`. This will cause the rise and run stair to
   fail with the current value of `\(\delta\)`.

   ![Student's second move][6]

4. Adversary&rsquo;s turn&mdash;Now the adversary must find a value of
   `\(\delta\)` which not only works for the new value of `\(run = 1/3\)` (and
   for the previous values of `\(run\)` as well for the advanced challenge). To
   do so, find a common denominator for `\(1/3\)`, `\(1/2\)`, and `\(1\)`. For
   now, we will assume that the adversary picks `\(\delta = 1/6\)`. This new
   value of `\(\delta\)` produces a graph which works with the current (and
   previous) value(s) of `\(run\)`.

   ![Adversary's second move][7]

5. Student chooses `\(run = 1/4\)`. This choice succeeds because `\(1/4\)` is
   not an integer multiple of `\(\delta = 1/6\)`.

   ![Student's third move][8]

6. Adversary chooses `\(\delta = 1/24\)`. This choice satisfies the
   Adversary&rsquo;s requirement to have their value of `\(\delta\)` work with
   the current and all previous values of `\(run\)`, because the all the values
   of `\(run\)` can be written as integer multiples of this value of
   `\(\delta\)`.

7. &hellip;

### Is there an end to this game?

**No!** There is no end to this game. Whatever values of `\(run\)` the student
chooses, the adversary will always be able to choose a value for `\(\delta\)`
which works with those values. So whatever you choose `\(run\)` to be, there is
a weird non-line which satisfies our rise and run definition of a line for your
chosen value of `\(run\)`. And yet, for each of these non-lines and their
corresponding values for `\(\delta\)`, there is a value of `\(run\)` which shows
the graph to fail to be a line according to our definition.

By now, you&rsquo;re students will be exhausted, so exhausted that some of them
might even give up and call this monstrosity of a graph a line. But don&rsquo;t
let them give up so soon. We all know these graphs are not lines, but our
definition doesn&rsquo;t only let&rsquo;s us show these aren&rsquo;t lines one
graph at a time. What would be great to have is a definition that allows us to
show that _each one_ of these graphs, i.e. each value of `\(\delta\)`, is not
the graph of a line. The interesting thing is that our rise and run definition
does this.

The game between `\(run\)` and `\(\delta\)` is one where one player chooses a
one value for `\(run\)` which shows the current graph, corresponding to the
value of `\(\delta\)`, is not that of a line. One value for `\(run\)` used to
refute one graph (value of `\(\delta\)`). The advanced challenge just means that
the player gets to choose a finite number of values for `\(run\)`, and this
refutes only one graph too. So instead, let&rsquo;s have the player choose
_infinitely_ many values for `\(run\)`. Heck, let&rsquo;s have the player choose
every possible value for `\(run\)`, meaning `\(run\)` can be any real number
(except zero).

So we can now tell the adversary to pick any value for `\(\delta\)` that they
might like. Since we have every possible value for `\(run\)` to choose from, we
can just tell the adversary to set `\(run\)` to be `\(\delta / 2\)`. Now the
adversary doesn&rsquo;t need us, because they know what our move will be for
every possible choice of `\(\delta\)`. And our move will always show the
Adversary&rsquo;s graph not to be of a line (this would be beyond my typical
college algebra student).

Moreover, this new game, where the player can pick every value of `\(run\)`,
matches our rise and run definition. Remember that this definition is as
follows: moving from one point on the line to another always involves rising
vertically and running horizontally by a constant ratio, which we call slope. At
first, it looks like we can only pick one value of `\(run\)` because we have to
pick &ldquo;_a_ constant ratio&rdquo;. But one single ratio comes in many
forms. For example, a slope of 2 means a ratio of rising 2 units for every 1
unit run. But it also means rising 1 unit for every half unit run, rising 4
units for every 2 units run, rising `\(2 run\)` units for every `\(run\)` units
run. Hence, one ratio comes in infinitely many forms. Bringing this back to our
definition, the graph of a line with slope `\(m\)` is one where from one point
on the graph we can get to infinitely many other points on the graph by rising
`\(m run\)` units and running by `\(run\)` units from the original point. Each
of the infinite number of points comes from exactly one of the infinite possible
values for `\(run\)`. Said another way, from one point on a line, you can get to
_any other_ point on the line by rising and running by a constant ratio.

## Pedagogical Value of This Lesson

I&rsquo;m already exhausted writing and editing this. If you've made it this
far, please leave a comment with your thoughts or experiences with this in the
classroom.

One obvious emphasis of this lesson is slope as a ratio, and ratios as having
infinitely many forms. This lesson also touches upon continuity. A line must be
continuous as can be seen from the slope as a ratio principle. Therefore, the
none of the graphs can be that of a line, as they are all discontinuous.
Students don&rsquo;t see the number line, and therefore the Euclidean plane, as
continuous. Rather they see the number line as a series of disconnected points.
They see the integers on the number line, and even some fractions. But students
won&rsquo;t see things like `\(\sqrt{\pi}\)` on the number line. They
don&rsquo;t even see these as numbers. So when looking at a graph, the only
points that students see are those that are at integer, or maybe fractional,
coordinates. By having students deal with, and even need, tiny values of
`\(run\)`, students must recognize more points on the plane. Hopefully, even
seeing the plane as an endless sheet of graph paper rather than just the grid
lines.

Finally, the games played in this lesson help prepare students for reasoning in
first order logic. There is a long tradition of representing first order
statements as games. The first game, where values of `\(run\)` are chosen one at
a time, corresponds to evaluating the truth of the statement
`\(\exists run\forall \delta \left( run \textnormal{ and } \delta \textnormal{do not work together }\right)\)`.
The student picks candidate value for `\(run\)` which might make the statement
true, and the adversary picks a value for `\(\delta\)` which shows the statement
to be false for that value of `\(run\)`. So the student has to pick a new value
of `\(run\)`, and the game repeats itself. When we modify the game so the
student can pick every value of `\(run\)` all at once, the statement for this
game is
`\(\forall \delta\forall run\left( run < \delta\rightarrow run \textnormal{ and } \delta \textnormal{ do not work together}\right)\)`. The adversary can choose any value of `\(\delta\)` that
they like, as long as the student picks a value for `\(run\)` which is less than
the value for `\(\delta\)`, we will have these values failing to work together,
which means the graph isn't a line.

## Documentation of the Tool

- Functions
  - `\(f(x)\)` graphed function
  - `\(\phi (x)\)` function which is cut up into pieces and graphed as `\(f(x)\)`.
- Multi-variable Functions
  - `\(\theta (x, \delta)\)` function which finds the non-negative remainder
    when `\(x\)` is divided by `\(\delta\)`.
  - `\(\psi (x, \delta)\)` a convenience function for teachers, as it is
    identical to `\(f(x)\)` but is also a function of `\(f(x)\)`. If a student
    deletes or alters `\(f(x)\)`, the teacher can just reset the value of
    `\(f(x)\)` by entering in `\(f(x) = \psi (x, \delta)\)`.
- Numbers
  - `\(Run\)` a value governed by a slider and controlled by the student.
    Default value is 1.
  - `\(Slope\)` a value with no slider and is intended to be controlled by the
    teacher or at the behest of the teacher. Default value is 2.
  - `\(\delta\)` a value governed by a slider and controlled by the adversary.
    Default value is 1. May be renamed if desired.
- Points
  - `\(P\)` the point at the bottom left corner of the rise and run stair
  - `\(Q\)` the point at the bottom right corner of the rise and run stair
  - `\(R\)` the point at the top right corner of the rise and run stair
- Segments
  - `\(a\)` the bottom edge of the rise and run stair
  - `\(b\)` the right edge of the rise and run stair

[1]: https://github.com/cousinomath/Teaching/blog/Advanced_Slope/advanced_slope_markup.ggb "Advanced slope mockup Geogebra file"
[2]: https://geogebra.org/ "Geogebra app homepage"
[3]: introScreen.png "Screenshot of geogebra file"
[4]: m2-1.png "Student's first move"
[5]: m2-2.png "Adversary's first move"
[6]: m2-3.png "Student's second move"
[7]: m2-4.png "Adversary's second move"
[8]: m2-5.png "Student's third move"
[9]: m2-6.png "Adversary's third move"
