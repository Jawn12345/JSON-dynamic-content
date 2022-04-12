let contentGallery = document.getElementById('picture');
let dropdownSelect = document.getElementById('sortDropdown');
var noExpanded = true;

let jsonObject = [
    {
      "Name" : "Alex",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
      "Birthday" : "Summer 13",
      "Color" : "saddlebrown",
      "Lives In" : "Pelican Town",
      "Address" : "1 River Road",
      "Family" : ["Evelyn", "George"],
      "Friends" : ["Haley"]
    },
    {
      "Name" : "Abigail",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
      "Birthday" : "Fall 13",
      "Color" : "mediumorchid",
      "Lives In" : "Pelican Town",
      "Address" : "Pierre's General Store",
      "Family" : ["Pierre", "Caroline"],
      "Friends" : ["Sam", "Sebastian"]
    },
    {
      "Name" : "Caroline",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
      "Birthday" : "Winter 7",
      "Color" : "dodgerblue",
      "Lives In" : "Pelican Town",
      "Address" : "Pierre's General Store",
      "Family" : ["Pierre", "Abigail"],
      "Friends" : ["Jodi"]
    },
    {
      "Name" : "Clint",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
      "Birthday" : "Winter 26",
      "Color" : "burlywood",
      "Lives In" : "Pelican Town",
      "Address" : "Blacksmith",
      "Family" : [],
      "Friends" : ["Emily"]
    },
    {
      "Name" : "Demetrius",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
      "Birthday" : "Summer 19",
      "Color" : "dodgerblue",
      "Lives In" : "The Mountain",
      "Address" : "24 Mountain Road",
      "Family" : ["Robin", "Maru", "Sebastian"],
      "Friends" : []
    },
    {
      "Name" : "Dwarf",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
      "Birthday" : "Summer 22",
      "Color" : "darkgray",
      "Lives In" : "The Mines",
      "Address" : "Eastern Cave",
      "Family" : [],
      "Friends" : []
    },
    {
      "Name" : "Elliott",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
      "Birthday" : "Fall 5",
      "Color" : "darkred",
      "Lives In" : "The Beach",
      "Address" : "Elliott's Cabin",
      "Family" : [],
      "Friends" : ["Leah", "Willy"]
    },
    {
      "Name" : "Emily",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
      "Birthday" : "Spring 27",
      "Color" : "mediumblue",
      "Lives In" : "Pelican Town",
      "Address" : "2  Widow Lane",
      "Family" : ["Emily"],
      "Friends" : ["Sandy"]
    },
    {
      "Name" : "Evelyn",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
      "Birthday" : "Winter 20",
      "Color" : "pink",
      "Lives In" : "Pelican Town",
      "Address" : "1 River Road",
      "Family" : ["George", "Alex"],
      "Friends" : []
    },
    {
      "Name" : "George",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png ",
      "Birthday" : "Fall 24",
      "Color" : "darkolivegreen",
      "Lives In" : "Pelican Town",
      "Address" : "1 River Road",
      "Family" : ["Evelyn", "Alex"],
      "Friends" : []
    },
    {
      "Name" : "Gus",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
      "Birthday" : "Summer 8",
      "Color" : "saddlebrown",
      "Lives In" : "Pelican Town",
      "Address" : "The Stardrop Saloon",
      "Family" : [],
      "Friends" : ["Pam"]
    },
    {
      "Name" : "Haley",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
      "Birthday" : "Spring 14",
      "Color" : "pink",
      "Lives In" : "Pelican Town",
      "Address" : "2 Widow Lane",
      "Family" : ["Emily"],
      "Friends" : ["Alex"]
    },
    {
      "Name" : "Harvey",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
      "Birthday" : "Winter 14",
      "Color" : "forestgreen",
      "Lives In" : "Pelican Town",
      "Address" : "Medical Clinic",
      "Family" : [],
      "Friends" : ["Maru"]
    },
    {
      "Name" : "Jas",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
      "Birthday" : "Summer 4",
      "Color" : "mediumorchid",
      "Lives In" : "Cindersap Forest",
      "Address" : "Marnie's Ranch",
      "Family" : ["Marnie", "Shane"],
      "Friends" : ["Vincent", "Leo"]
    },
    {
      "Name" : "Jodi",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
      "Birthday" : "Fall 11",
      "Color" : "hotpink",
      "Lives In" : "Pelican Town",
      "Address" : "1 Willow Lane",
      "Family" : ["Kent", "Sam", "Vincent"],
      "Friends" : ["Caroline"]
    },
    {
      "Name" : "Kent",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
      "Birthday" : "Spring 4",
      "Color" : "darkolivegreen",
      "Lives In" : "Pelican Town",
      "Address" : "1 Willow Lane",
      "Family" : ["Jodi", "Sam", "Vincent"],
      "Friends" : []
    },
    {
      "Name" : "Krobus",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
      "Birthday" : "Winter 1",
      "Color" : "darkgray",
      "Lives In" : "The Sewers",
      "Address" : "Krobus's Shop",
      "Family" : [],
      "Friends" : []
    },
    {
      "Name" : "Leah",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
      "Birthday" : "Winter 23",
      "Color" : "forestgreen",
      "Lives In" : "Cindersap Forest",
      "Address" : "Leah's Cottage",
      "Family" : [],
      "Friends" : ["Elliott"]
    },
    {
      "Name" : "Lewis",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
      "Birthday" : "Spring 7",
      "Color" : "burlywood",
      "Lives In" : "Pelican Town",
      "Address" : "Mayor's Manor",
      "Family" : [],
      "Friends" : ["Marnie"]
    },
    {
      "Name" : "Linus",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
      "Birthday" : "Winter 3",
      "Color" : "coral",
      "Lives In" : "The Mountain",
      "Address" : "Tent",
      "Family" : [],
      "Friends" : ["Wizard", "Leo"]
    },
    {
      "Name" : "Marnie",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
      "Birthday" : "Fall 18",
      "Color" : "peru",
      "Lives In" : "Cindersap Forest",
      "Address" : "Marnie's Ranch",
      "Family" : ["Shane", "Jas"],
      "Friends" : ["Lewis"]
    },
    {
      "Name" : "Maru",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
      "Birthday" : "Summer 10",
      "Color" : "palevioletred",
      "Lives In" : "The Mountain",
      "Address" : "24 Mountain Road",
      "Family" : ["Demetrius", "Robin", "Sebastian"],
      "Friends" : ["Penny"]
    },
    {
      "Name" : "Pam",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
      "Birthday" : "Spring 18",
      "Color" : "hotpink",
      "Lives In" : "Pelican Town",
      "Address" : "Trailer",
      "Family" : ["Penny"],
      "Friends" : ["Gus"]
    },
    {
      "Name" : "Penny",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
      "Birthday" : "Fall 2",
      "Color" : "yellow",
      "Lives In" : "Pelican Town",
      "Address" : "Trailer",
      "Family" : ["Pam"],
      "Friends" : ["Maru", "Sam"]
    },
    {
      "Name" : "Pierre",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
      "Birthday" : "Spring 26",
      "Color" : "peru",
      "Lives In" : "Pelican Town",
      "Address" : "Pierre's General Store",
      "Family" : ["Caroline", "Abigail"],
      "Friends" : []
    },
    {
      "Name" : "Robin",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
      "Birthday" : "Fall 21",
      "Color" : "coral",
      "Lives In" : "The Mountain",
      "Address" : "24 Mountain Road",
      "Family" : ["Demetrius", "Sebastian", "Maru"],
      "Friends" : []
    },
    {
      "Name" : "Sam",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
      "Birthday" : "Summer 17",
      "Color" : "yellow",
      "Lives In" : "Pelican Town",
      "Address" : "1 Widow Lane",
      "Family" : ["Jodi", "Kent", "Vincent"],
      "Friends" : ["Sam", "Abigail", "Penny"]
    },
    {
      "Name" : "Sandy",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
      "Birthday" : "Fall 15",
      "Color" : "mediumblue",
      "Lives In" : "The Desert",
      "Address" : "Oasis",
      "Family" : [],
      "Friends" : ["Emily"]
    },
    {
      "Name" : "Sebastian",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
      "Birthday" : "Winter 10",
      "Color" : "orchid",
      "Lives In" : "The Mountain",
      "Address" : "24 Mountain Road",
      "Family" : ["Demetrius", "Robin", "Maru"],
      "Friends" : ["Sam", "Abigail"]
    },
    {
      "Name" : "Shane",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
      "Birthday" : "Spring 20",
      "Color" : "orchid",
      "Lives In" : "Cindersap Forest",
      "Address" : "Marnie's Ranch",
      "Family" : ["Marnie", "Jas"],
      "Friends" : []
    },
    {
      "Name" : "Vincent",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
      "Birthday" : "Spring 10",
      "Color" : "palevioletred",
      "Lives In" : "Pelican Town",
      "Address" : "1 Widow Lane",
      "Family" : ["Jodi", "Kent", "Sam"],
      "Friends" : ["Jas", "Leo"]
    },
    {
      "Name" : "Willy",
      "Picture" : "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
      "Birthday" : "Summer 24",
      "Color" : "darkred",
      "Lives In" : "The Beach",
      "Address" : "Fish Shop",
      "Family" : [],
      "Friends" : ["Elliott"]
    }
]


