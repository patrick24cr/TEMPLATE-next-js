import axios from 'axios';

const counterData = new Promise((resolve, reject) => {
  axios.get('../utils/data/data.json').then(resolve).catch(reject);
});

export default counterData;
