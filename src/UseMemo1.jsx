// Import useMemo and useState hooks from React
import { useMemo, useState } from "react";

// Declare a functional component named useMemo1
function useMemo1() {

    // Create a state variable called unitPrice with an initial value of 0
    // setUnitPrice is used to update the unitPrice value
    const [unitPrice, setUnitPrice] = useState(0);

    // Create a state variable called quantity with an initial value of 0
    // setQuantity is used to update the quantity value
    const [quantity, setQuantity] = useState(0);

    // useMemo stores the result of a calculation to avoid unnecessary recalculations
    const total = useMemo(() => {

        // Multiply the unit price by the quantity and return the result
        return unitPrice * quantity;

    // Dependency array: recalculate total when unitPrice or quantity changes
    }, [unitPrice, quantity]);

    // Return the JSX that will be displayed on the browser
    return (
        <div>

            {/* Display the heading of the application */}
            <h2>Total price auto calculator</h2>

            {/* Display the current unit price */}
            <p>Unit price: {unitPrice} FRW</p>

            {/* Display the current quantity */}
            <p>Quantity: {quantity}</p>

            {/* Display the calculated total price */}
            <h3>Total: {total} FRW</h3>

            {/* Input field where the user enters the unit price */}
            <input
                // Specify that the input accepts numbers
                type="number"

                // Display a message inside the input before typing
                placeholder="Enter unit price"

                // onChange runs whenever the user changes the input value
                onChange={(event) =>

                    // Get the value entered by the user and update unitPrice
                    setUnitPrice(event.target.value)
                }
            />

            {/* Add a small space between the two input fields */}
            &nbsp;

            {/* Input field where the user enters the quantity */}
            <input
                // Specify that the input accepts numbers
                type="number"

                // Display a message inside the input before typing
                placeholder="Enter quantity"

                // onChange runs whenever the user changes the input value
                onChange={(event) =>

                    // Get the value entered by the user and update quantity
                    setQuantity(event.target.value)
                }
            />

            {/* Move the next content to a new line */}
            <br />

            {/* Add another line break for spacing */}
            <br />

        </div>
    );
}

// Export the component so it can be imported and used in another file
export default useMemo1;