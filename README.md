A little playground with machine learning in nodejs.

A simple kNN service, comparing using Euclidean distances, returning top k closest objects.



### Install
` npm install `

### Run
`node app.js` or `PORT=YOUR_PORT node app.js`

### Setup
In `mlaas.js` there is a const for config:

limit => Limit of k, i.e. with k = 10 the output show value of k 1 to k 10 (only odd numbers)

insertK => For which k value the algorithm will insert on dataset, i.e, with insertK = 3 the algorithm insert this point with class in current dataset.  

### Example
http://localhost:3000/knn?x=40&y=1

### Dataset
You can create a simple dataset in https://www.json-generator.com/

There is a file in `/dataset/json-generator.json` with rule to make a dataset with two classes (NaN and none)
