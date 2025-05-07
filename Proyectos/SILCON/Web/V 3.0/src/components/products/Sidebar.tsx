import { useEffect, useState } from 'preact/hooks';
import BtnProduct from './BtnProduct';
import { getCategories } from '../../service/products.service';

interface SidebarProps {
   setFilter: (text: string) => void
}

export default function Sidebar({setFilter}: SidebarProps) {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
     async function fetchData() {
       const categories = await getCategories();
       setCategories(categories);
     }
     fetchData();
   }, []);

   return (
      <div class={"grid my-5 gap-1 justify-between grid-cols-" + categories?.length}>
         {categories.map((elem)=> <BtnProduct text={elem} setFilter={setFilter}/>)}
      </div>
  );
}