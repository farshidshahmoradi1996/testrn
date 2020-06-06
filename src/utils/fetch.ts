const server = 'https://fakerestapi.azurewebsites.net';
export default async function <JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(`${server}${input}`, init);
  return res.json();
}
