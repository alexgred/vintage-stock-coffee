import jsonfile from 'jsonfile';

export async function POST(req: Request) {
  const body: Order = await req.json();
  console.log(body);
  const data: OrderData = jsonfile.readFileSync('./db.json');

  if (body) {
    data?.orders?.push(body);
  } else {
    return Response.json('');
  }

  jsonfile.writeFileSync('./db.json', data);

  return Response.json(body);
}
