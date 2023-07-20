import data from "../data/MOCK_DATA.json"



export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}