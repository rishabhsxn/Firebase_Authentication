## Firebase Authentication
---

### About  
It is a mobile application for __Login__ & __Signup__ using Firebase, created with React Native.  
User can enter details and Signup for an account. Then, the user can Login using the same credentials.

---  

##### Requirements:  
* [Node.js](https://nodejs.org/en/)
* [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)  
* Any Text editor, I have used [VS Code](https://code.visualstudio.com/)  
* [Firebase Account](https://firebase.google.com/)
 
---

### Installation  
1. Clone the repository and navigate into the folder.
   ```bash
   $ git clone https://github.com/rishabhsxn/Firebase_Authentication.git   
   ```         
2. Install the dependencies using npm.     
    ```bash
   $ npm install   
    ```
3. Create Firebase account -> go to Firebase Console -> create a project -> add an application.  
   
4. Go to Project Overview -> Project Settings. You will find a variable called `firebaseConfig`.
    ```javascript
    // this is just an example, your variable will not have empty strings
    var firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
         projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    }
    ```  
    Paste it in the App.js file.  

5. To run the application on expo, execute the command   
    ```bash
   $ npm start   
    ```   
---

### Demo  
![FirebaseAuth Demo](https://media.giphy.com/media/gIAsUHCewyZm1Fgfxw/giphy.gif)