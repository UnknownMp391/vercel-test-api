export const config = {
  runtime: 'edge'
};

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';
  
  return new Response(
    JSON.stringify({
      message: `Hello ${name}!`,
      name
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
}
