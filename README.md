# Dictionary Management Application

## Assignment

*This application must satisfy the following requirements:*

- Functional Requirements
- Creating and deleting dictionaries
- Showing available dictionaries in an overview
- Editing dictionaries (adding, updating and removing rows) Validating the entire dictionary regarding consistency (see above)
- Validations should be shown as some kind of problem markers next to the offending part of the dictionary.
- Problem markers have different severities, e.g. Duplicates are less severe than a Cycle (in which case you cannot go on processing such a dictionary).
- Persisting dictionaries with validation errors for future editing

*Technical Requirements*

- Single page web application
- Angular 4, React/Redux, or any Javascript client-side framework you are familiar with
- LESS, SASS or CSS-in-JS library
- Typescript or ES6
- Build tool and dependency management of your choice
- It can be server-less, e.g. all data is only stored locally, e.g. using HTML 5 local history API or equivalent technologies.

## What I managed to do

- It's a single page web application
- I build it using React and some CSS in Visual Studio Code
- When the app is start, it come with some data already included
- The modifications are stored using localStorage
- Dictionaries can be added and deleted
- Rows can be added and deleted in/from a dictionary
- Rows can start being edited but the row is added instead of modified
- Validations seem to work
