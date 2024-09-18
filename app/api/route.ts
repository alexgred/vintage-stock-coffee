import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('http://localhost:3001/api', {
    cache: 'no-store',
  });
  const data = await res.json();

  return NextResponse.json({ ...data });
}

// export async function POST(req: Request) {
//   const body = await req.json();
//   // console.log('post', body);

//   const res = await fetch('http://localhost:3001/api', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body),
//   });
//   const data = await res.json();

//   return NextResponse.json({ ...data });
// }
