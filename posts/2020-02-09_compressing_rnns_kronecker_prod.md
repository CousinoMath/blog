# Summary #

In this paper, the authors use Kronecker products as drop in replacements for recurrent neural perceptron matrices to achieve a 16-38x compression ratio while scarificing small amounts of accuracy.

# Compressing Recurrent Neural Networks with Kronecker Products #

This is a summary of a paper availabe on [arxiv.org][2] ([1906.02876][1]). The
authors goal is to compress recurrent neural networks (RNN) for embedded and
internet of things (IoT) devices. The Kronecker product of
`\(A\in\mathbb{R}^{m_{1}\times n_{1}}\)` and
`\(B\in\mathbb{R}^{m_{2}\times n_{2}}\)` is
`\(A\otimes B\in\mathbb{R}^{(m_{1} m_{2})\times (n_{1} n_{2})}\)` defined as
follows.

`\[A\otimes B\triangleq
\begin{pmatrix}
b_{11} C & b_{12} C & \cdots & b_{1n_{1}} C \\
b_{21} C & b_{22} C & \cdots & b_{2n_{1}} C \\
\vdots & \vdots & \ddots & \vdots \\
b_{m_{1}1} C & b_{m_{1} 2} C & \cdots & b_{m_{1} n_{1}} C \\
\end{pmatrix}\]`

`\(A\)` and `\(B\)` are said to be the Kronecker factors of `\(A\otimes B\)`.
And Kronecker products are computed right-to-left
`\(A\otimes B\otimes C\triangleq A\otimes (B\otimes C)\)`. By using Kronecker
products in both the input-hidden and hidden-hidden matrices in RNN, the authors
achieve at least `\(16\times\)` compression. Given a `\(256\times 256\)` matrix,
it can be Kronecker factored into a `\(32\times 8\)` matrix times a 
`\(8\times 32\)` matrix, achieving a `\(128\times\)` compression. Further, there
are ways to do matrix-vector products when the matrix is a Kronecker product
without needing to recompute the original matrix.

A traditional RNN perceptron can be expressed as
`\[h_{t} = f\left(\begin{pmatrix} W_{x} & W_{h}\end{pmatrix}
\begin{pmatrix} x_{t} \\ h_{t-1}\end{pmatrix}\right)\]` where the input-hidden
matrix `\(W_{x}\in\mathbb{R}^{m\times n}\)`, the hidden-hidden (or recurrent)
matrix `\(W_{h}\in\mathbb{R}^{m\times m}\)`, the input variables
`\(x_{t}\in\mathbb{R}^{n}\)`, and the hidden variables
`\(h_{t}\in\mathbb{R}^{m}\)`. With a Kronecker product RNN perceptron, we can
factor the matrix into `\(W_{1}\otimes W_{2}\)` where
`\(W_{1}\in\mathbb{R}^{m_{1}\times n_{1}}\)` and
`\(W_{2}\in\mathbb{R}^{m_{2}\times n_{2}}\)` with `\(m_{1} m_{2} = m\)` and 
`\(n_{1} n_{2} = m + n\)`. This perceptron can be trained along with the rest of
the network, rather than starting with a trained network and Kronecker factor
its matrices. There is also a hybrid approach to allow further control of the
level of compression which decomposes the coefficient matrix as follows
`\[h_{t} = f\left(\begin{pmatrix} A' \\ W_{1}\otimes W_{2}\end{pmatrix}
\begin{pmatrix} x_{t} \\ h_{t - 1}\end{pmatrix}\right)\text{.}\]` where
`\(A'\in\mathbb{R}^{r\times (m + n)}\)`,
`\(W_{1}\in\mathbb{R}^{m_{1}\times n_{1}}\)`,
`\(W_{2}\in\mathbb{R}^{m_{2}\times n_{2}}\)` with `\(m_{1} m_{2} = m - r\)` and
`\(n_{1} n_{2} = m + n\)`. In their experiments, the authors achieve between a
`\(16--38\times\)` compression ratio with their techniques while maintaining
state-of-the-art accuracy over pruning and low-rank matrix factorization, and
acceptable running times.

[1]: https://arxiv.org/abs/1906.02876 
[2]: https://arxiv.org/