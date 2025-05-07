async function getData() {
    const res = await fetch('/data/prod-silcon.json');
    return await res.json();
  }
  
  export async function getCategories () {
    const data = await getData();
    return Object.keys(data);
  }

export async function getFilteredProducts(filter: string) {
    const data = await getData();
    return data[filter]
}


export async function getAllProducts() {
    const data = await getData();
    return Object.values(data).flat()
}