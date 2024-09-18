export const revalidate = 15;

export default async function getOrders() {
  const res = await fetch('http://localhost:3001/api');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
