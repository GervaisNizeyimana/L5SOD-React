// Import CountContext from the contexts folder
// CountContext is used to share data between components
import CountContext from "../contexts/CountContext";

// Import useState Hook from React
// useState is used to store and update the count value
import { useState } from "react";

// Create a functional component named CountProvider
// children represents all components placed inside this Provider
function CountProvider({ children }) {

    // Create a state variable called count with an initial value of 0
    // setCount is used to update the count value
    const [count, setCount] = useState(0);

    // Create a function named increment
    function increment() {

        // Increase the current count by 1
        // setCount updates the state with the new value
        setCount(count + 1);
    }

    // Create a function named decrement
    function decrement() {

        // Decrease the current count by 1
        // setCount updates the state with the new value
        setCount(count - 1);
    }

    // Return the Provider to share count, increment and decrement
    return (
        <CountContext.Provider

            // Share count and both functions with child components
            value={{ count, increment, decrement }}
        >

            {/* Display all components wrapped inside the Provider */}
            {children}

        </CountContext.Provider>
    );
}

// Export CountProvider so it can be used in other components
export default CountProvider;