# Meet App

## How Was This App Made?
  This is a progressive web-application (PWA) built through test-driven development via Jest and Asastus.

  React components were mainly utilized and Recharts acted as a major dependency in showing data through pie-charts and scatterplots. Users can visit the app using this [link]https://github.com/rbkh17willis/meet.git

## What Does This App Do?
  Upon opening the PWA, users will be prompted login via a 3rd party authorization server (Google OAuth).

  After logging in, the user can search for events in specific cities and/or change the number of events showing from the output. The output will display events that fit the user's selected criteria.

  The pie chart and scatterplot will be displayed above the outputted events and will reflect composition of the data based on the user's input.

## App Outline
FILTER EVENTS BY CITY

As a user, I should be able to filter events by city. So that I can see a list of events taking place in that city.
Scenario 1: The user opens the app and searches a city.

Given the main page with the search option has been opened, when the user enters a city, then they should be shown upcoming events for that city.

Scenario 2: The user opens the app and hasn't searched a city.

Given the main page with the search option has been opened, when the user opens the app, then they should be shown a list of all events for all the cities available.

Scenario 3: The user can select a city from the suggested list.

Given user was typing "Berlin" in the city textbox AND the list of suggested cities is showing, when the user selects a city (e.g., "Berlin, Germany") from the list, then their city should be changed to that city (i.e., "Berlin, Germany") AND the user should receive a list of upcoming events in that city.

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user, I should be able to show or hide event details after I have selected a city where I want to look up the events.

Scenario 1: An event element is collapsed by default
Given the user first opens the app when the user receives the full list of events (specific for the city or all events), then all events will collapse by default.
Scenario 2: The user can expand an event to see its details
Given the user gets a list of events, when a user selects an event's details, then the details will show up for that chosen event.
Scenario 3: User can collapse an event to hide its details
Given the user sees the details of an event, when the user presses a button to hide the event's details, then the details of that event will be hidden.

FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to specify the number of displayed events, after I have selected the number of displayed events.

Scenario 1: When the user hasn't specified a number, 32 is the default number.
Given the user hasn't specified or filtered the number of events, when the user sees the list of events then the default number of displayed events will be 32.
Scenario 2: Users can change the number of events they want to see.
Given the user has events displayed, when the user chooses to change the number of events displayed, then the number of events displayed will update to the number the user selected.

FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I should be able to get events information when offline, that was fetched while having an internet connection.

Scenario 1: Show cached data when there's no internet connection.
Given the user has no internet connection, when the user is accessing the app, then cached data, stored inside the app, will be provided to the user.
Scenario 2: Show an error when the user changes the settings (city, time range).
Given the user has no internet connection, when the user is trying to access new event information (change the city, etc.), then the app will show an error.

FEATURE 5: ADD AN APP SHORTCUT TO THE HOME SCREEN

As a user, I should be able to add a shortcut of the app to the home screen, so I can access the app quicker.

Scenario 1: The user can install the Meet App as a shortcut on their device's home screen.
Given the user wants to install the app, when the user selects to install the app as a shortcut, then a shortcut is created on the user's home screen.

FEATURE 6: DISPLAY CHARTS VISUALIZING EVENT DETAILS

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 1: Show a chart with the number of upcoming events in each city.
Given the user is on the events detail page, when the user clicks the button to see a chart of those events in all the cities as a comparison, then a chart with the number of upcoming events for every city, will be shown to the user.

# Serverless Function
The Meet App uses serverless functions for event notifications, data processing in real-time, user authentication, event recommendations, and scalability. By leveraging serverless technology, the app can efficiently handle backend processes, and scale according to the demands of the user.
Serverless functions will play a crucial role in handling authorization for accessing public calendar events from the Google Calendar API. Users will need to be authorized to retrieve event data for rendering in the React app. In this application, serverless functions will generate and provide access tokens, ensuring secure access to the Google Calendar API. AWS Lambda will be the cloud service provider for implementing these serverless functions, making the app's structure more scalable and cost-effective.
