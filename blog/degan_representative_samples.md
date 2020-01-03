# Exceprt #

The paper introduces a three-party GAN: a generator, discriminator, and pretrained classifier which is used to generate representative samples of a secondary, possibly unrelated, data set. These generated images can then be used for knowledge distillation to a student classifier or for incremental class learning.

# Data-Enriching GAN for Retrieving Representative Samples from a Classifier #

This is a summary of the article by Addepalli, Nayak, Chakraborty, and Babu
available on [arxiv.org][2] ([1912.11960][1]). The authors are using a
pre-trained classifier, trained on a primary data set, inside a generative
adversarial neural network (GAN) to generate representative samples from the
classes of the classifier. The representative samples allow us to do knowledge
distillation or incremental class learning on another, possibly unrelated,
secondary data set, in a way that does not reuse the primary data set. This is a
three-party GAN with a generator that takes a random multidimensional Gaussian
to produce an image, which then gets fed into the pre-trained classifier and
gets fed, along with images from a secondary data set into a discriminator. The
losses from the classifier and discriminator are used to train the generator and
discriminator, while the parameters of the classifier remain fixed. The role of
the classifier is to ensure that the generated data has expected features from
the primary data set while also affirming that the distribution of generated
images is balanced across all classes of this data set. The discriminator&rsquo;s
role is to ensure that the generated data is close to that of the secondary
data set.

The loss for this data-enriching GAN is formulated from a randomly sampled
vector `\(Z\)` from the latent space, the distribution of the primary data set
`\(\mu_{\textrm{data}}\)`, the number of images `\(n\)` per batch, the number of
classes `\(k\)` in the primary data set, and two positive hyperparameters
`\(\lambda_{e}\)` and `\(\lambda_{d}\)` which control the entropy loss and
diversity loss respectively. The generator is denoted by `\(G\)`, the
discriminator by `\(D\)`, and the classifier as `\(C\)`. With
`\(Y\equiv C(G(Z))\)` being defined as the output of the classifier and
`\(w\equiv E(Y) = E(C(G(Z)))\)` being defined as the expected output of the
classifier across a batch of samples. The losses used to train the
data-enriching GAN are as follows:

* *Adversarial Loss* (`\(L_{\textrm{Adv},\textrm{real}}\)` and
  `\(L_{\textrm{Adv}, \textrm{fake}}\)`) assuring that the distribution of the
  generated images is close to that of the secondary data set.
  `\[L_{\textrm{Adv},\textrm{real}}\equiv E_{X\sim\mu_{\textrm{data}}}(\log D(X))\]`
  `\[L_{\textrm{Adv},\textrm{fake}}\equiv E(\log (1 - D(G(Z))))\]`
* *Entropy loss* (`\(L_{G,\textrm{entropy}}\)`) at the output of the classifier
  to minimize the entropy of individual samples and ensure that each generated
  sample belongs to one of the classifier with high confidence.
  `\[L_{G,\textrm{entropy}}\equiv E_{Z}\left(-\sum_{j=0}^{k} y_{j}\log y_{j}\right)\]`
* *Diversity loss* (`\(L_{G,\textrm{diversity}}\)`) also at the output of the
  classifier to see that the entropy of the expected output of the classifier
  across a batch is uniform across classes.
  `\[L_{G,\textrm{diversity}}\equiv -\sum_{j=0}^{n} w_{j} \log w_{j}\]`

The equations describing the discriminator loss `\(L_{D}\)` and the generator
loss `\(L_{G}\)` are as follows.
`\[L_{D}\equiv L_{\textrm{Adv},\textrm{real}} + L_{\textrm{Adv},\textrm{fake}}\]`
`\[L_{G}\equiv L_{\textrm{Adv},\textrm{fake}} + \lambda_{e} L_{G,\textrm{entropy}} - \lambda_{d} L_{G,\textrm{diversity}}\]`
As in GAN training, alternately maximize `\(L_{D}\)` while freezing the
generator parameters and minimize `\(L_{G}\)` while freezing the discriminator
parameters.

For knowledge distillation, the idea is to have already trained a teaching
classifier, use that teacher in the data-enriching GAN to generate new images
with the help of a secondary data set, then train a student network on the
generated images. This student network can then be tested against the testing
data from the secondary data set. Among other examples, the authors use CIFAR-10
as the primary data set for the teacher, CIFAR-100 as the secondary data set,
and a student network architecture that is only half the capacity to get a
noticeably better accuracy than another classifier trained only the secondary
data set and another, traditional GAN. This holds true when the secondary
data set is switched to the unrelated Street View House Numbers data set.

[1]: https://arxiv.org/abs/1912.11960
[2]: https://arxiv.org/