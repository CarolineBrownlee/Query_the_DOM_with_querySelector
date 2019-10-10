// ***** Beginning of In Class Lecture Exercise ***** //

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/

// const sectionEl = document.querySelector(".article__section")
// console.log(sectionEl);

/*
    This code will only return the third section component
*/
// const footerEl = document.querySelector(".article__footer")
// console.log(footerEl);

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

/*
    This code will return all section components
*/
// const sectionElAll = document.querySelectorAll(".article__section")
// console.log(sectionElAll);

/*
    This code will still only return the third section component
*/
// const sectionElAllTwo = document.querySelectorAll(".article__footer");
// console.log(sectionElAllTwo);


// ***** BEGINNING OF PRACTICE EXERCISE ***** //

// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const textChange = document.querySelector(".article__header").textContent = "Welcome to Caroline's Blog";

console.log(textChange);

// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const classPropertyChange = document.querySelectorAll(".article__header");
console.log(classPropertyChange);

classPropertyChange.forEach((currentNode) => currentNode.classList.add("important"))

// 3. Obtain a reference the element with a class of dashed and remove it.

document.querySelector(".dashed").classList.remove("dashed")

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

document.querySelector(".article__footer").classList.add("goldenrod");