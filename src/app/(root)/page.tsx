import Banner from '@/components/Home/Banner';
import Products from '@/components/Home/Products';
import BottomHeader from '@/components/Shared/Header/BottomHeader';
import { getProducts } from '@/lib/actions';
import Footer from '@/components/Shared/Footer';
import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const products = await getProducts();
  const user = await currentUser();

  return (
    <>
      <BottomHeader />
      <Banner />
      <div className="relative -top-48 z-10">
        <Products products={products} userId={user?.id ?? ''} />
      </div>
      <Footer />
    </>
  );
}
