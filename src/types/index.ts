interface Meaning {
  id: string
  description: string
}

interface LinkData {
  type: string
  name: string
  resource: string
}

export interface Term {
  id: string
  name: string
  meanings: Meaning[]
  links: LinkData[]
}
