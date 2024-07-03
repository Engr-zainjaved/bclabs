'use client';

import Image from 'next/image';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Button } from '../ui/button';

const SwapToken = () => {
  const [firstSelectedValue, setFirstSelectedValue] = useState('btc');
  const [secondSelectedValue, setSecondSelectedValue] = useState('bnb');

  const handleFirstSelectChange = (value: string) => {
    setFirstSelectedValue(value);
  };

  const handleSecondSelectChange = (value: string) => {
    setSecondSelectedValue(value);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-1 lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-1 relative">
        <Card className="bg-[#1E1E1E] border-none flex justify-between items-center pt-6 pb-6  md:pl-20 md:pr-20 w-full">
          <div className="space-y-3">
            <Input
              type="number"
              placeholder="0.00"
              className="bg-transparent border-none no-spinner text-5xl text-white placeholder:text-white"
            />

            <div className="text-gray-500 px-3 text-sm">$0.00</div>
          </div>
          <div className="space-y-3">
            <div>
              <Select value={firstSelectedValue} onValueChange={handleFirstSelectChange}>
                <SelectTrigger className="w-36 h-12 bg-black border-none text-2xl text-gray-500 ">
                  <SelectValue placeholder={firstSelectedValue.toUpperCase()} />
                </SelectTrigger>
                <SelectContent className="border-none text-white">
                  <SelectItem value="btc">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-white_btc.png" alt="BTC logo" width={20} height={20} />
                      <span>BTC</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="eth">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-color_eth.png" alt="ETH logo" width={24} height={24} />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="doge">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-color_doge.png" alt="DOGE logo" width={24} height={24} />
                      <span>DOGE</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="bnb">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-color_bnb.png" alt="BNB logo" width={24} height={24} />
                      <span>BNB</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              Balance: <span className="text-blue-600">24,240</span>
            </div>
          </div>
        </Card>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <Button size="circle" className="bg-black hover:bg-[#1E1E1E]">
            <Image src="/swap-icon.png" alt="swap-icon" width={24} height={24} />
          </Button>
        </div>
        <Card className="bg-[#1E1E1E] border-none flex justify-between items-center pt-6 pb-6 md:pl-20 md:pr-20 w-full">
          <div className="space-y-3">
            <Input
              type="number"
              placeholder="0.00"
              className="bg-transparent border-none no-spinner text-5xl text-white placeholder:text-white"
            />

            <div className="text-gray-500 px-3 text-sm">$0.00</div>
          </div>
          <div className="space-y-3">
            <div>
              <Select value={secondSelectedValue} onValueChange={handleSecondSelectChange}>
                <SelectTrigger className="w-36 h-12 bg-black border-none text-2xl text-gray-500 ">
                  <SelectValue placeholder={secondSelectedValue.toUpperCase()} />
                </SelectTrigger>
                <SelectContent className="border-none text-white">
                  <SelectItem value="btc">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-white_btc.png" alt="BTC logo" width={20} height={20} />
                      <span>BTC</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="eth">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-color_eth.png" alt="ETH logo" width={24} height={24} />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="doge">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-color_doge.png" alt="DOGE logo" width={24} height={24} />
                      <span>DOGE</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="bnb">
                    <div className="flex justify-between items-center space-x-2">
                      <Image src="/cryptocurrency-color_bnb.png" alt="BNB logo" width={24} height={24} />
                      <span>BNB</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              Balance: <span className="text-blue-600">24,240</span>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Button className="pl-10 pr-10 rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-none">SWAP TOKENS</Button>
      </div>
    </>
  );
};

export default SwapToken;
