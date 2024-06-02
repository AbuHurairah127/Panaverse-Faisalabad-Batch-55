import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/listofproducts',
    async (data, thunkapi) => {
        console.log("data",data);
        const productsResponse = await fetch('https://fakestoreapi.com/products')
        const products = await productsResponse.json()
        return products
    }
)


const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: []
    }, 
    reducers:{},
    extraReducers: (builder)=>{
       builder.addCase(fetchProducts.fulfilled, (state, action )=>{
        console.log("extraReducers fetchProducts",action)
        state.products = action.payload
       })
    }
})

export default productSlice.reducer