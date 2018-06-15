export class SongModel  {
    private _id:number;
    private _title:string;
    private _artist:string;
    private _link:string;

    constructor (json?) {
        if (json) {
            if (json.id) {
                this._id = json.id;
            }
            if (json.title) {
                this._title = json.title;
            }
            if (json.artist) {
                this._artist = json.artist;
            }
            if (json.link) {
                this._link = json.link;
            }
        }
    }

    get id():number {
        return this._id;
    }

    set id(id:number) {
        this._id = id;
    }
    
    get title():string {
        return this._title;
    }

    set title(title:string) {
        this._title = title;
    }
    
    get artist():string {
        return this._artist;
    }

    set artist(artist:string) {
        this._artist = artist;
    }
    
    get link():string {
        return this._link;
    }

    set link(link:string) {
        this._link = link;
    }

    toJSON() {
        return {id:this.id,
            title : (this.title ? this.title.trim() : ''),
            artist : (this.artist ? this.artist.trim() : ''),
            link : (this.link ? this.link.trim() : '')};
    }

}