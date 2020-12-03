let getInfo = new XMLHttpRequest();
getInfo.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        let infoObject = JSON.parse(this.responseText)
        document.getElementById("id").innerHTML = infoObject.id;
        document.getElementById("title").innerHTML = infoObject.title;
        document.getElementById("body").innerHTML = infoObject.body;
        document.getElementById("author").innerHTML = infoObject.author;
        document.getElementById("generation").innerHTML = infoObject.generation;
    }
};
getInfo.open("GET", "database.json", true);
getInfo.send();