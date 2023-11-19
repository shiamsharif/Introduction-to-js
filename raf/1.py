import numpy as np
import matplotlib.pyplot as plt

x = np.array([1,2,3,4,5]) 
y = np.array([7,14,15,18,19]) 
n = np.size(x) 
x_mean = np.mean(x) 
y_mean = np.mean(y) 
x_mean,y_mean 

Sxy = np.sum(x*y)- n*x_mean*y_mean 
Sxx = np.sum(x*x)-n*x_mean*x_mean 

b1 = Sxy/Sxx 
b0 = y_mean-b1*x_mean 
print('slope b1 is', b1) 
print('intercept b0 is', b0) 

plt.scatter(x,y) 
plt.xlabel('Independent variable X') 
plt.ylabel('Dependent variable y')