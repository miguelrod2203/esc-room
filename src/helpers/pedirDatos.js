import data from "../data/MOCK_DATA.json"



export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export const pedirItemPorId = (id) => {

    return new Promise((resolve, reject) => {
       setTimeout(()=>{
           const item = data.find((el) => el.id === id)

           if (item) {
                resolve(item)
           } else {
                reject({
                    error: 'Producto no encontrado.'
                    
                })
           }
       }, 1000)
       
   })
}