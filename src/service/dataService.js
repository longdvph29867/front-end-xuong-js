import { https } from "./config"

export const dataService = {
    postLogin: (data) => {
        return https.post('/auth/signin', data)
    },
    postRegister: (data) => {
        return https.post('/auth/signup', data)
    },
    getCategories: () => {
        return https.get('/categories')
    },
    getCategoriesBySlug: (data) => {
        return https.get(`/categories/${data}`)
    },
    creatCategories: (data) => {
        return https.post('/categories',data)
    },
    updateCategories: (id,data) => {
        return https.put(`/categories/${id}`,data)
    },
    deleteCategories: (data) => {
        return https.delete(`/categories/${data}`)
    },
    getProducts: () => {
        return https.get('/products')
    },
    getProductByCategory: (slug) => {
        return https.get(`/categories/${slug}`)
    },
    getProductDetails: (id) => {
        return https.get(`/products/${id}`)
    },
    postProductAdd: (data) => {
        return https.post(`/products`,data)
    },
    getProductDetail: (id) => {
        return https.get(`/products/${id}`)
    },
    putProductEdit: (id, data) => {
        return https.put(`/products/${id}`, data)
    },
    deleteProduct: (id) => {
        return https.delete(`/products/${id}`)
    },
    getUser: () => {
        return https.get('/user')
    },
    postUserAdd: (data) => {
        return https.post(`/user`,data)
    },
    getUserDetail: (id) => {
        return https.get(`/user/${id}`)
    },
    putUserEdit: (id, data) => {
        return https.put(`/user/${id}`, data)
    },
    deleteUser: (id) => {
        return https.delete(`/user/${id}`)
    },
    
}