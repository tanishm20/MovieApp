# Movie App
**Project Setup**

* Install all required node dependencies using `yarn install`

**iOS:**

* Move into ios directory.
* Run `pod install`

**Android**

* No additional setup required for Android.

**Run on Device**

run yarn android or yarn ios to run on device or emulator


**Project Structure**

    /android                - React native android source code
    /ios                    - React native ios source code
    
    /App.js                 - App Root component
    
    /src                    - React native specific code
        /components         - reusable react native components
        /screens            - screen UI
        /navigation         - route config
        /redux              - all actions, reducers and sagas
        /utils              - some utility functions
    
    /redux
        /actions            - all redux actions
        /reducers           - all reducers
        /sagas              - all redux sagas         
        /index.js           - store config
     
     /utils
        /rest-client        - HTTP client method
        /routesConstants    - all routing name of screens
        /string-utils       - string formatting method
        /api-constants.js   - all urls
        

    
  
