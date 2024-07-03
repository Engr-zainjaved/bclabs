import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className="hidden md:w-1/2 xl:flex justify-between items-center ">
      <Link href={'#'}>Exchange</Link>
      <Link href={'#'}>Last Transaction</Link>
      <Link href={'#'}>Invite Friend</Link>
      <Link href={'#'}>Notifications</Link>
    </div>
  );
};

export default NavLinks;
