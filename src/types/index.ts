interface Meaning {
  id: string
  description: string
}

interface LinkData {
  type: 'doc' | 'video'
  name: string
  resource: string
}

export interface Term {
  id: string
  name: string
  meanings: Meaning[]
  links: LinkData
}
