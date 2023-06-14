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
let titleEl = document.getElementById("title");
    /* NOTE: unlike in CSS, we do not put a # in frt of the id when using getElementById */
    /* If you'd like to be able to explore the properties of element, use console.dir() instead */

// SELECT A SINGLE ELEMENT USING A CSS SELECTOR
    /* The solution is to use the querySelector(selector) method that is avalible on the document object (and elements themselves) */
    /* The selector argument is a string that follows the rules of regular CSS3 selectors */
    /* The CSS3 selector lang offers amazing power to target elements for selection! */
    /* Knowing that the selector provided to querySelector(selector) follows the rule of CSS3 selectors, how could we modify our code to select our <h1> element by its id? */
    /* If the CSS selector provided to querySelector() matches multiple elements, it returns the "first" matching element. */
    /* If no matching node is found, null is returned. */

// PRACTICE
let pEL = document.querySelector("p");  // selects the first element w/ a class of cool and assigns it to a variable named pEL

// CHANGE THE CONTENT OF AN ELEMENT
    /* By inspecting the properties of a DOM element in the console, we will find a couple of properties that we can use to read and set its content:
        + innerHtml - Used to retrieve/set content ad HTML
        + textContent - Used to retrieve/se content as plain text */
    /* Let's check out the content of the <p> element by assigning the string Comments for <strong>Today</strong> first to textContent, then to innerHTML. */
pEL.textContent = "Comments for <strong>Today</strong>";    // the strong tags show as text instead of bold the string "Today"
pEL.innerHTML = "Comments for <strong>Today</strong>";      // the strong tags are recgonized as tags, so the string "Today" is bolded
    /* So, as you saw, if you want to include HTML in the content, use innerHTML */
    /* The power of innerHTML may not be obvious, but consider the string can be as complex as you want - containing multiple elements w/ attributes, etc. */
    /* However, using textContent is more efficient if just setting text. */

// CHANGE THE STYLE OF AN ELEMENT
    /* DOM elements have a style property that can be used to set CSS styling! */
    /* This is how we can set the text-align CSS property of our title: */
titleEl.style.textAlign = 'center';     // if in CSS -> text-align: center;
titleEl.style.color = 'green';          // if in CSS -> color: green;

// ATTRIBUTES OF AN ELEMENT
    /* You may need to get, set, or check if an element has a certain attribute */
    /* Here are a few of the methods that the Element API (application programming interface) has for working w/ an element's attributes:
        + getAttribute(name) - this method of Element interface returns the value of a specified attribute on the element. "name" is the name of the attribute whose value you want to get.
        + setAttribute(name, value) - this method sets the value of an attribute on the specified element. if the attribute already exists, the value is updated; otherwise a new attribute is add w/ the specified name and value. 
        + hasAttribute(name) - this method returns a Boolean value indicating whether the specified element has the specified attribute or not */

// PRACTICE - ATTRIBUTES OF AN ELEMENT
let aEL = document.querySelector('a');
aEL.setAttribute("href", "https://www.google.com");

// ATTRIBUTES OF AN ELEMENT - CLASSES
    /* Technically, you could use those attribute methods we saw to work w/ an element's classes */
    /* However, the classList property offers a better approach. It's an object w. the following methods pertaining to claases:
        + add(className, className, ...) - this method of the DOMTokenList interface adds the gien token(s) to the list, omitting any that are present.
        + remove(className, className, ...) - this method of the DOMTokenList interface removes the specified token(s) from the list.
        + toggle(className) - this method of the DOMTokenList interface removes an existing token from the list and returns false. if the token doesn't exist it's added and the function returns true.
        + contains(className) - this method of DOMTokenList interface returns a boolean value - true if the underlying list contains the given token, otherwise false. Think of this like a light switch.
        + replace(oldClass, newClass) - this method of the DOMTokenList interface replaces an existing token w/ a new token. if the first token doesn't exist, replace() turns false immediately, w/o adding the new token to the token list. */

// SELECTING MULTIPLE ELEMENTS
    /* The following methods can be used to select multiple elements:
        + getElementsByTagName(namesString) -  this method returns a live HTMLCollection of elements with the given tag name.
        + getElementsByClassName(namesString) - this method returns a live HTMLCollection which contains every descendant element which has the specified class name or names.
        + Although it's pretty cool that the returned list is automatically updated to include/exclude DOM elements as the DOM is updated, the above methods are not as flexible as the querySelectorAll method 
        + Like querySelector, the querySelectorAll(selector) method uses the power of CSS3 selectors to specify which DOM elements we want returned.
        + It selects all DOM elements that match the selector.
        + By itself, querySelectorAll actually provides all the DOM selection power a web dev needs! */