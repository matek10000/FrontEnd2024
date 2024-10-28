const AppReducer = (state, action) => {
    switch (action.type) {
        case "delete":
            return state.filter(person => person.id !== action.payload.id);

        case "edit":
            return state.map(person => 
                person.id === action.payload.id 
                    ? { ...person, ...action.payload } // Aktualizuj obiekt
                    : person
            );

        case "rate":
            return state.map(person => 
                person.id === action.payload.id 
                    ? { ...person, rating: action.payload.rating } // Zaktualizuj rating
                    : person
            );

        default:
            return state;
    }
};

export default AppReducer;
