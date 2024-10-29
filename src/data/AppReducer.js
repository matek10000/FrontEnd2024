const AppReducer = (state, action) => {
    switch (action.type) {
        case "delete":
            return state.filter(person => person.id !== action.payload.id);

        case "edit":
            return state.map(person => 
                person.id === action.payload.id 
                    ? { ...person, ...action.payload } // Update the object
                    : person
            );

        case "rate":
            return state.map(person => 
                person.id === action.payload.id 
                    ? { ...person, rating: action.payload.rating } // Update rating
                    : person
            );

        case "ADD": // New case for adding a person
            return [...state, action.payload]; // Add the new person to the state

        default:
            return state;
    }
};

export default AppReducer;
