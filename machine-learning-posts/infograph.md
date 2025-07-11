# Summary #

This paper introduces a graph-level representation approach to unsupervised
learning whose goal is to maximize the mutual information between graph-level
and patch-level representation. The paper goes on to purpose a related
semi-supervised learning algorithm.

# InfoGraph: Graph-Level Representation via Mutual Information Maximization #

This is a summary of the paper by Sun, Hoffmann, Verma, and Tang available on
[arxiv.org][2] ([1908.01000][1]). This paper is an extension to the [Deep Graph
Infomax][3] paper by Veli&#269;kovi&#263; et al. which is a contrastive method
of unsupervised graph learning. Deep Graph Infomax trains a *node* encoder to
maximize the mutual information between node representation and pooled, global
graph representation. InfoGraph uses a whole graph representation approach.
They first encode an input graph utilizing graph convolutions and
[jumping concatenation][4]. Then the authors generate positive and negative
samples in a batch-wise method. A discriminator is trained on these samples by
feeding it a global representation of a graph and a patch-level representation
of another, possibly different, graph. The discriminators job is to determine
whether or not the patch belongs to the whole graph. All of this is done under
the goal to maximize the amount of mutual information over the positive samples
and minimize the same for the negative samples.

The paper then goes on to purpose a semi-supervised graph learning method with
InfoGraph to learn the labels of a large number of unlabelled graphs from a
small number of labelled graphs. Here the loss function regularized with the
unsupervised loss function in order to learn a good representation for the many
unlabelled graphs while still trying to correctly predict the labels of the few
remaining graphs. In order to prevent negative transfer in this combination of
loss functions, the labelled and unlabelled graphs get their own encoders, that
is to say there is a supervised and unsupervised encoder, respectively. The
unsupervised representation is transferred to the supervised representation
by ensuring that the two encoders have high mutual information at all levels of
representation (in actuality maximum mutual information is tested at a random
level of the representation to reduce computational complexity).

The authors achieve many state-of-the-art results on a number of unsupervised
data sets, e.g. the Reddit-Binary and Reddit-Multi-5K and on the 
semi-supervised data set QM9.

[1]: https://arxiv.org/abs/1908.01000
[2]: https://arxiv.org/
[3]: https://arxiv.org/abs/1809.10341
[4]: https://cousinomath.website/blog/2020/1/26/representing-learning-on-graphs-with-jumping-knowledge-networks

<!--
spell-checker:words Hoffmann Infomax Verma
spell-checker:ignore Veli kovi 
-->
