
# Python program to read
# json file
  

from cProfile import label
from sqlalchemy import null
import scipy.cluster.hierarchy as sch
import json,math,csv
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cluster import AgglomerativeClustering
  
# Opening JSON file
f = open('src\\views\\admin\\bins.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
y=[]

c=[]
# Iterating through the json
# list
print(len(data['BINS']))
for j in range (0,len(data['BINS'])):
    x=[]
    x.append(data['BINS'][j]['LATITUDE'])
    x.append(data['BINS'][j]['LONGITUDE'])
    y.append(x)
    print(x)
    
    
    
print(y)
X=np.array(y)
cluster = AgglomerativeClustering(n_clusters=4, affinity='euclidean', linkage='ward')
cluster.fit_predict(X)
print("gg")
print(cluster.labels_)

c1=0
c2=0
c3=0
c4=0
for i in cluster.labels_:
    if(i==0):
        c1=c1+1
    if(i==1):
        c2=c2+1
    if(i==2):
        c3=c3+1
    if(i==3):
        c4=c4+1
        
        

with open('src\\views\\admin\cluster.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow([c1,c2,c3,c4])
    file.close()


for a in range(0,len(cluster.labels_)):
    data['BINS'][a]['CLUSTER']=int(cluster.labels_[a])
    

data1 = {1: c1, 2: c2, 3: c3, 4: c4}
    
with open("src\\views\\admin\\cluster.json", "w") as jsonFile:
    json.dump(data1, jsonFile)
    
with open("src\\views\\admin\\bins.json", "w") as jsonFile:
    json.dump(data, jsonFile)


plt.scatter(X[:,0],X[:,1],c=cluster.labels_, cmap='rainbow')
plt.pause(0)
  
# Closing file
f.close()