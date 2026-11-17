
1. Definition of useMemo Hook
useMemo is a React Hook used to memorize (remember) the result of a calculation so that React does not need to calculate it again unnecessarily.

It helps improve application performance by avoiding unnecessary calculations.
2. Syntax of useMemo
const memorizedValue = useMemo(() => {
    // Calculation
    return result;
}, [dependencies]);


Explanation:
1. useMemo – React Hook used to memorize a calculated value.
2. () => {} – Function containing the calculation.
3. return – Returns the calculated result.
4. [dependencies] – Values that React monitors. When one changes, React recalculates the value.
