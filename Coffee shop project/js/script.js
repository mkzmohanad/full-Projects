"use strict";
AOS.init();
const menu = [
    {
        name:"Coffee",
        price:"12.00$",
        description:"We provide the best delicious Coffee in the world for you.",
        img : "/pics/menu-img-1.png",
    },
    {
        name:"Cappuccino",
        price:"35.00$",
        description:"We have one of the most delicious Cappuccino in the country.",
        img : "/pics/menu-img-2.png",
    },
    {
        name:"Iced Coffee",
        price:"22.99$",
        description:"We provide amazing Ice Coffee by an experts.",
        img : "/pics/menu-img-3.png",
    },
    {
        name:"Latte",
        price:"40.50$",
        description:"Many people from all over the world comes to test our Latte.",
        img : "/pics/menu-img-4.png",
    },
    {
        name:"Americano",
        price:"25.75$",
        description:"Our Americano Coffee is considered to be one of the most popular in our Coffee Shop.",
        img : "/pics/menu-img-5.png",
    }
]
const usersReviews = [
    {
        name : "Mohanad Shohdy",
        email : "@mkzmohanad",
        fullStar : 5,
        halfStar : 0,
        image: "/pics/user-1.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolor. Enim quasi eius doloribus error, nisi facilis provident nihil magnam modi nobis a cumque dolor recusandae laboriosam omnis incidunt praesentium illo repellat cupiditate consequuntur libero ex, tempora distinctio. Architecto, similique!"
    },
    {
        name : "Sara Miller",
        email : "@saramiller",
        fullStar : 5,
        halfStar : 0,
        image: "/pics/user-2.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolor. Enim quasi eius doloribus error, nisi facilis provident nihil magnam modi nobis a cumque dolor recusandae laboriosam omnis incidunt praesentium illo repellat cupiditate consequuntur libero ex, tempora distinctio. Architecto, similique!"
    },
    {
        name : "Jemmy Smith",
        email : "@jemmysmith",
        fullStar : 5,
        halfStar : 0,
        image: "/pics/user-3.jpg",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime porro consequatur, non vel adipisci aut, quia dolorem deserunt odio animi ipsum debitis. Ipsa, eum harum corporis omnis cum repellendus praesentium!"
    },
    {
        name : "Ellie Williams",
        email : "@elliewilliams",
        fullStar : 4,
        halfStar : 1,
        image: "/pics/user-4.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dignissimos. Ipsum explicabo corporis expedita deserunt optio accusamus impedit voluptas cumque fugiat earum facilis, ex praesentium nemo blanditiis quia maiores? Ad perferendis amet quas natus nisi commodi excepturi!"
    },
    {
        name : "Kevin Musk",
        email : "@kevinmusk",
        fullStar : 4,
        halfStar : 1,
        image: "/pics/user-5.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolor. Enim quasi eius doloribus error, nisi facilis provident nihil magnam modi nobis a cumque dolor recusandae laboriosam omnis incidunt praesentium illo repellat cupiditate consequuntur libero ex, tempora distinctio. Architecto, similique tempora distinctio. Architecto, similique!"
    },
    {
        name : "Mark Watterson",
        email : "@markwatterson",
        fullStar : 4,
        halfStar : 1,
        image: "/pics/user-6.jpg",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dolor. Enim quasi eius doloribus error, nisi facilis provident nihil magnam modi nobis a cumque dolor recusandae laboriosam omnis incidunt praesentium illo repellat cupiditate consequuntur libero ex,"
    },
    {
        name : "Tara Tennyson",
        email : "@taratennyson",
        fullStar : 4,
        halfStar : 0,
        image: "/pics/user-7.jpg",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime porro consequatur, non vel adipisci aut, quia dolorem deserunt odio animi ipsum debitis. Ipsa, eum harum corporis omnis cum repellendus praesentium!"
    },
    {
        name : "Gwen  Edison",
        email : "@gwenedison",
        fullStar : 4,
        halfStar : 0,
        image: "/pics/user-8.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dignissimos. Ipsum explicabo corporis expedita deserunt optio accusamus impedit voluptas cumque fugiat earum facilis, ex praesentium nemo blanditiis quia maiores? Ad perferendis amet quas natus nisi commodi excepturi!"
    },
]
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
const links = document.querySelectorAll(".links");
const change = document.querySelector(".chang-img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const counterVisitors = document.querySelector(".counter-Visitors");
const counterProducts = document.querySelector(".counter-products");
const counterBrands = document.querySelector(".counter-brands");
const counterBranches = document.querySelector(".counter-branches");
const menuDiv = document.querySelectorAll(".menu-list");
const arrOfImgs = ["/pics/main-img-1.png" , "/pics/main-img-2.png" , "/pics/main-img-3.png"];
const allCounters = document.querySelectorAll(".counter")
const switchBtns = document.querySelectorAll(".btn-switch")
const allReviews = document.querySelectorAll(".review")
const sections = document.querySelectorAll(".section")
const countSection = document.querySelector(".counting-statues");
const collapseBtn = document.querySelector("nav button");
const icons = document.querySelector(".icons")
let imgCounter = 1;
let menuCounter = 0;
let callFunction = true;


window.addEventListener("scroll" ,function(){
    if (this.scrollY >= 2751) {
        if (callFunction) {
            console.log(this.scrollY) 
            allCounters.forEach(function(counter){
                increaseCounter(counter)
            })
        }
        callFunction = false;
    }
});

setInterval(function() {
    if (imgCounter === arrOfImgs.length - 1) {
        imgCounter=0 ;
    }
    else {
        imgCounter++;
    }
    if (arrOfImgs[imgCounter] === arrOfImgs[0]) {
        change.style.height = "90vh"
    }
    else {
        change.style.height = "60vh"
    }
    change.src = arrOfImgs[imgCounter];
},3000)


links.forEach(function(link){
    link.addEventListener("click", function(linkEvent) {
        links.forEach(function(link){
            link.classList.remove("focused");
        })
        linkEvent.target.classList.add("focused");
    })
})

// start click events

switchBtns.forEach(function(switchBtn){ //0,1 1,2 2,3 3,4
    switchBtn.addEventListener('click', function(){
        switchBtns.forEach(function(switchBtn){
            switchBtn.classList.remove("switched-btn") ;
        })
        switchBtn.classList.add("switched-btn");
        let firstReviewBox = parseInt(switchBtn.id[0]);
        let secondReviewBox = parseInt(switchBtn.id[2]);
        changeReviewInfo(firstReviewBox,0);
        changeReviewInfo(secondReviewBox,1);
    } );
});
// ------------------------
darkMode.addEventListener("click" , function() {
    clickHidden(darkMode,lightMode);
    sections.forEach(function(section){
        console.log(section.id)
        if(section.id === "home") {
            section.classList.add("second-dark")
        }
        else {
            section.classList.add("dark")
        }
    })
    document.querySelector("nav").classList.add("dark","dark-nav")
});

lightMode.addEventListener("click" , function() {
    clickHidden(lightMode,darkMode);
    sections.forEach(function(section){
        section.classList.remove("dark")
        section.classList.remove("second-dark")
        document.querySelector("nav").classList.remove("dark","dark-nav")
    })
});
// ------------------------
collapseBtn.addEventListener("click" , function() {
    icons.classList.toggle("center-icons-collapse")
})
// ------------------------
next.addEventListener("click" ,function(){
    menuCounter++;
    checkMenuCounter();
    changeMenuInfo();
});
prev.addEventListener("click" ,function(){
    menuCounter--;
    checkMenuCounter();
    changeMenuInfo();
});

// end click events

// start functions

function clickHidden(first,second) {
    first.classList.add("hidden");
    second.classList.remove("hidden");
}

function checkMenuCounter () {
    console.log(menuCounter)
    if(menuCounter === 0) {
        prev.classList.add("disabled");
    }
    else if (menuCounter === menu.length-1) {
        next.classList.add("disabled");
    }
    else {
        prev.classList.remove("disabled") ;
        next.classList.remove("disabled") ;
    }
}
checkMenuCounter();
// ------------------------
function changeMenuInfo () {
    menuDiv.forEach(function(div){
        div.children[0].children[0].src = menu[menuCounter].img;
        div.children[1].children[0].children[0].textContent = menu[menuCounter].name;
        div.children[1].children[0].children[1].textContent = menu[menuCounter].price;
        div.children[1].children[1].textContent = menu[menuCounter].description;
    })
};
changeMenuInfo();
// ------------------------
function increaseCounter(elementCounter) {
    let limit = elementCounter.dataset.counter;
    let interval = setInterval(function (){
        elementCounter.textContent ++;
        if (elementCounter.textContent === limit) {
            elementCounter.textContent+="+"
            clearInterval(interval);
        }
    },2000/limit)
}
// ------------------------
function changeReviewInfo (userNum,reviewNum){
    let countStars = 0;
    let fullStars = usersReviews[userNum].fullStar;
    let halfStars = usersReviews[userNum].halfStar;
    allReviews[reviewNum].children[1].innerHTML = `<blockquote>${usersReviews[userNum].description}</blockquote>`; //done
    allReviews[reviewNum].children[0].children[0].children[0].children[0].src = usersReviews[userNum].image; //done
    allReviews[reviewNum].children[0].children[0].children[1].children[0].textContent = usersReviews[userNum].name; //done
    allReviews[reviewNum].children[0].children[0].children[1].children[1].textContent = usersReviews[userNum].email; //done
    while (countStars <= 4) {
        if (fullStars > 0) {
            allReviews[reviewNum].children[0].children[1].children[countStars].children[0].classList.add("fa-solid","fa-star")
            fullStars--;
        }
        else if (halfStars > 0) {
            allReviews[reviewNum].children[0].children[1].children[countStars].children[0].classList.add("fa-solid","fa-star-half-stroke");
            halfStars--;
        }
        else {
            allReviews[reviewNum].children[0].children[1].children[countStars].children[0].classList.add("fa-regular","fa-star")
        }
        countStars++;
    }
}
changeReviewInfo(0,0)
changeReviewInfo(1,1)

// end functions