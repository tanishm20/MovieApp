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
        

    
**App running on IOS simulator**


https://user-images.githubusercontent.com/50777407/234813838-8882f084-f1bf-4584-8108-c53f5d16b54e.mp4


**App running on Android device**

https://user-images.githubusercontent.com/50777407/234813669-c6ae50c6-67d4-4b1f-bdef-4157033c6a2d.mp4