//createElementProper(myJSON);

//sort alphabetically ascending function
function GetSortOrderAscending(sortType) {
    return function(a, b) {

        if (a[sortType] > b[sortType]) {
            return 1;
        } else if (a[sortType] < b[sortType]) {
            return -1;
        }
        return 0;
    }
}

//sort alphabetically descending function
function GetSortOrderDescending(sortType) {
    return function(a, b) {
        if (a[sortType] < b[sortType]) {
            return 1;
        } else if (a[sortType] > b[sortType]) {
            return -1;
        }
        return 0;
    }
}

const season = ["Spring", "Summer", "Fall", "Winter"];
function GetSortOrderBirthdayAscending(sortType) {
    return function(a, b) {
        const aa = a["Birthday"].split(' ');
        const bb = b["Birthday"].split(' ');
        //console.log(aa);
        //console.log(bb);

        const seasonComp = season.indexOf(aa[0]) - season.indexOf(bb[0]);
        const dateComp = parseInt(aa[1]) - parseInt(bb[1]);

        return (seasonComp || dateComp);
    }
}
function GetSortOrderBirthdayDescending(sortType) {
    return function(a, b) {
        const aa = a["Birthday"].split(' ');
        const bb = b["Birthday"].split(' ');
        //console.log(aa);
        //console.log(bb);

        const seasonComp = season.indexOf(bb[0]) - season.indexOf(aa[0]);
        const dateComp = parseInt(bb[1]) - parseInt(aa[1]);

        return (seasonComp || dateComp);
    }
}


