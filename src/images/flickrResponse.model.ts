export interface FlickrResponse {
    feed: Feed
}

interface Feed {
    entry: Entry[]
}

interface Entry{
    link: Link[],
    content: Content
}

interface Link {
    _attributes: Attribute
} 

interface Attribute {
    type: string,
    href: string
}

interface Content {
    _text: string;
}