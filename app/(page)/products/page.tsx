import { GeistSans } from "geist/font/sans";
import { Header } from "../../componets/Header/ui";
import { ProductsHeader } from "../../componets/ProductsHeader/ui";
import ProductsList from "../../componets/ProductsList/ui";
import { Footer } from "../../componets/Footer/ui";

export default function Products() {
  return (
    <main className={GeistSans.className}>
      <header className="sm:min-h-screen lg:h-screen">
        <Header />
        <ProductsHeader />
      </header>
      <ProductsList />
      <Footer />
    </main>
  );
}
