export const config = {
  runtime: 'edge'
};

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';
  
  return new Response(
    `这是一条来自 Vercel Edge function 的响应, name: ${name}`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        
      }
    }
  );
}
