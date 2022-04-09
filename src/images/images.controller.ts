import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Image } from './image.model';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private imagesService: ImagesService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    getImages(@Query('tags') tags: string): Promise<Image[]> {
        return this.imagesService.getFlickrImages(tags);
    }
}