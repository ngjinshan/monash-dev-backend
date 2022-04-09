import { Injectable } from "@nestjs/common";
import { Image } from "./image.model";
import axios from "axios";
// import { xml2json } from "xml-js";
import * as convert from 'xml-js';
import { FlickrResponse } from "./flickrResponse.model";
import { FLICKR_FEED_BASE_URL } from "../common/constants";

@Injectable()
export class ImagesService {
    
    async getFlickrImages(tags: string) : Promise<Image[]> {
        const xmlData = await axios.get(`${FLICKR_FEED_BASE_URL}?tags=${tags}`).then(res => res.data);

        if(!xmlData) return []; //dummy return

        const jsonData: FlickrResponse = JSON.parse(convert.xml2json(xmlData, {compact: true, spaces: 4}));
        const images: Image[] = jsonData.feed.entry.map(e => {
            // const [, img] = e.link;
            const img = e.link.find(e => e._attributes.type == "image/jpeg");
            const url = img._attributes.href;
            return {
                url: url
            }
        })

        return images;
    }
}