# mlb

    Clone Repo from github
    cd mlb

## mlb-brain

    cd mlb-brain
    npm install
    npm run start:dev

## mlb-web

    open new terminal
    cd mlb-web
    npm install
    npm start (or ng serve)

### Specification

    1. Backend created in NestJs
        * Quick and easy rest API
    2. Frontend created in Angular
        * Went with angular for the front end, if the application continued to grow then a state manager like NGRX might be useful pass around data through the application.
        Currently I am using a service to pass data around the application, for example click a team then getting the team information on the subsequent page along with the roster information with out 2 calls to the backend on that new page.
    3. Angular Material and FlexLayout used to design the application.
        * I went with angular material for the design of the app to keep everything uniform and not to complex. FlexLayout helps create rows and columns throughout the application.
    4. FxLayout used to make the application mobile friendly.
        * FxLayout also has built in breakpoints to help the application be more mobile friendly
    5. Full list of mlb teams shows on initial view. The teams are sortable by  A-Z and league/division. Filter by text search, as will as drop down selects for league and division.
        * I went with a card view to showcase the teams. When filtering the other inputs are taken back to their initial state so that the user knows what criteria they are filtering against. Sorting will logic will stay in place when filtering.
    6. Selection a team takes you to a team page, where current roster is shown.
        * I wanted to have an additional page for presentation sake, and to show routing within the application. 1 call is made when getting the roster for the team, and the team informaiton is passed in as a parameter from the previous component. If there is no previous component (directing to the page via the url), then an additional call is made to get all the teams and the team ID is retrieved from the URL.
    7. Selection of a player from roster shows a player card with more details about that player.
        * Upon the selection of a player from the roster a new component shows below with the data of that player.
    8. All 3 endpoints are used to retrieve the data.
        * Only used the 3 enpoints given. In regards to the team page when directed there by the URL, it would be easier to make a call for that team rather than all the teams and filtering them by the ID.
    9. Using api header to retrieve data from Backend
    10. api header is not included in the client side code.
        *API Key is not included within the client side code, and no direct calls from the fontend are made.
    11. Didnt implement a solution for this step.
        * I would normally implement this step within the authentication of the user for the application. The user object may have roles or paramenters which would include the api key used to make certain calls from the backend.
    12. Source code is on github
    13. Readme file includes  instructions to start both back and front end.
    14. multiple systems tested while developing application.
