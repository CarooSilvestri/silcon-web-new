import Sidebar from './Sidebar';
import ProductsSection from './ProductsSection';
import { useState } from 'preact/hooks';

export default function SectionsWrapper() {

    const [filter, setFilter] = useState('')

    return (
        <div>
            <Sidebar setFilter={setFilter}/>
            <ProductsSection filter={filter}/>
        </div>
  );
}
