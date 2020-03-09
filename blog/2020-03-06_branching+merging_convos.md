# Summary #

# A Branching and Merging Convolutional Network with Homogeneous Filter Capsules #

This is a summary of a paper by Byrely, Kalganova, and Dear available
[arxiv.org][2] ([2001.09136][1]). This paper utilizes multiple paths from input
to classification in order to exploit different levels of abstraction,
utilize different receptive fields, and allow information learned early on to
be easily accessed at the time of classification. The network architecture
starts with three convolutional layers then branches either to two [capsule
network layers][3] or to another set of three convolutional layers which branch
in a similar fashion once more. The results of the three branches of capsule
networks are summed, stacked into a 3-vector for each class, summed again, and
then softmaxed. Three merging strategies were tried: one in which the merge
weights were equal and not learnable, a second in which the merge weights were
initially equal but learnable, and a final one in which the merge weights were
randomly initialized and learable.

Data augmentation was applied to their MNIST dataset where, among other
techniques, the images were randomly rotated by an angle between `\(\pm 30\)`
degrees, randomly translated up to the point where the bounding box of the digit
sits on the edge of the image, and random `\(4\times 4\)` patch erasure. For
all of the three merging strategies, 32 trails were performed with 300 epochs
each. The strategy where the merge weights were unlearnable achieved a new state
of the art 99.79% accuracy. The randomly initialized merge weights
achieved a max accuracy of 99.78%. And the previous state of the art had a max
accuracy of 99.77%. As for ensemble learning, the authors surpassed the previous
state of the art using an ensemble of 4,544 by getting an accuracy of 99.83%
with an ensemble of 44.


[1]: https://arxiv.org/abs/2001.09136
[2]: https://arxiv.org/
[3]: https://cousinomath.website/blog/2020/2/24/dynamic-routing-between-capsules