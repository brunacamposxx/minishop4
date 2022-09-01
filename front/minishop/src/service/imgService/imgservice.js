import axios from 'axios';

const url = 'process.env.REACT_APP_API_URL/api/products/url';

export async function imgUpload(file) {
  const res = await axios.get(`${url}?postModel=${file.name}`);
  const urlUpload = res.data;

  const formData = new FormData();
  formData.append('file', file);

  axios.put(urlUpload, formData);

  return urlUpload.split('?')[0];
}
