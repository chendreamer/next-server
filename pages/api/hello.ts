// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPostIds } from '../../lib/posts'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req);
    const paths = getAllPostIds()
    paths.push({ name: 'jack jones' });
    //res.status(200).json({ name: 'John Doe999' })
    res.status(200).json(paths);
}
