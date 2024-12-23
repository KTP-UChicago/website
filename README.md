[UChicago Kappa Theta Pi chapter website.](https://uchicagoktp.com/) Design from UMich chapter.

# File Structure
The react application code is located in `react-app/src/`. All assets are located in `react-app/public/assets`. All scripts are located in `scripts/`. The old website is located in `old-website/`. 


## The `react-app/src/` directory
Our react application uses typescript here because it is more readable and easier to maintain. We use [Material-UI](https://mui.com/material-ui/) for the design of the website and [styled-components](https://styled-components.com) for the styling of the components.
When building new components, they should be placed in the `components` directory. The `pages` directory contains the main pages of the application. The components themselves should exist in the following structure:
```
componentName/
    ComponentName.tsx
    styled.ts
```
 The `styled.ts` file contains all the styled components used in the component for `ComponentName.tsx`.

 Our application is structured as follows:
- `components` - Contains all the components used in the application.
    - `pages/`
        - Where the main pages of the application are located. When adding a new page, make sure to use the `PageTemplate` component to wrap it so it has the same layout as the other pages, such as the navbar and footer.
        - Additionally, you need to edit `NavBar.tsx` and `PageTemplate.tsx` to add the new route and mapping to the respective page. 
        - Note that we use [hash routing](https://www.geeksforgeeks.org/hashrouter-in-react-router/), so if you ever see a `#` in the URL, that is why. So if you ever use `window.location.href` to set the URL, make sure to include the `#` in the URL. But for `<Link>` components, you don't need to include the `#` in the URL. Reference `NavBar.tsx` for examples.
    - `core/`
        - Contains the core components used in the application. Add anything that you think will be reused here.
- `hooks` - Contains all the custom hooks used in the application.
- `context.tsx` - Contains the context provider for the application.
- `libs` - Contains all the libraries used in the application.
- `utils` - Contains all the utility functions used in the application.
- `App.tsx` - The main application file.

# How to Run
1. Navigate to the `react-app` directory.
2. Use `npm install` to install all dependencies
3. Use `npm start` to run the application on `localhost:3000`



