# Summary #

This paper presents a general convolution operation on tensors and shows that
it generalizes those used in convolutional neural networks over images and
graphs as well as convolutions used in attention convolutions.

# Convolution, Attention, and Structure Embedding #

This is a summary on the [theoretical paper][1] by Jean-Marc Andreoli available
on [arxiv.org][2] ([1905.01289][1]). We first need to introduce some language
about tensors. The shape of a tensor is a list of natural numbers
`\(\mathcal{S} = \langle \mathcal{S}_{1}, \dots, \mathcal{S}_{S}\rangle\)`. We
write `\(a: \mathcal{S}\)` to say that tensor `\(a\)` has shape
`\(\mathcal{S}\)`. Index the elements in the tensor `\(a\)` using the index set
`\(\overline{\mathcal{S}}\equiv\prod_{k=1}^{S} \{1, \dots, \mathcal{S}_{k}\}\)`
with its size
`\(|\overline{\mathcal{S}}|\equiv \prod_{k=1}^{S} \mathcal{S}_{k}\)`. For two
tensor shapes `\(\mathcal{S}\)` and `\(\mathcal{T}\)`, we denote their
concatenation as `\(\mathcal{S} \mathcal{T}\)`. Some basic tensor operations
are the following.

* Slicing: for `\(a: \mathcal{S}\mathcal{T}\)` and
  `\(s\in\overline{\mathcal{S}}\)`, the result `\(a_{s}: T\)` is defined as
  `\((a_{s})_{t}\equiv a_{s t}\)`.
* Flattening: for `\(a:\mathcal{S}\mathcal{T}\)` and
  `\(\omega:\overline{\mathcal{S}}\to \{1, \dots, |\overline{\mathcal{S}}|\}
  \)` bijective, the result `\(a^{[\omega]}: \langle |\overline{\mathcal{S}}|
  \rangle T\)` is defined as `\((a^{[\omega]}_{\langle k\rangle t}\equiv
  a_{\left(\omega^{-1} k\right) t})\)`.
* Outer product: for `\(a:\mathcal{S}\)` and `\(b:\mathcal{T}\)`, the result
  `\(a\otimes b: \mathcal{S} \mathcal{T}\)` is defined as `\((a\otimes b)_{s t}
  \equiv a_{s} b_{t}\)`.
* Mixed product: for `\(K\)` a natural number and tensors
  `\(a: \langle K\rangle S\)` and `\(b: \langle K\rangle T\)`, the result
  `\(a\circ b: S T\)` is defined as `\(a\circ b\equiv \sum_{k} a_{k}\otimes
  b_{k}\)`.

Note that flattening can turn a generic tensor into a matrix or vector, a
process referred to as *matricization* or *vectorization* respectively.

*Convolutions* of basis `\(A : \langle K, M, N\rangle\)` and parameter
`\(\Theta : \langle K, P, Q\rangle\)` are linear transformations which map
a bundle of inputs `\(x: \langle M, P\rangle\)` into a bundle of outputs
`\(y: \langle N, Q\rangle\)` according to the rule
`\[y = \sum_{k} A_{k}^{T} x \Theta_{k}\]`. For a convolutional neural network,
we employ a grid-type convolution of tensors. For images, the grid is an index
set associated with a two natural numbers. We need a bijective mapping
`\(\omega: \overline{\mathcal{S}}\to\{1, \dots, |\overline{\mathcal{S}}|\}\)`
between the index set, or pixel locations, and their enumeration. An embedding
of the image would be a tensor with the shape `\(S\langle L\rangle\)` where
each pixel would be considered as a vector of length `\(L\)`. This embedding
can be matricized (turned into a matrix via flattening) into a matrix of shape
`\(\langle |\overline{\mathcal{S}}|, L\rangle\)`. With 
`\(N = |\overline{\mathcal{S}}|\)` and `\(d\in\mathbb{N}^{|\mathcal{S}|}\)`
being any sequence of naturals of length `\(|\mathcal{S}|\)`, a *shift
matrix* `\(\mathcal{A}_{d}\)` is a matrix of shape `\(\langle N, N\rangle\)`,
where `\((\mathcal{A}_{d})_{m n}\equiv \chi [\omega^{-1} n - \omega^{-1} m =
d]\)` (with `\(chi [\cdot]\)` being the characteristic function, or [Iverson
bracket][3]). A shift matrix is the adjacency matrix of the relation
“node `\(n\)` is obtained from node `\(m\)` by a shift of `\(d\)` on the
grid” Now a *grid convolution* is of size `\(K\)` and basis `\(A\)` (a
tensor of shape `\(\langle K\rangle S\)` which elements form a basis for
`\(S\)`) to be such that for each `\(k\in\{1, \dots, K\}\)`,
`\(A_{k} =\mathcal{A}_{\Delta_{k}}\)` for some
`\(\Delta_{k}\in\mathbb{N}^{|\mathcal{S}}\)`. Grid convolutions become
`\[y_{\omega (s)} = \sum_{k} x_{\omega (s - \Delta_{k})} \Theta_{k}\]` for any
node `\(s\in\overline{\mathcal{S}}\)`. In convolutional neural networks,
`\(\Delta\)` can be taken to be a cuboid with possibly different strides
`\(\delta_{i}\)` and offsets `\(\epsilon_{i}\)` in each grid dimension.
Examples of variant grid convolution kernels that don't preserve the grid are
pooling and dilating layers where the output grid is a sub-sample of the input.
However, non-linear layers such as max pooling are not covered in this
generalization.

The paper then goes on to generalize graph convolutions. Also presented are
attentions convolutions as context-aware convolutions with a parameterized
attention mechanism which depends upon two inputs and a parameter. Grid and
graph convolutions are therefore degenerate attention convolutions which only
depend upon their unlearned parameter.

[1]: https://arxiv.org/abs/1905.01289
[2]: https://arxiv.org/
[3]: https://en.wikipedia.org/wiki/Iverson_bracket

<!--
spell-checker:words Andreoli Iverson convolutional matricization matricized 
spell-checker:ignore mathbb mathcal 
-->