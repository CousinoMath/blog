# Web Native Textbook #

## Preamble ##

For a while now, I had this idea of a &ldquo;web native&rdquo;
textbook. It&rsquo;s still just an idea, and far from being realized.
But I think it is time to share the idea with the public. I&rsquo;m
quite certain that the technology exists today to realize this idea.
However, the work required to do so is significant, and will take at
least the better part of a year to complete.

## Clarifying the Meaning of Web Native ##

Perhaps an easy way to describe a web native textbook is to explain
what it is not. A web native textbook is not just a PDF posted on the
internet. It&rsquo;s much more than that. An online PDF can have both
internal links&mdash;links to other parts of the document&mdash;and
external links&mdash;links to resources outside the document.
Furthermore, an online PDF textbook can easily have a table of
contents, index, glossary, and other characteristics of dead tree
textbooks. Also, search engines like Google could add such an online
PDF to their index, and thus bring it to the public.

What an online PDF textbook cannot do, but a web native one can, is
have a complex memory, or state to use the computer science
nomenclature, and have complex, dynamic behavior. My idea of what such
a web textbook actually is enumerates the features that memory and
dynamic behavior can provide. One thing to note is that having memory
requires some sort of login to the textbook. Such a login could be
through a learning management system or passed off to another party
like Google or Facebook. Therefore our textbook memory would not need
add another username and password to each students&rsquo; identity
library. The dynamic behavior of the textbook need not require any
memory and hence not require any login. But whenever a dynamic feature
of such a textbook demands the use of memory, this feature will also
demand users log into the textbook.

## Features of a Web Native Textbook ##

### Examples Unbounded ###

Sometimes students need more examples than the textbook provides. A web
native textbook can have as many examples as the student requires. By
randomly generating examples, we can just add a button at the bottom of
each example reading &ldquo;Generate Another Example&rdquo;, and having
this exact behavior upon being clicked. For those that worry randomness
will not be appropriate for some examples, imagine the following case 
of an example for factoring a quadratic polynomial. Most quadratics
don&rsquo;t factor nicely. However, we could randomly generate integer
or rational roots for the quadratic as well as the leading coefficient.
From these parameters, we can calculate the coefficients of the
quadratic in it&rsquo;s general form, and present this form of the
quadratic for factoring in such an example.

In other words, by choosing the correct parameters to randomly generate,
we can constrain the examples to have prescribed characteristics, like
being nicely factorable. This allows us to provide students with an
unbounded number of good examples.

### Interactive Visuals ###

We can already embed dynamic graphs thanks to
[Desmos](https://www.desmos.com/) and
[Geogebra](https://www.geogebra.org/). But there are also Javascript
libraries like [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/) and 
[D3.js](https://d3js.org/), which is not interactive but is dynamic
from my brief exploration into the library. The advantage of this
feature is that the teacher no longer needs to switch from dead tree
textbook to computer or from the tab of the online PDF textbook to the
tab of Desmos/Geogebra. More lessons can be taught from just one
resource.

### Merit Badges for Personalized Learning ###

This is the start of the features that necessitate memory, and
therefore user login. This feature is also one of the most complicated.
If you&rsquo;ve every been in Boy Scouts, Girl Scouts, or Venture
Scouts, then this idea will be that of merit badges and rank from
scouts. This idea can also be fairly described as
&ldquo;gamifying&rdquo; education, at least to a limited extent.

Imagine a course where each student could explore aspects of that
discipline which interest them while still mastering the core ideas and
techniques. A differential equations course is very naturally suited to
this feature, and so will be the subject of the motivating example.
Let&rsquo;s say that instead of trying to pass differential equations,
students are trying to increase their rank in differential equations
from &ldquo;Not knowing&rdquo; to &ldquo;Knowing differential
equations&rdquo;. In this hypothetical course, there are some required
tasks that every student wishing to rank up in differential equations.
Upon successfully completing a task, award the student with a merit
badge. Further, there are optional tasks, of which each student must
complete some fixed minimum number. Let's say that completing an
optional tasks earns the corresponding optional merit badge, and
completing a required task earns the associated required merit badge.
While all students must earn each required merit badge, it is up to
each student which optional merit badges they earn.

In our example differential equations textbook, we may suppose that
all students must demonstrate proficiency in solving first order
differential equations, second order linear differential equations,
first order linear systems of differential equations, power series
solutions, and solving differential equations using the Laplacian.
Whether or not this is a good and/or complete textbook for
differential equations is besides the point, the point is that a web
native textbook can be one where some of its topics are required of all
students, and the other topics are not required of all. In this
example, let us suppose in this example that each student must earn at
least four optional merit badges. Some of these optional merit badges
could be topics like the following: existence and uniqueness proofs for
particular kinds of differential equations, spring mass systems,
algorithms for numerical approximating solutions, solving by the
method variation of parameters, Van der Pol oscillators, parametric
oscillators, predator-prey systems, etc.

We can go further with this feature of merit badges. But let this be
a foundation for further ideas. The point of these merit badges is that
the textbook could allow a student to create their own course without
straying too far from the essentials. Such a textbook would then put
the student in a more active role in their own learning. This kind of
feature is one which truly distinguishes a web native textbook from a
simple PDF posted online.

### Student Annotations ###

Remembering each users interactions with the textbook, allows us to
save modifications and annotations that each user makes to the
textbook. These two topics, annotation and modification to the
textbook, are different enough to require their own descriptions. When
thinking of annotations to web native textbooks, think about margin
notes and highlighting in dead tree textbooks. And within the web
textbook, each student&rsquo;s annotations can be stored and displayed
only to the individual student. But instructors could create
annotations which are displayed upon their students textbooks. Or
instructors could highlight particular good annotations by students by
publishing them to the class.

With modifications, students could rewrite their own textbook. The
ability to revert their changes back to the original would be
necessary. But in principle, students could delete content, add
content, and rewrite content to suit their own pedagogical needs.
Again, an instructor could push modifications to all of their
students&rsquo; textbooks. Otherwise, one student&rsquo;s modifications
will remain local to their copy of the textbook. Needless to say,
modifications are much harder to implement than annotations. But one
advantage is that students can write their own textbooks, which is
another instance of more active learning for students.

### Tracking Student Interaction ###

This feature may worry some because of its similarity to tracking done
by companies like Facebook and Google and governments like United
States of America. But this is just an example of what such a web
native textbook could do, and not what such a textbook must do. And I
will also ask the reader to remember that the morality of tracking
depends, partly, upon the reason for tracking users. Also, tracking
can be done after stripping away all personally identifiable
information, anonymizing the data.

As to what tracking can actually do for this textbook, it can determine
which paragraphs get the most annotations, which examples get randomly
regenerated the most, which interactive elements get used the most,
etc. In other words, it helps you determine which parts of your
textbook are working best and which parts need to be revised. It will
be important to note what tracking won&rsquo;t be able to do. Tracking
won&rsquo;t be able to tell at which parts of the textbook your
students are looking. It will not be able to accurately tell you how
much time your students are spending reading/interacting with the
textbook. This is because a student could be looking at another tab in
their browser or another app on their computer. Additionally, a student
could leave the textbook open on their computer while watching
television, going out to do errands, or any other activity off their
device.

## Conclusions ##

The features that I have listed here are just some of what a truly
web enabled textbook could do. If you have any additions, criticisms,
and/or comments, please leave them in the comments below. My hope is
that someday soon, web textbooks will go far beyond their PDF
ancestors.