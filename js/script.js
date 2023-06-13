// WHAT'S THE DOM?
/*
    - The DOM (document object model) is the in-memory representation of a browser's web document.
    - It's a tree-like data structure w/ the top (root) being the document object.
    - The DOM's API (application programming interface) enables developers to make the UI dynaic by using JS to:
        + Add/remove elements to/from the document
        + Change the content of elements
        + Change the style properties of elements
*/

// SELECTING DOM ELEMENTS
/*
    - Web devs make web pages dynamic by manipulating the DOM. For ex:
        + In a To Do app, the user types a new todo into an input, clicks a button and the new todo is added to the list.
    - The above scenario requires the app's JS to:
        + Attach an event listener to the button element
        + Grab the text entered from the input element
        + Create a new element, e.g. an li, and set it's content
        + Append the new element to its parent
    - Devs must use JS to select DOM elements so that the above steps can be performed.
*/

// SELECT A SINGLE ELEMENT BY ITS ID
/* The getElementByID method is the most efficient way to select a DOM element if it has an id assigned to it */
const titleEl = document.getElementById("title");
    /* NOTE: unlike in CSS, we do not put a # in frt of the id when using getElementById */
    /* If you'd like to be able to explore the properties of element, use console.dir() instead */
