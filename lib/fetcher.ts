type Args = [input: RequestInfo | URL, init?: RequestInit | undefined];

/* eslint-disable  @typescript-eslint/no-explicit-any */
export async function fetcher<JSON = any>(...args: Args): Promise<JSON> {
  return await fetch(...args).then((res) => res.json());
}
