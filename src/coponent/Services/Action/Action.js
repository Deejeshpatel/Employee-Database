export const addStu = (data) => {

    return {
        type: "ADDSTU",
        payload: data
    }

}

export const getStu = () => {

    return {
        type: "GETSTU"
    }
}

export const singleStu = (id) => {

    return {
        type: "SINGLESTU",
        payload: id
    }
}


export const updateStu = (data) => {
    return {
        type: "UPDATESTU",
        payload: data
    }
}

export const deleteStu = (id) => {

    return {
        type: "DELETESTU",
        payload: id
    }
}