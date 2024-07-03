'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function getAssets() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  let { data: assets, error } = await supabase.from('assets').select('*');

  if (error) {
    console.error('Error fetching assets:', error.message);
    return { props: { assets: [] } };
  }
  return { assets };
}
