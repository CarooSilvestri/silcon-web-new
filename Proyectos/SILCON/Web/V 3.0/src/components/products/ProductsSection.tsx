import { useEffect, useState } from 'preact/hooks';
import CardProduct from './CardProduct';
import { getAllProducts, getFilteredProducts } from '../../service/products.service';

interface ProductsSectionProps {
  filter: string;
}

export default function ProductsSection({filter}: ProductsSectionProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let products;
      if (!filter) {
        products = await getAllProducts();
      } else {
        products = await getFilteredProducts(filter);
      }
      setData(products);
    };
  
    fetchData();
  }, [filter]);
  

  console.log(data)
  return (
    <main class="justify-center">
      <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((product, index) => (
          <CardProduct prod={product} key={product+index} />
        ))}
      </div>
    </main>
  );
}
