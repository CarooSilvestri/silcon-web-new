interface WiringItem {
    unique: string;
    group: string;
  }
  
export interface Product {
    id: string;
    type: string;
    name: string;
    in_outs?: string;
    wiring?: WiringItem[];
    description?: string;
    notes?: string;
    programing?: string;
    size?: string
    color?: string[]
  }
  
export interface ProductProps {
    prod: Product;
}
  