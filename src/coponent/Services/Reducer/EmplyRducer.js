const initialState = JSON.parse(localStorage.getItem('datas')) || {
    students: [],
    student: null
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDSTU":
            const newStudents = [...state.students, action.payload];
            localStorage.setItem('datas', JSON.stringify({ ...state, students: newStudents }));
            return {
                ...state,
                students: newStudents
            };

        case "GETSTU":
            return state;

        case "SINGLESTU":
            return {
                ...state,
                student: state.students.find(stu => stu.id === action.payload)
            };

        case "UPDATESTU":
            const updatedStudents = state.students.map(stu =>
                stu.id === action.payload.id ? action.payload : stu
            );
            localStorage.setItem('datas', JSON.stringify({ ...state, students: updatedStudents, student: null }));
            return {
                ...state,
                students: updatedStudents,
                student: null
            };

        case "DELETESTU":
            const filteredStudents = state.students.filter(stu => stu.id !== action.payload);
            localStorage.setItem('datas', JSON.stringify({ ...state, students: filteredStudents }));
            return {
                ...state,
                students: filteredStudents
            };

        default:
            return state;
    }
};

export default studentReducer;