//jsonObject.sort(GetSortOrderAscending("Name"));
//jsonObject.sort(GetSortOrderBirthdayDescending("Birthday"));


function createNodes() {
    for (var i = 0; i < jsonObject.length; i++) {
        createElementProper(jsonObject[i]);
        //console.log(jsonObject[i]);
    }
}

function changeNodeStyles() {
    const collection = contentGallery.children;
    for (var i = 0; i < collection.length; i++) {
        collection[i].style.width = "100%";
        collection[i].style.border = "thin solid red";
        //collection[i].style.width = "auto";
        collection[i].style.display = "grid";
        collection[i].style.justifyItems = "center";
    }
}

function changeNewNodeStyles(target) {
  /*
    console.log(target.children);
    const collection = target.lastElementChild.children; //target.lastElementChild.children;
    console.log(collection);
    for (var i = 0; i < collection.length; i++) {
        console.log(collection[i]);
        var last = collection[i].lastElementChild;
        console.log("last");
        console.log(lastChild);
        for (var j = 0; j < last; j++) {
            last[j].style.width = "100%";
            last[j].style.display = "grid";
            last[j].style.justifyItems = "center";
        }
        // collection[i].style.width = "100%";
        // //collection[i].style.border = "thin solid red";
        // collection[i].style.display = "grid";
        // collection[i].style.justifyItems = "center";
    }*/
}

dropdownInd = dropdownSelect.selectedIndex = 0;
createNodes();
changeNodeStyles();

function createElementProper(incomingJSON) {
    let newContentElement = document.createElement("div");
    newContentElement.style.backgroundColor = incomingJSON["Color"];
    newContentElement.classList.add('contentItem');
    //newContentElement.style.backgroundColor = incomingJSON['color'];

    let newContentName = document.createElement("h3");
    newContentName.classList.add('contentTitle');
    newContentName.innerText = incomingJSON['Name'];
    newContentElement.appendChild(newContentName);

    let newContentPic = document.createElement("img");
    newContentPic.classList.add("Image");
    newContentPic.src = incomingJSON['Picture'];
    newContentElement.appendChild(newContentPic);

    let newContentBirthday = document.createElement("p");
    newContentBirthday.classList.add("Birthday");
    newContentBirthday.innerText = incomingJSON['Birthday'];
    newContentElement.appendChild(newContentBirthday);
    /*
    for (var i = 0; i <incomingJSON['Family'].length; i++) {

    }*/
    contentGallery.appendChild(newContentElement);
}

