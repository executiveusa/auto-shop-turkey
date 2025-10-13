import type { NextApiRequest, NextApiResponse } from 'next';
import ShopmonkeyClient from '@/integrations/shopmonkey';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { tenantId = process.env.SHOP_TENANT_ID, serviceKey, ...payload } = req.body;

  if (!tenantId) {
    return res.status(400).json({ message: 'Missing tenant' });
  }

  try {
    const client = new ShopmonkeyClient({ apiKey: process.env.SHOPMONKEY_API_KEY || '' });
    await client.syncQuote(tenantId, { ...payload, serviceKey, type: 'inquiry' });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to store inquiry' });
  }
};

export default handler;
