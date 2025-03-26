import data from './data.json';

export const categories = data.map((product) => product.category);
export const uniqueWords = categories.filter((word, index) => categories.indexOf(word) === index);


export default data;
