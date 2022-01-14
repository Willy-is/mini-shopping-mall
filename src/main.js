'use strict';

// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners();
  })
  .catch((error) => new Error(''));
