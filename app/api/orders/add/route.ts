import { Order, OrderData } from '@/types';
import { appendFile } from 'fs';
import jsonfile from 'jsonfile';

export async function POST(req: Request) {
  const body: Order = await req.json();
  const data: OrderData = jsonfile.readFileSync('./db.json');

  if (body) {
    data?.orders?.push(body);
  } else {
    return Response.json('');
  }

  jsonfile.writeFileSync('./db.json', data);

  const log = `Add - (${new Date().toUTCString()}) - ${JSON.stringify(body)}\n`;
  appendFile('./logs/order.log', log, (err) => console.log(err));

  return Response.json(body);
}
