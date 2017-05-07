export class Album {

    constructor(public id: string,
                public name: string,
                public image: string) {}
}

export class Playlist {

    constructor(public name: string,
                public tracks: Track[],
                public color: string,
                public favourite: boolean,
                public id?: number) {}
}

export class Track {

    constructor(public id: string,
                public name: string,
                public artist: string,
                public musicUrl: string) {}
}