import { useEffect, useState } from "react";
import axios from "axios";

const useProduct = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get("https://api.gearpro01e.com/products/");
        const foundProduct = res.data.find(p => p.id.toString() === id.toString());
        setProduct(foundProduct || null);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  return product;
};

export default useProduct;
