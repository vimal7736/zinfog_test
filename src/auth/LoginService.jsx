import axios from 'axios';

const apiUrl = "/api/b2b/login";


const postData = {
  client_id: 'ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa',
  client_secret: 'Yjq2KXplGi6Niarcp1gn6PP7OrMDlP',
  user_name: 'daya',
  password: '123',
  grant_type: 'client_credentials'
};

const loginToApi = async () => {
  try {
    const response = await axios.post(apiUrl, postData);
    console.log('API Response:', response.data);
    // Handle the response data as needed
  } catch (error) {
    console.error('API Error:', error);
    // Handle errors
  }
};

export default loginToApi;
