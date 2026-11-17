// Import React library
import React from 'react';

// Import the Count component
// Count displays the current count and provides buttons to change it
import Count from './Count';

// Import CountProvider from the providers folder
// CountProvider shares count data with its child components
import CountProvider from './providers/CountProvider';

// Create a functional component named App
function App() {

    // Return the JSX to display in the browser
    return (

        // Wrap Count inside CountProvider
        // This allows Count to access the shared count data and functions
        <CountProvider>

            {/* Display the Count component */}
            <Count />

        </CountProvider>
    );
}

// Export App so it can be imported into main.jsx
export default App;