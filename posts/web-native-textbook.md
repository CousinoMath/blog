# Web Native Textbook

## Preamble

For a while now, I had this idea of a “web native”
textbook. It’s still just an idea, and far from being realized.
But I think that it is time to share the idea with the public.
I’m quite certain that the technology exists today to realize
this idea. However, the work yet to be done so is significant, and will
take at least the better part of a year to complete.

## Clarifying the Meaning of Web Native

Perhaps an easy way to describe a web native textbook is to explain
what it is not. A web native textbook is not a PDF posted on the
internet. It’s much more than that. An online, PDF can have both
internal links—links to other parts of the document—and
external links—links to resources outside the document.
Furthermore, a PDF textbook can easily have a table of
contents, index, glossary, and other characteristics of dead tree
textbooks. Also, search engines like Google can add such a
PDF to their index, and thus bring it to the public.

What a web native textbook can do, that a PDF cannot, is
have complex dynamic behavior and complex memory—a state to use
the computer science nomenclature. My idea of what
constitutes a web textbook elaborates on the features that memory and
dynamic behavior can provide. Note having memory
requires some sort of login to the textbook. Login could be
done through a learning management system or passed off to a third party
like Google or Facebook. Therefore, our textbook memory would not need
to add another username and password to each students’ library of
logins. The dynamic behavior of the textbook need not require any
memory and does not require any login. But whenever a dynamic feature
of demands the use of memory, such a feature will also demand that users
log into the textbook.

## Features of a Web Native Textbook

### Examples Unbounded

Sometimes, students need more examples than the textbook provides. A web
native textbook can have as many examples as the student wants. At the
bottom of each randomly generated example, we can simply add a button
labeled “Generate Another Example” which performs this very
task. For those who worry that randomness will not be
appropriate for every kind of example imagine the following example
of factoring a quadratic polynomial. Most quadratics don’t
factor nicely. So a truly random quadratic would serve as a poor example
for factoring. However, we could randomly generate integer or rational
roots for the example quadratic as well as generate its leading
coefficient. From these parameters, we can calculate the coefficients of
the quadratic in it’s general form, and present this form of the
quadratic for factoring in such an example.

We can constrain the random examples to have prescribed characteristics,
like being nicely factorable, by choosing the correct parameters to
generate randomly. This allows us to provide students with an unbounded
number of appropriate examples.

### Interactive Visuals

