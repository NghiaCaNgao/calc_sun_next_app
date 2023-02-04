import type { NextApiRequest, NextApiResponse } from 'next'
import { formatTime } from "@nghiavuive/sunset_calc"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: formatTime(0.1 / 24) });
}
