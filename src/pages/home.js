import { getProducts } from "../api/products";
import { ProductCard } from "../components/product-card";

export function Home() {
  const divContainer = document.createElement("div");
  divContainer.classList.add(
    "max-sm:grid",
    "max-sm:grid-cols-2",
    "max-sm:gap-3",
    "max-sm:mx-auto",
    "max-sm:p-3"
  );

  getProducts().then((products) => {
    for (const product of products) {
      const productCard = ProductCard({ ...product });
      divContainer.append(productCard);
    }
  });

  return divContainer;
}
