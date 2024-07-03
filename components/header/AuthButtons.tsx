import { Button } from '../ui/button';

const AuthButtons = () => {
  return (
    <div className="space-x-4">
      <Button variant="outline" className="rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none">
        LOG IN
      </Button>
      <Button className="rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none">SIGN UP</Button>
    </div>
  );
};

export default AuthButtons;
