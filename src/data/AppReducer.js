export default function AppReducer(state, action) {
    switch(action.type) {
        case "edit": {
            const { id, updates } = action.payload;
            return state.map(item =>
                item.id === id ? { ...item, ...updates } : item
            );
        }

        case "rate": {
            const { id, rating } = action.payload;
            return state.map(item =>
                item.id === id ? { ...item, rating: rating } : item
            );
        }

        case "delete": {
            const { id } = action.payload;
            return state.filter(item => item.id !== id);
        }

        default:
            return state;
    }
}
