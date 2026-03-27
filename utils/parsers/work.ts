import { load } from 'cheerio';
import { Work } from '../../types/work';
import { parseTimeFromYMDString } from './time';
import { parseCategoryString } from './category';

export function parseWorkPage(html: string, workId: number, chapterId?: number): Work {
  const $ = load(html)

  const completedTimeNode = $('dd.completed')
  const updatedTimeNode = $('dd.updated')

  const kudoCountNode = $('dd.kudos')
  const commentCountNode = $('dd.comments')
  const bookmarkCountNode = $('dd.bookmarks')

  return {
    workId, chapterId,
    pseud: $('.byline > a:nth-child(1)').first().text(),
    title: $('.title').first().text().trim(),
    summary: $('blockquote.userstuff').first().text().trim(),
    content: $('div.userstuff:nth-child(2)').first().text().trim(),
    lang: $('dd.language').first().text().trim(),

    publishedTime: parseTimeFromYMDString($('dd.published').first().text()),
    completedTime: completedTimeNode.length
      ? parseTimeFromYMDString(completedTimeNode.first().text())
      : undefined,
    updatedTime: updatedTimeNode.length
      ? parseTimeFromYMDString(updatedTimeNode.first().text())
      : undefined,

    wordCount: parseInt($('dd.words').first().text().trim().replaceAll(',', '')),
    hitCount: parseInt($('dd.hits').first().text().trim().replaceAll(',', '')),
    kudoCount: kudoCountNode
      ? parseInt(kudoCountNode.first().text().trim().replaceAll(',', ''))
      : undefined,
    commentCount: commentCountNode
      ? parseInt(commentCountNode.first().text().trim().replaceAll(',', ''))
      : undefined,
    bookmarkCount: bookmarkCountNode
      ? parseInt(bookmarkCountNode.first().text().trim().replaceAll(',', ''))
      : undefined,

    categories: $('dd.category > ul:nth-child(1)').first().children().toArray().map((e) => parseCategoryString($(e).text())),
    fandoms: $('dd.fandom > ul:nth-child(1)').children().first().toArray().map((e) => $(e).text().trim()),
    relationships: $('dd.relationship > ul:nth-child(1)').first().children().toArray().map((e) => $(e).text().trim()),
    characters: $('dd.character > ul:nth-child(1)').first().children().toArray().map((e) => $(e).text().trim()),
    additionalTags: $('dd.freeform.tags').first().children().toArray().map((e) => $(e).text().trim()),

    chapter: undefined, // Mock
    chapters: [] // Mock
  }
}
