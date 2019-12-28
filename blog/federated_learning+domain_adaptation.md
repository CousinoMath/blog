# [Private Federated Learning with Domain Adaptation][1] #

This short work, available on [arXiv.org][2] ([1912.06733][1]), by Peterson,
Kanani, and Marathe at Oracle Labs is an effort to bring privacy as well as
computing at the edge to machine learning. The idea is that every user has two
models: a private model and a general, public model. The private model is
trained on the user&rsquo;s private data. Whereas the public model is built
using federated learning with differential privacy, which is to say a model with
a prearranged structure that is trained on the fuzzed data&mdash;data plus
noise&mdash;from every user. Then a mixture of experts approach is used to
combine the results from a user&rsquo;s private model and the public model, via
a simple weighted average, to get the final output for the user&rsquo;s input.
In the federated learning literature, this is collaborative model-building that
has been augmented with per-user domain adaptation.

So there is a general, public model, `\(M_{G}\)` with parameters
`\(\Theta_{G}\)`, such that `\(\hat{y}_{G}(x) = M_{G}(x; \Theta_{G})\)`. This
model shared between all users, and is trained using federated learning with
differentially private stochastic gradient descent. The `\(i\)`th user has their
own private model `\(M_{U_{i}}\)` with parameters `\(\Theta_{U_{i}}\)`, such
that `\(\hat{y}_{U_{i}}(x) = M_{U_{i}}(x; \Theta_{U_{i}})\)`. Each user model is
private to the user and is updated exactly on data from the user with no worries
about privacy. The final output for user `\(i\)` is `\[\hat{y}_{i}(x) = 
\alpha_{i}(x) M_{G}(x; \Theta_{G}) + (1 - \alpha_{i}(x))
M_{U_{i}}(x; \Theta_{U_{i}})\text{.}\]` In the mixture of experts literature, the
weight `\(\alpha_{i}(x)\)` is called the *gating function*. For this paper, the
gating function is simply `\(\sigma(w_{i}^{T} x + b_{i})\)` where `\(\sigma\)`
is the sigmoid function, and `\(w_{i}\)` and `\(b_{i}\)` are learned weights and
biases. So the final result `\(\hat{y}_{i}\)` dependes upon the learned
parameters `\(\Theta_{G}\)`, `\(\Theta_{U_{i}}\)`, `\(w_{i}\)`, and `\(b_{i}\)`.

The authors evaluate their model on two data sets: (1) a synthetic data set
consisting of two user inputs coming from two 2D Gausiann distributions with
outputs being a nonlinear, real-valued function of two variables and (2) a
domain adaptation data set for spam detection, released as part of the ECML PKDD
2006 Discovery Challenge. In both examples, the paper&rsquo;s model, referred to
as federated learning with domain experts, is compared to a simpler
differentially private, federated learning model with various levels of noise
introduced in the federation: no noise (`\(\sigma = 0\)`), low noise
(`\(\sigma = 2\)`), and high noise (`\(\sigma = 4\)`). In both cases, the
accuracy of the simpler model degrades much worse than that of the paper&rsquo;s
model as the noise introduced in the shared gradient updates increases.

[1]: https://arxiv.org/abs/1912.06733
[2]: https://arxiv.org/