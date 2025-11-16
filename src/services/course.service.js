import axios from 'axios';
import { publicAxiosInstance } from './api/axios.instance';

const courseService = {};

courseService.getAll = async () => {
  const res = await publicAxiosInstance.get('/api/courses/');

  return res.data.courses;
};
courseService.getById = async (data) => {
  //   console.log(data);
  const {
    params: { id },
  } = data;
  const res = await publicAxiosInstance.get(`/api/courses/${id}`);
  const course = res.data.course;
  return { course };
};

export default courseService;
