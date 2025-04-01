import data from './data.json';

export const categories = data.map((product) => product.category);
export const uniqueWords = categories.filter((word, index) => categories.indexOf(word) === index);
export const countProduct = categories.reduce((acc, currentCount) => {
  acc[currentCount] = (acc[currentCount] || 0) + 1;
  return acc
}, {});

export const nameCount = uniqueWords.map((name) => ({
  name: name,
  count: countProduct[name]
}));

export default data;
