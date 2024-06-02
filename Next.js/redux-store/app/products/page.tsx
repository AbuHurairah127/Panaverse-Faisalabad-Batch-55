"use client"

import { fetchProducts } from "@/store/slices/productSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Products() {
    const dispatch = useDispatch()
    const data = useSelector((store)=>store.productSlice.products)
    const onClickHandler = () => {
        dispatch(fetchProducts({ id: 10 }))
    }

   useEffect(() => {
    onClickHandler()
   }, [])
   
    return (
        <div>
            <h1>List of products</h1>
            {/* <button onClick={onClickHandler}>get all products</button> */}

         {data.length > 0 ? 
            <table>
                <tr>
                    <th>Id</th>
                    <th>category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
                {
                    data?.map((product) => {
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><img width={50} src={product.image} alt="" /></td>
                            </tr>
                        )
                    })
                }
            </table>
        :
        "Loading..."
        }

        </div>

    )
}