function addNewElementProper(incomingJSON , target) {
    let newContentElement = document.createElement("div");
    newContentElement.classList.add('additionalItem');
    // newContentElement.style.display = "grid";
    // newContentElement.style.alignItems = "start";

    let newContentLives = document.createElement("p");
    newContentLives.classList.add("LivesIn");
    newContentLives.innerText = "Lives in: ";
    newContentLives.innerText += incomingJSON['Lives In'];
    newContentElement.appendChild(newContentLives);

    let newContentAddress = document.createElement("p");
    newContentAddress.classList.add("Address");
    newContentAddress.innerText = "Address: ";
    newContentAddress.innerText += incomingJSON['Address'];
    newContentElement.appendChild(newContentAddress);

    if (incomingJSON['Family'].length > 0) {
      let newContentFamily = document.createElement("p");
      newContentFamily.classList.add("FamilyName");
      newContentFamily.innerText = "Family: ";
      newContentElement.appendChild(newContentFamily);
    }
    for (var i = 0; i <incomingJSON['Family'].length; i++) {
      var currentFamString = incomingJSON['Family'][i];
      var newFamItem = document.createElement("LI");
      newFamItem.innerText = currentFamString;
      newContentElement.appendChild(newFamItem);
    }

    let newContentFamilyList = document.createElement("UL");
    newContentFamilyList.listStyleType = "None";
    newContentElement.appendChild(newContentFamilyList);
    if (incomingJSON['Friends'].length > 0) {
      let newContentFriends = document.createElement("p");
      newContentFriends.classList.add("FreindsName");
      newContentFriends.innerText = "Friends: ";
      newContentElement.appendChild(newContentFriends);
    }
    let newContentFriendsList = document.createElement("UL");
    newContentElement.appendChild(newContentFriendsList);
    for (var i = 0; i <incomingJSON['Friends'].length; i++) {
        var currentFriendString = incomingJSON['Friends'][i];
        var newFriendItem = document.createElement("LI");
        newFriendItem.innerText = currentFriendString;
        newContentElement.appendChild(newFriendItem);
    }

    target.appendChild(newContentElement);
}

function removeNewElementProper(target) {
    target.removeChild(target.lastElementChild);
    noExpanded = true;
}

dropdownSelect.addEventListener("change", function() {
    var dropdownInd = dropdownSelect.selectedIndex;
    var dropdownValue = dropdownSelect.options[dropdownInd].value;
    //alert("changed");
    if (dropdownValue == "nameOrder") {
        jsonObject.sort(GetSortOrderAscending("Name"));

        while (contentGallery.firstChild) {
          //console.log("removing children");
          contentGallery.removeChild(contentGallery.lastChild);
        }
        noExpanded = true;
        createNodes();
        changeNodeStyles();
    }
    else if (dropdownValue == "nameReverseOrder") {
        jsonObject.sort(GetSortOrderDescending("Name"));

        // const collection = contentGallery.children;
        // for (var i = 0; i < collection.length; i++) {
        //     collection[i].style.width = "100%";
        //     collection[i].style.border = "thin solid red";
        //     //collection[i].style.width = "auto";
        //     collection[i].style.display = "grid";
        //     collection[i].style.justifyItems = "center";
        // }
        while (contentGallery.firstChild) {
          //console.log("removing children");
          contentGallery.removeChild(contentGallery.lastChild);
        }
        noExpanded = true;
        createNodes();
        changeNodeStyles();
    }
    else if (dropdownValue == "birthdayOrder") {
        jsonObject.sort(GetSortOrderBirthdayAscending("Birthday"));
        while (contentGallery.firstChild) {
          console.log("removing children");
          contentGallery.removeChild(contentGallery.lastChild);
        }
        noExpanded = true;
        createNodes();
        changeNodeStyles();
    }
    else if (dropdownValue == "birthdayReverseOrder") {
        jsonObject.sort(GetSortOrderBirthdayDescending("Birthday"));
        while (contentGallery.firstChild) {
          console.log("removing children");
          contentGallery.removeChild(contentGallery.lastChild);
        }
        noExpanded = true;
        createNodes();
        changeNodeStyles();
    }

});

function findInJSON(value, key, JSON) {
    for (var i = 0; i < JSON.length; i++) {
        if (value == JSON[i][key]) {
            return i;
        }
    }
}

contentGallery.addEventListener("click", function(e) {
    //var index = contentGallery.children(e.target)
    //var map = contentGallery.children[index];
    var map = e.target.parentElement;
    var name = map.firstChild.innerText;
    //console.log(e.target.parentElement);
    //console.log(e.target.parentElement.firstChild.innerText);
    //console.log(map.style.gridColumn);
    var ind = findInJSON(name, "Name", jsonObject);
    if (map.style.gridColumn == "span 2") {
        map.style.gridColumn = "span 1";
        map.style.gridRow = "span 1";
        map.style.paddingBottom = "2vmin";
        removeNewElementProper(map);
        noExpanded = true
        //console.log("span");
    }
    else {
        if (noExpanded) {
          map.style.gridColumn = "span 2";
          map.style.gridRow = "span 2";
          map.style.p = "larger";
          addNewElementProper(jsonObject[ind], map);
          //collection[ind].style.width = "80%";
          changeNodeStyles();
          map.style.paddingBottom = "5vmin";
          changeNewNodeStyles(contentGallery)
          noExpanded = false;
      }
    }
    /*
    if (map.style.width === "200%") {
        map.style.height = "100%";
        map.style.width = "100%";
    }
    else {
        map.style.height = "200%";
        map.style.width = "200%";
    }*/
});
