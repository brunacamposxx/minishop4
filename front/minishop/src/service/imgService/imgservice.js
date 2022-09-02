import axios from 'axios';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_API_URL;

export async function imgUpload(file) {
  const urlP = `${url}/api/products/url`;
  const res = await axios.get(`${urlP}?postModel=${file.name}`);
  const urlUpload = res.data;

  const formData = new FormData();
  formData.append('file', file);

  axios.put(urlUpload, formData);

  return urlUpload.split('?')[0];
}
