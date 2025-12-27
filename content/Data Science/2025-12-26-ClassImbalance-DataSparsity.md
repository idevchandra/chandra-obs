---
title: Class Imbalance and Data Sparsity
date: 2025-12-26 11:58:47 +00:00
tags:
  - AI-ML
  - Data-Science
---
# 1. Training and Test Dataset
When we prepare Training and Test Datasets we may end up with some classes that do not have any data in it. For example if we are working on Car Model Classifier or a Dog Breed Classifier, while preparing `20%` dataset, we may endup with no data in testing dataset when training dataset has very few images. This is called Class Imbalance and Data Sparsity

## Class Imbalance
Some dog breeds (classes from now on) have many images, other have very few. This causes problems during training because the model learns the "big" classes better.

## Sparse Classes
Sparse Classes or Underrepresented Classes - we have some classes only with very few images. 

These classes are usually called 
- Rare Classes
- Low-Support Classes
- Few-Shot Classes

## Empty Test Classes
When a class have too few images, a random 20% split produces no test samples (`indian_pariah`, `sharpei`, `kobai` etc.). That is what we also ran into. This is called

- Zero-shot test classses
- Missing evaluation samples

---
# 2. What a data engineer would do
A data engineer (or ML engineer) would typically choose one of these strategies:

## Collect more data
This is the most robust fix, but not always possible.

## Remove classes with too few samples
If a class has fewer than, say, **20 to 30 images**, it's often excluded from the dataset.

## Augment the small classes
Artificially increase the number of images by

- flips
- rotations
- color jitter
- random crops

## Use stratified splitting
Instead of random splitting, ensure **every class** gets at least one test sample. Notice that if a class has one image, then test data also would have one test image.

## Merge similar classes
If two classes are extremely close, merge them.

---

# 3. How to proceed for your model

In the situations of this kind of training and test data problems, approach these steps.
## Step 1: Identify tiny classes
List all classes with fewer than ~20 images.

## Step 2: Decide what to do with them
You have three choices:

- **Option A: Remove them from the dataset.** This gives you a cleaner, more stable model.
- **Option B: Keep them but augment heavily.** If you want to keep all breeds, you'll need strong augmentation.
- **Option C: Keep them only in training, not in testing.** This is useful if you want the model to “know" the class but don't need to evaluate it.

## Step 3: Use stratified splitting
Instead of random 20%, use a split that guarantees:

- every class has training samples  
- every class has test samples (if you want that)

## Step 4: Train the model normally
Once your dataset is balanced enough, you can proceed with:

- transfer learning (ResNet, MobileNet, EfficientNet)
- fine‑tuning
- augmentation

## Step 5: Evaluate carefully
If some classes still have very few test samples, use:

- **macro‑averaged accuracy**
- **per‑class F1 scores**

This prevents big classes from dominating the metrics.
