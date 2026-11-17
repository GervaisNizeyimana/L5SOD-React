// Import createContext from React
// createContext is used to create a Context for sharing data between components
import { createContext } from "react";

// Create a Context object named CountContext
// This Context will allow components to access shared data
const CountContext = createContext();

// Export CountContext so other components can import and use it
export default CountContext;