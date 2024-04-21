import { useEffect, useState } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get categories

  const getCategories = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/getall-category`);
      setCategories(data?.category);
    } catch (error) {}
  };
  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
