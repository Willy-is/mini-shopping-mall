# Mini Shopping Mall

This project is about to practice making the web application dynamic as data is stored in `JSON` file and `fetch` fetches the file.

## UI

1. There is a logo that shows all the items when clicked
2. There are 6 different buttons that filter the items (i.e. filtered by tshirt, blue etc)
3. Items are presented under the buttons and the information of the items is stored in JSON file

<img width="600" alt="index page" src="https://user-images.githubusercontent.com/57608628/149617640-a312dcc9-88de-415d-9720-be2d6b83fcf6.png">

## Dynamic web application

Web browser's fetch API is used to fetch the JSON file and `Promise` object is used to simplify callback functions. Once the file is converted to the array item, `map` converts the JSON format elements to strings that contain `<li>` tag, then, `join` combines the strings to one string. Also, there is another function that handles the event (click the buttons and the logo) to filter the items as below:

<img width="600" alt="filtered" src="https://user-images.githubusercontent.com/57608628/149617642-321c5398-f62d-4649-b3d0-bc0141a0998e.png">
