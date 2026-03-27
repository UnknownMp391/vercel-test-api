import { buildFetch } from "../apiEndpoint";
import { parseWorkPage } from "../utils/parsers/work";

export const config = {
  runtime: 'edge'
};

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url)

  const workIdString = url.searchParams.get('workId')

  if (workIdString === null)
    return new Response(
      JSON.stringify({
        code: 1
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    )

  const workId = parseInt(workIdString)

  if (workId === null)
    return new Response(
      JSON.stringify({
        code: 2
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    )

  const response = await buildFetch(`/works/${workId}?view_adult=yes`)

  const content = await response.text()

  const work = parseWorkPage(content, workId, undefined)
  
  return new Response(
    JSON.stringify({
      work
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
  )
}
