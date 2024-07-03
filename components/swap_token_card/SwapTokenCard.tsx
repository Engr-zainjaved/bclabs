import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import SwapToken from './SwapToken';

const SwapTokenCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-xl">SWAP TOKENS</span>
          <Image src="/settings-icon.png" alt="setting-icon" width={24} height={24} className="cursor-pointer" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SwapToken />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <div>1 BTC = 32.4039 ETH</div>
          <div className="text-blue-600">Free exchange</div>
        </div>
        <span className="text-gray-500">Updates in 4s</span>
      </CardFooter>
    </Card>
  );
};

export default SwapTokenCard;
