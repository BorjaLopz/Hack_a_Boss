import { useEffect, useState } from "react";

import { API_URL } from "../../config";

function useGetProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetch(`${API_URL}`);
        const data = await resp.json();

        const products = data.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          description: p.description,
          category: p.category,
          image: p.image,
        }));

        setProducts(products);
      } catch (e) {
        console.error(e.message);
      }
    }
    getProducts();
  }, []);

  return products;
}

export default useGetProducts;
