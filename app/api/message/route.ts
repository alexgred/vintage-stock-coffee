import { NextResponse } from 'next/server';
import { config } from 'dotenv';
import { Bot } from 'grammy';
import { appendFile } from 'fs';

type Message = {
  message: string;
  userId: number;
};

export async function POST(req: Request) {
  const data: Message = await req.json();

  config();
  const bot = new Bot(process.env.BOT_TOKEN as string);
  bot.api.sendMessage(data.userId, data?.message);

  const log = `Send - (${new Date().toUTCString()}) - ${JSON.stringify(
    data
  )}\n`;
  appendFile('./logs/message.log', log, (err) => console.log(err));

  return NextResponse.json(data);
}
