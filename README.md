# Reactjs test

## Info

This app has been developed using [Reactjs](https://es.reactjs.org/) as JavaScript framework and it uses modern JS from ES6 and on. In regards React ecosystem it uses [React Redux](https://react-redux.js.org/) as single source of truth and global state management. For asynchronous actions and side effects, such as fetch calls the app uses [Redux Saga](https://redux-saga.js.org/). [React Router](https://reacttraining.com/react-router/) is used to manage the different routes accessibles by the user in the SPA. Selecting pieces of the state from the different reducers is done with the help of [Reselect](https://github.com/reduxjs/reselect) memoized selectors.
Both in React, Redux and Router new hooks and custom hooks are used instead of older and more verbose patterns. React class components have been replaced by functional components using useState and useEffect. Connect, mapStateToProps and mapDispatchToProps patter have been replaced by useDispatch and useSelector. Withrouter HOC has been replaced by useHistory and useParams.
For bundling the app webpack has been used, with babel as parser and eslint and prettier as code linters. Webpack config can be found at /build-tools. Within the folder you can find 4 files, a webpack.common.js file with common config both for production and development, one file with production, one for development and the last one which combines common config and current enviorment config. Babel, eslint and prettier configs can be found at the project root folder inside .babelrc, .eslintre and .prettierrc.
Styling has been done manually using styled componets with scss.

## Installing the app

The app is live at [Brastlewark Census](https://brastlewark-census.firebaseapp.com/).
If you want to download it just clone the repo and yarn install in the root folder of the project. Keep in mind that API url from where the info is taken is passed using enviormental variables so you will have to either change it at App.jsx or create your own .env file and add API_URL variable.
Out of the box, the yarn commands present in the package.json are:

- yarn dev: starts the development server with HMR
- yarn build: bundles production build to build folder
- yarn test: to execute jest + enzyme testing

## App Skeleton

The app is thought to be a SPA with no page scrolls, viewed in full screen portrait mode. It is optimized for different screen sizes. A device check is implemented so when the app loaded in a mobile device a modal is shown to asks the user for permission to launch it in full screen, and forces portrait mode to ensure the best experience. This modal will be fired again if the user somehow exits the fullscreen mode.
In regards of navigation, it implements two routes, home at "/" and citizens at "/citizens".
At home user can read a brief description of the app and interact with a "Let's start the search!" button. After clicking the button the user will be taken to the citizens page where he or she can find 2 main elements:

- A card list scrolleable component with a card for each gnome in the Brastlewark census with the picture and the name.
- A searchbox combo with 2 search boxes, one for the gnome name and one for the profession.
  -- The two searchboxes are complimentary, you can search by name, by profession or using a combination of both. When entering a value in the profession searchbox it will look for any of the gnomes profession that matches the text entered.
  -- The searchbox has 1.5 seconds debounce delay from the moment you stop writing to the moment the search filter is applied to the gnomes list. This is for not to hammer the redux with infinite actions.

  Cards are clickable. When you click on a card a modal will be opened showing information of the selected gnome. It will show the picture, the personal data, professions and friends. The modal can be closed by clicking outside of it or by clicking the close (X) icon in the top right corner.

  You can go back to the home page by clicking the icon at the navbar (two swords crossed and a shield). In the footer section you can find a link to github repositories.

  Navigation won't be blocked while fetching the API. Users can go to citizens page from home and if the data is not yet at the reducer loading CardSkeletons will be shown until the data loading is finished.

## Data management

As stated before the global state is managed with Redux, Saga and reselect. There are two reducers, one for the modal data and one for the api data.

#### Modal reducer

Modal reducer is used for containing the modal visibility boolean "showModal" and the data needed by InnerModal to know what component it has to render each time.
Components shown in the modal are lazy loaded and only imported when they are going to be used. modalType stores the string that tells InnerModal which component to import and modalProps is an object with the props needed by the rendered component.
We have two actions for the modal reducer:

- openModal that takes modalData with modalType and modalProps keys and sets showModal to true.
- closeModal that resets modal reducer to its initial state.
  The interaction with the modal reducer is done by clicking on a card item, which opens the detailed information of the gnome in the modal, and by the device check, that opens the message to enter fullscreen portrait mode for mobile devices.

#### Data reducer

Data reducer stores the string values of the searchboxes, gnome name and profession, a loadingData boolean that flags to true until the fetch call to the api is finished, a gnomesData array of objects with the gnomes info and an error string for eventually errors while fetching the data.
We have six actions in the data reducer:

- toggleDataLoading that takes a boolean to set either the loadingData to true or false depending when the action is called.
- fetchApiStart. This action is triggered by an useEffect when the App loads. Since this action leads to an async event, a fetch call done with axios, this will be handled by Saga. Once the action is triggered with the url as payload Saga takes it and executes a helper function that makes the api call and awaits until it is resolved. Once it is resolved the data Saga will trigger one of two actions:
  -- fetchApiSuccess with a payload of an array of objects with the gnomes information. The data that is received from the api is processed at the helper to change hair_color property to hairColor for correct camelCase and to trim the extra " " at the begining of "Tinker" profession.
  -- fetchApiFailure with a payload of the error.message string in case the fetch fails.
- setGnomeNameSearchField action is triggered by an useEffect hook at SearcBoxCombo component once the value of gnomeName remains unchanged for 1.5 seconds. This deboune is done by a custom hook named useDebounce that can be found in the src/helpers among with another helpers used in the app.
- setProfessionSearchField that works the same as setGnomeNameSearchfield.

#### Image handling

Images are lazy loaded. The images won't be shown until they are cached and a placeholder image will be shown until that moment. Also, images won't start loading until a certain breakpoint in the CardList component scroll is reached so the app does not try to load all the images at a time when it initially renders citizens page.

## PWA

The app is PWA ready. HTML metas are loaded using React Helmet, it has the manifest, the favicons for the different resolutions and devices, https and a serviceWorker registerd. Thanks to the service worker the app can be used even if offline with the data stored at local cache. The app can be installed so it gives a more appy feel in the mobile devices.

## Testing

Testing is done with Jest and Enzyme. **_jest-styled-components_** and **_enzyme-to-json/serializer_** plugins has to be used to shallow render testing the components due to styled components nature.
Due to the [unsolved](https://github.com/enzymejs/enzyme/issues/2011) issue with useEffect and enzyme, not yet supported for shallow render, and because Enzyme heavily encourages to use shallow mode as much as you can for unit testing some workarounds had to be done to enforce the testing.
useEffect has being mocked to mimic its behavior using:

```
    let useEffect;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    useEffect = jest.spyOn(React, 'useEffect');

```

and then calling it twice in each test we wanted to mimic its functionality, the first one to execute it and the second to stop it and no trigger an infinite loop

```
    mockUseEffect();
    mockUseEffect();

```

Also **_redux-mock-store_** has been used to create mock stores to be able to test dispatching actions together with mocked useDispatch redux hook

```
    jest.spyOn(Redux, 'useDispatch').mockImplementation(() => store.dispatch);

```

useState is now working in the latest versions of Enzyme but its values cannot be accessed directly like the props values of class component so their values are tested indirectly through components values.

```
    const card = wrapper.find('Card');
    expect(card).toHaveLength(1);
    expect(card.prop('height')).toEqual(125);

```

- Card, CardList and CardSkeletons have shallowed snapshot testing integrated.
- dataReducer and dataActions also have unit test integrated

## SVGs credits

- ORC SVG [By Darius Dan](https://www.flaticon.com/authors/darius-dan)
- GNOME SVG [By Good Ware](https://www.flaticon.com/authors/good-ware)
- PROFFESION SVG [By Freepik](https://www.flaticon.com/authors/freepik)
- CLOSE SVG [By Pixel perfect](https://www.flaticon.com/authors/pixel-perfect)
