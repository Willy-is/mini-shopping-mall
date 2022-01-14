'use strict';

// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items (object -> li strings)
function displayItems(items) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// Create HTML list item for the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

// Filter items when onButtonClick listener occurs
function onButtonClick(event, items) {
  // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;

  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(new Error('Items not found'));
