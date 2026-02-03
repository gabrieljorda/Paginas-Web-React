import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ProductList } from "./components/product-list";
import { products } from "./data";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
