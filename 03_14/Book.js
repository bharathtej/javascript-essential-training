class Book{
    constructor(
        name,
        authorName, 
        noOfPages,
        dateOfPublish
    ){
        this.name = name;
        this.authorName = authorName;
        this.noOfPages = noOfPages;
        this.dateOfPublish = dateOfPublish;

    }

    ageOfBook(){
        let now = new Date().getTime();
        let bookPublishDate = new Date(this.dateOfPublish).getTime();
        return Math.floor((now-bookPublishDate)/(1000*3600*24*365.25));

    }

}

export default Book;