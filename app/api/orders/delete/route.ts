import { NextResponse } from 'next/server';
import jsonfile from 'jsonfile';
import { appendFile } from 'fs';

export async function DELETE(req: Request) {
  const body = await req.json();
  const data = jsonfile.readFileSync('./db.json');

  const element = data?.orders?.splice(body?.index, 1);
  jsonfile.writeFileSync('./db.json', data);

  const log = `Delete - (${new Date().toUTCString()}) - ${JSON.stringify(
    element
  )}\n`;
  appendFile('./logs/order.log', log, (err) => console.log(err));

  return NextResponse.json('');
}
