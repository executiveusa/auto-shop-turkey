import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const reviews = [
    { name: 'Carlos M.', rating: 5, comment: 'Fast engine diagnostics and honest pricing.' },
    { name: 'Leyla K.', rating: 5, comment: 'Turkish-speaking staff helped me understand every repair step.' },
    { name: 'Olena S.', rating: 4.8, comment: 'Ukrainian language support and friendly team!' }
  ];

  res.status(200).json({ reviews });
};

export default handler;
