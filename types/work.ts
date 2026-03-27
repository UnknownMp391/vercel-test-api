import z from "zod";
import { TimeSchema } from "./time";
import { Category } from "./category";

export const ChapterItemSchema = z.object({
  title: z.string(),
  chapterId: z.number()
})
export type ChapterItem = z.infer<typeof ChapterItemSchema>

export const ChapterIndexSchema = z.object({
  current: z.number(),
  total: z.number()
})
export type ChapterIndex = z.infer<typeof ChapterIndexSchema>

export const WorkSchema = z.object({
  workId: z.number(),
  chapterId: z.number().optional(),
  pseud: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  content: z.string(),

  lang: z.string(),
  categories: z.array(z.nativeEnum(Category)),
  fandoms: z.array(z.string()),
  relationships: z.array(z.string()),
  characters:z.array(z.string()),
  additionalTags: z.array(z.string()),

  publishedTime: TimeSchema,
  updatedTime: TimeSchema.optional(),
  completedTime: TimeSchema.optional(),

  wordCount: z.number(),
  hitCount: z.number(),
  kudoCount: z.number().optional(),
  commentCount: z.number().optional(),
  bookmarkCount: z.number().optional(),

  chapter: ChapterIndexSchema.optional(),
  chapters: z.array(ChapterItemSchema)
})
export type Work = z.infer<typeof WorkSchema>
