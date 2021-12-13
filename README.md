> ## SignUP and login service.

- Sign via form
- Enter credentials to verify on remote.
- Responsed token will be saved in LocalStore.

---

| Dir in src/js |                  Comment                  |
| :-----------: | :---------------------------------------: |
|    config     |      apiURL and amail/pass elements       |
|    helpers    |     regExp for validation email, pass     |
| plugins\axios | create axios instance, interceptors,token |
|   services    |       remote auth-connect via axios       |
|     sign      |       remote sign-connect via axios       |
|     views     |             alerts and notify             |
|    app.js     |             main webpack-file             |

![img](https://unsplash.it/850/50)
