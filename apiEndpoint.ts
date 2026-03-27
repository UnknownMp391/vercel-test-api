
export const baseUrlString =  'https://archiveofourown.org' // 'http://localhost:8000'

export const baseUrl = new URL(baseUrlString)

export function buildFetch(url: string) {
  return fetch(`${baseUrl}${url}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0',
      "Referer": baseUrlString,
      "Origin": baseUrlString
    }
  })
}
