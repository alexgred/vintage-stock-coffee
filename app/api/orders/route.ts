import { NextResponse } from 'next/server';
import jsonfile from 'jsonfile';

export async function GET() {
  const data = jsonfile.readFileSync('./db.json');

  return NextResponse.json(data);
}
