# Excerpt #

This paper is about dealing with attacks on classifiers, particularly neural
network classifiers which are most vulnerable. The threat model is that an
adversary has tampered with the input to your classifier, and you want to know
what would have been the correct label given by your classifier to the true
input. The defense is that you would be happy knowing the top 5, say, labels
predicted by your classifier for inputs around the tainted one.

# [Certified Robustness for Top `\(k\)` Predictions][1] #

This is a summary of the paper by Jia, Cao, Wang, and Gong available on
[arxiv.org][2] ([1912.09899][1]). The paper is about dealing with
adversarial attacks against classifiers, i.e. someone sending a slightly
perterbed input to the classifier `\(x + \delta\)` instead of the actual input
`\(x\)` to get a deliberately misleading result. So a classifier `\(f\)` maps
some feature space into a discrete set of labels. The attacker is messing with
our input, so we can no longer be certain what the correct label is for the
received input. Because we may be dealing with a recommendation engine or search
results&mdash;where the top `\(k\)` results are relevant, we cannot just find
the most probable label to be applied to our input. What they do in the paper is
to gaurantee that a particular label `\(l\)` is amongst the top `\(k\)`
predictions of the classifier `\(f\)` so long as any true input `\(x\)` is
disturbed by the attacker with some `\(\delta\)` whose `\(\ell_{2}\)`-norm is
less than a *certified radius*, `\(R_{l}\)`. They do this by adopting
the process of *randomized smoothing*, which they developed in a previous work
for when the particular label is amongst the top `\(k=1\)` predictions.

The process of randomized smoothing transforms a classifier `\(f\)` into a
&ldquo;smoothed&rdquo; classifier `\(g\)`&mdash;which upon being given an input, 
repeatedly runs it through the classifier `\(f\)` but with some added random
noise each time, and outputs the `\(k\)` labels with the highest probabilities
of occuring `\(f\)` on an input near `\(\tilde{x}\)`. How this works is that the
the classifier `\(f\)` is repeatedly sampled, Monte Carlo style, with some
Gaussian noise applied to the given input `\(\tilde{x}\)`. So you get the
classifications `\(f(\tilde{x}+\epsilon_{1})\)`, &hellip;,
`\(f(\tilde{x}+\epsilon_{n})\)`, with each `\(\epsilon_{j}\sim
N(0, \sigma^{2}I)\)` and count the number of times each label in your
classification gets applied to the noisy inputs. Take the top `\(k + 1\)` most
frequently seen labels and do some hypothesis testing to ensure that the top
`\(k\)` found via Monte Carlo method are reasonable. If so, return the `\(k\)`
labels with the highest frequency of occurance; and abstain otherwise. Notice
that this process has no regard for the structure of `\(f\)`, rather it only
depends upon the outputs.

The paper goes on to present an algorithm for generating a lower bound on the
certified radius, `\(R_{l}\)`, which ensures that `\(l\)` is amoung the top
`\(k\)` labels provided the attacker&rsquo;s perterbation `\(\delta\)` has an
`\(\ell_{2}\)`-norm less than `\(R_{l}\)`. This gives us a notion of how much we
can trust that the true label `\(l\)` belongs amongst the top `\(k\)` results,
how robust any particular classifer is against attacks, and how to evaluate
which amoung many classifiers is the most robust. The algorithm can produce a
lower bound that is arbitrarily close to the true certified radius, for which
they find a non-analytic formula and prove to be tight. Again, this does not
take the structure of `\(f\)` into consideration.

[1]: https://arxiv.org/abs/1912.09899
[2]: https://arxiv.org/