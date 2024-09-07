import sliderImg_1 from '@/images/slider/sliderImg_1.jpg';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative">
      <Image priority src={sliderImg_1} alt="sliderImg" />
    </div>
  );
};

export default Banner;
