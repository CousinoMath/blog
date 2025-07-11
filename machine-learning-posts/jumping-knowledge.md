# Summary #

This paper purposes a short-circuit approach to standard layered node
aggregation for representing graphs in neural networks. This approach gets
state of the art results in a variety of applications.

# Representing Learning on Graphs with Jumping Knowledge Networks #

This is a summary of the paper by Xu, Li, Tian, Sonobe, Kawarabayashi, and
Jegelka available on [arxiv.org][2] ([1806.03536][1]). In graph neural
networks, it is difficult to capture the local topology around a node in the
node’s vector representation. Node aggregation methods are a form of
iterative message passing that pass along, or aggregate, the hidden features of
ever broadening neighborhoods of a node. The iteration over larger
neighborhoods is done via layers in a neural network. A `\(k\)`-layer network
can learn the topology and features of the subtree of height `\(k\)`, rooted at
each node. Despite this concept, experiments have shown that very shallow
aggregation networks perform best, despite deeper aggregations having access to
more information.

The authors show that node aggregation with a `\(k\)`-layer network is
equivalent to a `\(k\)`-step random walk in expectation. And the troubles that
a fixed length random walk has at uncovering the local topology of a node in a
graph is that nodes near clusters don’t need a long walk before the
node’s local topology is uncovered, whereas almost tree-like nodes may
need more steps to fully uncover the lay of the land. The paper purposes adding
short-circuits to the end of the network to each of the `\(k\)`-layers. The
authors show this is equivalent, in expectation, to a mixture of random walks
with lengths at most `\(k\)`. They show that in various examples that their
jumping knowledge node aggregation outperforms the standard version.

[1]: https://arxiv.org/abs/1806.03536
[2]: https://www.arxiv.org/

<!--
spell-checker:words Tian Sonobe Jegelka Kawarabayashi
-->
