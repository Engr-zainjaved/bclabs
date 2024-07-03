import { AssetsTable, Crypto } from './assets_table';
import { getAssets } from '@/actions/get-assets';

const AssetsCard = async () => {
  const data = await getAssets();

  return (
    <div className="w-full ">
      <div className="overflow-x-auto bg-black backdrop-blur-lg  bg-opacity-70 backdrop-blur-3 p-8 rounded-lg border border-[#464646]">
        <AssetsTable assets={data.assets} />
      </div>
    </div>
  );
};

export default AssetsCard;
