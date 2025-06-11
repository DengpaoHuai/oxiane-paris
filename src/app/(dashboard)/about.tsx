import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Link } from "react-router";

const data = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
];

const About = () => {
  return (
    <div style={{ height: "500vh" }}>
      About
      <Link to="/">Home</Link>
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
};

export default About;
