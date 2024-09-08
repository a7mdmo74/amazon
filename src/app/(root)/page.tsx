import Banner from '@/components/Home/Banner';
import Products from '@/components/Home/Products';
import BottomHeader from '@/components/Shared/Header/BottomHeader';
import { getProducts } from '@/lib/actions';
import Footer from '@/components/Shared/Footer';

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <BottomHeader />
      <Banner />
      <div className="relative -top-48 z-10">
        <Products products={products} />
      </div>
      <Footer />
    </>
  );
}
