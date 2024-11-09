import { NextResponse } from 'next/server';
import jsonfile from 'jsonfile';
import { OrderData } from '@/types';

type Index = {
  index: number;
}

export async function POST(req: Request) {
  const body: Index = await req.json();
  const data: OrderData = jsonfile.readFileSync('./db.json');

  if (data && data.orders) {
    data.orders[body.index].done = true;
  }

  jsonfile.writeFileSync('./db.json', data);

  return NextResponse.json(body);
}
