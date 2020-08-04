# README

## Seat finder or *Where would Euclid seat?*

> Given an *N x M* matrix of possible *seats* in a venue and a list of seats  containing  their coordinates and availability status our system uses euclidean geometry to measure each seat's distance to the  *best seat* and returns the one with the smaller distance in relation the *best seat*

A *best seat* is always the center of the front row

### Use cases covered
* Returns the best possible seat whenever at least one seat is available. If there is only one seat that that's your best seat
* Returns a notification when the status of all the seats entered are different than "AVAILABLE".
* Returns an error message and try again call to action whenever the input format does not complies to the requirements.

### Motivation
To build simple single-page app using React on the front-end and rails on the backend all aided by redux as the app state manager

Our app takes a user input then send is to the back-end for computation, returns and answer to the front-end and present that information instantly to the user


#### Specs and instructions

* input specs
    the input on the textarea field most be text describing an object of the following attributes and structure. seats with an "status" other than "Available" are ignored from calculation, only seats explicitly declared in the object are considered for calculation.
    ```javascript
    {
        "venue": {
            "layout": {
                "rows": 10,
                "columns": 50
            }
        },
        "seats": {
            "a1": {
                "id": "a1",
                "row": "a",
                "column": 1,
                "status": "AVAILABLE"
            }
        }
    }

    ```


* Ruby and Roils versions
    ruby 2.6.6
    rails 6

* System dependencies:
    * Yarn
    * npm
    * node
    * Rails
    * React
    * React-Redux
    * React-Rails
    * Final Form


* Start the project locally:
    Quite simple just, clone the project and from  the project file run the below commands and see the magic happens
    1. `bundle install`
    2. `yarn install`
    3. `rails s -p 3000`

* Database creation
    SQLite is included but not used at all


* How to run the test suite
    Rspec is used for unit testing, run form the project folder:
    ```
    rspec spec/requests/seats_request_spec.rb
    ```