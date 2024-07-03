import AuthButtons from './AuthButtons';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <NavLinks />
      <AuthButtons />
    </div>
  );
};

export default Header;
