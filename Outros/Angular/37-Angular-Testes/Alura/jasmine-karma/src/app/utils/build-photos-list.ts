import { Photo } from "../shared/components/photo-board/photo.interface";

export function buildPhotosList(): Photo[] {
    const photos: Photo[] = [];
    for (let i = 0; i < 8; i++) {
        photos.push({
            id: i + 1,
            description: '',
            url: ''
        })
    }
    return photos;
}