'use client';

interface Order {
  id: number;
  name: string;
  user: string;
  price: number;
  timestamp: number;
  minutes: number;
  done: boolean;
}

export default function Orders({ data }: { data: Order[] }) {
  const list = data.map((order: Order) => (
    <div key={order.id}>{order.name}</div>
  ));
  return <div>{list}</div>;
}
