import { Order, OrderData } from '@/types';
import { config } from 'dotenv';
import { appendFile } from 'fs';
import { Bot } from 'grammy';
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

  config();
  const bot = new Bot(process.env.BOT_TOKEN as string);
  bot.api.sendMessage(process.env.BARISTA_ID as string, '❗️Новый заказ.');

  return Response.json(body);
}
