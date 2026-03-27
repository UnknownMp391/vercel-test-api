import { Category } from "../../types/category"


export function parseCategoryString(str: string) {
  switch (str.trim()) {
    case 'F/F': return Category.FF
    case 'F/M': return Category.FM
    case 'M/M': return Category.MM
    case 'Multi': return Category.MULTI
    case 'Gen': return Category.NONE
    default: throw new TypeError("Unknown category")
  }
}
