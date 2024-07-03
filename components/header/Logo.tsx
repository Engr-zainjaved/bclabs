import Image from 'next/image';

const Logo = () => {
  return <Image src={'/logo.png'} width={200} height={90} alt="logo" />;
};

export default Logo;
