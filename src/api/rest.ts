import { PreTrainedModel } from '@/types';
import axios from 'axios';

const API_PREFIX = `${import.meta.env.VITE_API_URL}/api`;

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_PREFIX,
});

export const healthCheck = async () => {
  const res = await axios.get('/health');
  return res;
};

export const getPreTrainedModels = async (): Promise<PreTrainedModel[]> => {
  const res = await axiosInstance.get('/history/pretrained_models');
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  return res.data;
};