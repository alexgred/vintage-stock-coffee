import { NextResponse } from 'next/server';
import jsonfile from 'jsonfile';

export async function GET() {
  const data = jsonfile.readFileSync('./db.json');

  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const data = jsonfile.readFileSync('./db.json');

  data?.orders?.splice(body?.index, 1);
  jsonfile.writeFileSync('./db.json', data);

  return NextResponse.json('');
}
