const AppReducer = (state, action) => {
    switch (action.type) {
        case "delete":
            return state.filter(person => person.id !== action.payload.id);

        case "edit":
            return state.map(person => 
                person.id === action.payload.id 
                    ? { ...person, ...action.payload }
                    : person
            );

            case "rate":
                return state.map(person =>
                    person.id === action.payload.id
                        ? { ...person, rating: action.payload.rating } // rating już powinien być liczbą
                        : person
                );

        case "ADD": // DODAWANIE OSOBY
            return [...state, action.payload];

        default:
            return state;
    }
};

export default AppReducer;
