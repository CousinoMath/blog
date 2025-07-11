# Summary #

In this paper, the authors use debate dynamics to evaluate the truth of queries
against a knowledge graph. Two agents are employed to generate arguments
regarding the query, one agent argues for the query and the other argues
against. Then a binary classifier acts a judge, ruling on the query based upon
the arguments generated. These generated arguments provide some interpretation
for the decisions made by this three-party model. The authors' also achieve
state of the art results with their work.

# Reasoning on Knowledge Graphs with Debate Dynamics #

This a summary of an article by Hildebrandt, Serna, Ma, Ringsquandl, Joblin,
and Tresp available on [arxiv.org][2] ([2001.00461][1]). The article deals with 
knowledge graphs which store facts as triples `\((s, p, o)\)` where the subject
`\(s\)` and object `\(o\)` are nodes in the graph and the predicate `\(p\)`
denotes the type of edge connecting the two. Most real-world knowledge graphs
are incomplete, in that they are missing true facts, or contain false facts.
Machine learning algorithms use connectivity patterns to resolve these problems
by embedding the entities and predicates into low dimensional vector spaces.
The paper introduces a method of triple classification as true or false using
reinforcement learning via debates, which they call “Reveal Relations
using Debate Dynamics” or R2D2.

The paper’s model involves two agents that utilize reinforcement learning
generate arguments for and against a query triple
`\(q\equiv (s_{q}, p_{q}, o_{q})\)` with one agent that argues for and the
other that argues against. The arguments occur over a fixed number of rounds
`\(N\)` each consisting of fixed length graph traversals `\(T\)` that start at
the subject of the query `\(s_{q}\)`. This sequence of arguments `\(\tau\)` and
the query is then presented to a feed-forward neural network classifier called
the judge which not only scores the arguments as a fuzzy truth value
`\(t_{\tau}\in (0, 1)\)` but also rewards the two agents for each argument they
produce based on the arguments’ contribution to the final fuzzy truth
value.

For a knowledge graph `\(\mathcal{KG}\)`, the model is trained on the expanded
graph `\(\mathcal{KG}_{+}\)` which is the original graph augmented with
corrupted triples `\(\mathcal{KG}_{C}\equiv\{(s, p, \tilde{o})\mid
(s, p, \tilde{o})\notin \mathcal{KG}\wedge \exists o\left((s, p, o)\in
\mathcal{KG}\right)\}\)`, which are triples not in the original graph but whose
subject and predicate are part of some original triple. In the first epochs of
training, the agents’ weights are frozen to train the judge to begin to
offer meaningful rewards, as training the judge does not require the agents be
tuned to their task. Then the model goes into an alternate training scheme
where either the judge or the agents are trained.

Their model achieves state of the art results on the FB15k-237 data set and,
with the help of TransE embeddings, on the WN18RR data set. The authors even
did a survey evaluating the efficacy of the agents’ arguments regarding
ten queries. They found that the judge’s classifications matched well
with the participants evaluations.

[1]: https://arxiv.org/abs/2001.00461
[2]: https://arxiv.org/

<!--
spell-checker:words Hildebrandt Joblin Ringsquandl Serna Tresp 
spell-checker:ignore mathcal 
-->
