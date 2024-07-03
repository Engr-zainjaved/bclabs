'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export interface Crypto {
  id: number;
  symbol: string;
  lastTrade: number;
  change24hPercent: number;
  change24hValue: string;
  imageUrl: string;
}

type AssetsTableProps = {
  assets: Crypto[] | null | undefined;
};

export const AssetsTable: FC<AssetsTableProps> = ({ assets }) => {
  const getColorClass = (value: number) => {
    if (value > 0) return 'text-green-400';
    if (value < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <table className="w-full max-w-full p-4">
      <thead>
        <tr>
          <th className=" py-2 text-left pl-4">ASSETS</th>
          <th className="py-2 text-left">LAST TRADE</th>
          <th className="py-2 text-left">24H %</th>
          <th className="py-2 text-left">24H CHANGE</th>
          <th className=" py-2 text-left w-20">
            <div className="text-[#3980FF] underline cursor-pointer">MORE &gt;</div>
          </th>
        </tr>
        <tr>
          <th colSpan={5}>
            <hr className="border-[#464646] flex justify-center " />
          </th>
        </tr>
      </thead>

      <tbody>
        {assets?.map((asset: any) => (
          <tr key={asset.id}>
            <td className="py-2 text-left pl-4">
              <div className="flex items-center space-x-2">
                <Image alt={`${asset.symbol} logo`} src={asset.imageUrl} width={50} height={50} />
                <span>
                  {asset.symbol}/<span className="text-gray-500">USD</span>
                </span>
              </div>
            </td>
            <td className="py-2 text-left">{`$${asset.lastTrade}`}</td>
            <td className={`py-2 text-left ${getColorClass(asset.change24hPercent)}`}>{`${Math.abs(
              asset.change24hPercent,
            ).toFixed(2)}%`}</td>
            <td className={`py-2 text-left ${getColorClass(asset.change24hValue)}`}>
              {asset.change24hValue < 0 ? '-' : '+'}${Math.abs(asset.change24hValue).toFixed(2)}
            </td>
            <td className="py-2 text-left pr-4">
              <Button className="bg-green-400 text-black rounded-none hover:bg-green-500">Trade</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
