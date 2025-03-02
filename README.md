# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

    # React Hooks - Normal JS function
    // Most important 2 hooks 
    // useState() - superpowerful local state variable in react
    // useEffect() - 

    # React Core Concept ->
    // React uses Reconciliation Algorithm also known as React Fiber (came in React 16)
    // Virtual DOM is representation of Actual DOM
    // Virtul DOM is React Elements (JS object) -> console.log(<Component />) will give you React Element which is normal JS object.
    // Diff Algorithm -> finds out difference between updated virtual DOM and previous virtual DOM -> this will actually update the actual DOM on every render cycle.

    //Example ->
    // If there are 15 restaurants which are loaded at start of the component and when user clicks on Top Rated filter button the restaurant data changes to (continues nexct line)
    // 7 then a new object is created with this new data. The diff algorithm finds the difference between new 7 resturant object with old 15 resturant object and then updates the actual DOM


    # useEffect core concepts
    // If no dependency array => useEffect is called on every component render 
    // If dependency array is empty = [] => useEffect is called on initial component render(only once)  
    // If dependency array is [isLoggedIn] => useEffect is called everytime isLoggedIn is updated
    useEffect(() => {
        console.log("useEffect called");
    }, []);


    # 2 types of routing in web apps
    - Client side routing
    - Server side routing


    # Class based component refer -> User.jsx file and Contact.jsx file





