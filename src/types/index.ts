export type WorkProps = {
        slug : string
        title : string
        tags: string
        description : string
        features : FeaturesProps[]
        isWidely: boolean
        downloads: DownloadProps[]
        images : ImagesProps[]
        legends : LegendsProps[]
        featured_image : string
}

export type FeaturesProps = {
    title : string
}

export type DownloadProps = {
    title : string
    url : string
    size : string
    type : string
}

export type ImagesProps = {
    url : string
    caption : string
}

export type LegendsProps = {
    type : string
}


export type CategoriesProps = {
    slug : string
    name : string
}