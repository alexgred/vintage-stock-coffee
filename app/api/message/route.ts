import { NextResponse } from 'next/server';
import { config } from 'dotenv';
import { Bot } from 'grammy';

type Message = {
  message: string;
  userId: number;
};

export async function POST(req: Request) {
  const data: Message = await req.json();

  config();
  const bot = new Bot(process.env.BOT_TOKEN as string);
  bot.api.sendMessage(data.userId, data?.message);

  return NextResponse.json(data);
}
