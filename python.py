import numpy as np

A = np.array([[1, 2], [3, 4], [5, 6]])  # A non-square matrix
A_pseudo = np.linalg.pinv(A)  # Compute pseudo-inverse

print(A_pseudo)
print(A)