We can embed dynamic graphs thanks to
[Desmos](https://www.desmos.com/) and
[GeoGebra](https://www.geogebra.org/). But there are also Javascript
libraries like [JSXGraph](http://jsxgraph.uni-bayreuth.de/wp/) and
[D3.js](https://d3js.org/). The advantage of all of these
interactive components is that the teacher no longer needs to switch
from dead tree textbook to computer, or from the tab of the PDF
textbook, to the tab of Desmos/Geogebra. More lessons can be taught
from fewer resources.

### Merit Badges for Personalized Learning

This is the first feature that necessitates memory, and therefore user
login. It is also one of the most complicated features. If
you’ve every been in Boy Scouts, Girl Scouts, or Venture Scouts,
then this idea of merit badges will be familiar. This idea can also be
fairly described as “gamifying” education, at least to a
limited extent.

Imagine a course where each student
could explore the aspects of the particular discipline which interest
them, while having students master the core ideas and
techniques. A web textbook could support such a class. Differential
equations is a subject quite naturally suited to this feature, and so
will be the subject of the motivating example. Let’s say that
instead of trying to pass differential equations,
students are trying to increase their rank in differential equations,
from “Not knowing” to “Knowing differential
equations”. In this course, there are some required
tasks that every student who wants to rank up in differential equations
must complete. Upon successfully completing a task, award the student
with a merit badge. Further, there are optional tasks, of which each
student must complete no fewer than some fixed number. Let’s say
that completing an optional tasks earns the corresponding optional merit
badge, and that completing a required task earns the associated required
merit badge. While all students must earn each required merit badge, it
is up to each student which optional merit badges they earn.

In our example here, we may suppose that
all students must demonstrate proficiency in solving first order
differential equations, second order linear differential equations,
first order linear systems of differential equations, power series
solutions, and solving differential equations using the Laplacian.
Whether or not this is a good and/or complete textbook for
differential equations is besides the point, the point is that a web
native textbook can be one where some of its topics are required of all
students, and the other topics are not required of all. Suppose in this
example that each student must earn at
least four optional merit badges. Some of these optional merit badges
could be topics like the following: existence and uniqueness proofs for
particular kinds of differential equations, spring mass systems,
algorithms for numerical approximating solutions, solving by the
method variation of parameters, Van der Pol oscillators, parametric
oscillators, predator-prey systems, etc.

This idea is far too hazy and too radical for me. A “choose
your own adventure” style course is so foreign to the
introductory college math courses that I teach. For instance, I am
still a bit unclear as to what a student has to do to earn a merit
badge. For the required merit badges, it might be doing well on an
exam. For the optional merit badges, acquisition might be achieved by
passing the exercise in the textbook on the topic or giving a
presentation to the class. But let this be a foundation for further
ideas about a true web based textbook. These ideas are worth pursing
because such a textbook would then put the student in a more active role
in their own learning.

### Student Annotations and Modifications

Remembering each users’ interactions with the textbook, allows us
to save modifications and annotations that each user makes to the
textbook. These two topics, annotation and modification to the
textbook, are different enough to require separate descriptions. When
thinking of annotations to web native textbooks, think about margin
notes and highlighting in dead tree textbooks. And within the web
textbook, each student’s annotations can be stored and displayed
only to the individual student. But instructors could create
annotations which are displayed on all their students textbooks. Or
instructors could highlight a particularly good annotation by a student
by publishing them to everyone’s textbook.

With modifications, students could rewrite their own textbook. The
ability to revert their changes back to the original would be
necessary. But in principle, students could delete, add, and rewrite
content to suit their own pedagogical needs.
Again, an instructor could push modifications to all of their
students’ textbooks. Otherwise, one student’s modifications
will remain local to their copy of the textbook. Needless to say,
modifications are much harder to implement than annotations. But one
advantage is that students can write their own textbooks, which is
another instance of more active learning for students.

### Tracking Student Interaction

This feature may worry some because of its similarity to tracking done
by companies like Facebook and Google and by governments like United
States of America. But this is just an example of what such a web
native textbook could do and not what such a textbook must do. And I
will also ask the reader to remember that the morality of tracking
depends, partly, upon the reason for tracking users. And tracking
can be done after stripping away all personally identifiable
information, thereby anonymizing the data.

As to what tracking can do for a textbook, it can determine
which paragraphs get the most annotations, which examples get randomly
regenerated the most, which interactive elements get used the most,
etc. In other words, it helps you determine which parts of your
textbook are working best and which parts need to be revised. Also, it
will be important to note what tracking won’t be able to do.
Tracking won’t be able to tell at which parts of the textbook
your students are looking. It will not be able to accurately tell you
how much time your students are spending reading/interacting with the
textbook. This is because a student could be looking at another tab in
their browser or another app on their computer. For that matter, a
student could leave the textbook open on their computer while watching
television, going out to do errands, or any other activity off their
device.

In short, tracking the textbook can give the instructor a decent idea
of how the textbook is being used by students in general and by
each individual student.

### Offline Too

Thanks to modern web development, an online textbook doesn’t have
to be dependent on a constant internet connection. The whole textbook
can be a web app, a website that can be downloaded as an app to
desktops, laptops, tablets, phones, and any other capable device. This
textbook app can do just about everything offline that it can do
online. It could do everything that I've described in this post offline.
All an internet connection provides the textbook app is the ability to
interact with others in real time and save a copy of its memory to a
server.

## Conclusions

The features that I have listed here are just some of what a truly
web enabled textbook could do. If you have any additions, criticisms,
and/or comments, please leave them in the comments below. My hope is
that someday soon, web textbooks will go far beyond their PDF
ancestors.
