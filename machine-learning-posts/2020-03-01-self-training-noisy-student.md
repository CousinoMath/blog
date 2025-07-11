# Summary #

By iteratively do self-training with a student-teacher approach, the authors of
this paper achieve state-of-the-art results on ImageNet and its robustness
variants.

# Self-Training with Noisy Student #

This is a summary of a paper by Xie, Luong, Hovy, and Le on [arxiv.org][2]
([1911.04252][1]). This paper is interesting because they used unlabeled images
to improve ImageNet classification. They train a teacher model on labeled
images, use the teacher to generate pseudo-labels on the unlabeled images, and
train a noised student model on the labeled and pseudo-labeled images. This
process is iterated by making an old student a new teacher with a new student.
The teacher is not noised when generating pseudo-labels in order to keep them
as accurate as possible. The student is noised with data augmentation via 
RandAugment to provide input noise and with dropout and stochastic depth to
provide model noise. This makes the student, which is often a larger model than
the teacher, more accurate and more robust than its teacher. Finally, the
authors employ data filtering and class balancing by filtering images that the
teacher model has low confidence in, and duplicate unlabeled images in classes
where there aren’t enough images.

The architecture used are EfficientNet variants, a smaller variant for the
teacher and a larger variant for the student. This noisy student approach
produced state-of-the-art results on ImageNet. It even beats out FixRes
ResNeXt-101 WSL which employs 3.5B images with tags while using only 300M
unlabeled images. Further, Noisy Student gets state-of-the-art robustness
results on ImageNet-A, ImageNet-C, and ImageNet-P.

[1]: https://arxiv.org/pdf/1911.04252.pdf
[2]: https://arxiv.org/

<!--
spell-checker:words Hovy Luong arxiv 
-->
