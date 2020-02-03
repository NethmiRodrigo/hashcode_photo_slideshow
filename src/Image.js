class Image {

    constructor(alignment, id, tags){
        this.alignment = alignment;
        this.id = id;
        this.tags = tags;
    }

    getAlignment(){
        return this.alignment;
    }

    getId(){
        return this.id;
    }

    getTags(){
        return this.tags;
    }

    setAlignment(alignment){
        this.alignment = alignment;
    }

    setId(id){
        this.id = id;
    }

    setTags(tags){
        this.tags = tags;
    }
}


module.exports = Image;