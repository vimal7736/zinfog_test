import axios from 'axios';

const BASE_URL = 'https://accesslabbeta.stagingserverhub.com/api/b2b';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const login = async (credentials) => {
    console.log('Login request payload:', credentials);  
  
    try {
      const response = await api.post('/login', credentials);
      console.log('Login response:', response.data);  
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);  
      throw new Error('Failed to login: ' + error.message);
    }
  };

export const getOrderDetails = async (orderId, userId, pageNumber) => {
  try {
    const params = {
      user_id: userId,
      page_number: pageNumber,
    };
    const response = await api.post(`/order/details/${orderId}`, params);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch order details: ' + error.message);
  }
};

export const postMessage = async (messageData) => {
  try {
    const response = await api.post('/post/message', messageData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to post message: ' + error.message);
  }
};

export const listMessages = async () => {
  try {
    const response = await api.get('/list/message');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch messages: ' + error.message);
  }
};

export const searchOrder = async (query) => {
  try {
    const response = await api.get(`/search/orders?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search for orders: ' + error.message);
  }
};

export const filterOrder = async (filters) => {
  try {
    const response = await api.post('/filter/orders', filters);
    return response.data;
  } catch (error) {
    throw new Error('Failed to filter orders: ' + error.message);
  }
};

export const sendOtpForPasswordReset = async (email) => {
  try {
    const response = await api.post('/send/otp', { email });
    return response.data;
  } catch (error) {
    throw new Error('Failed to send OTP for password reset: ' + error.message);
  }
};

export const resetPassword = async (resetData) => {
  try {
    const response = await api.post('/reset/password', resetData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to reset password: ' + error.message);
  }
};

export const logout = async () => {
  try {
    const response = await api.post('/session/logout');
    return response.data;
  } catch (error) {
    throw new Error('Failed to logout: ' + error.message);
  }
};

export const searchSuggestion = async (query) => {
  try {
    const response = await api.post(`/search/datas?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch search suggestions: ' + error.message);
  }
};
