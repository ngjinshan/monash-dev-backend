export interface FlickrResponse {
    feed: Feed
}

interface Feed {
    entry: Entry[]
}

interface Entry{
    link: Link[]
}

interface Link {
    _attributes: Attribute
} 

interface Attribute {
    type: string,
    href: string
}