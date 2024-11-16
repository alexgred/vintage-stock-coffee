import { NextResponse } from 'next/server';
import jsonfile from 'jsonfile';
import { OrderData } from '@/types';
import { config } from 'dotenv';
import { Bot } from 'grammy';

type Index = {
  index: number;
  userId: number;
};

export async function POST(req: Request) {
  const body: Index = await req.json();
  const data: OrderData = jsonfile.readFileSync('./db.json');

  if (data && data.orders) {
    data.orders[body.index].done = true;
  }

  config();
  const bot = new Bot(process.env.BOT_TOKEN as string);
  bot.api.sendMessage(body.userId, 'Ваш кофе готов. Не забудьте оплатить.');


  jsonfile.writeFileSync('./db.json', data);

  return NextResponse.json(body);
}
