import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

function ProductList() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/api/getAll")
        result = await result.json()

        setData(result.data)
    }

    async function deleteProdact(id) {
        let result = await fetch("http://127.0.0.1:8000/api/deleteProduct/" + id, {
            method: 'DELETE'
        })
        getData()
    }

    async function searchProdact(name) {
        let result = await fetch("http://127.0.0.1:8000/api/getByName/" + name)
        result = await result.json()
        console.log(result.data)
    
        setData(result.data)
        
    }

    return (
        <div>
            <Header />
            <div className="col-sm-8 offset-sm-2">
                <h1> ProductList page </h1>
                <input type="text" onChange={(e)=>searchProdact(e.target.value)} placeholder="Search" className="form-control" />
                <br/>
                <br/>
                
                <Table bordered >
                    <thead>
                        <tr>
                            <td> Id </td>
                            <td> Name </td>
                            <td> Price </td>
                            <td> Description </td>
                            <td> Photo </td>
                            <td> Operation </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <td> {item.id} </td>
                                    <td> {item.name} </td>
                                    <td> {item.price} </td>
                                    <td> {item.description} </td>
                                    <td> <img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + item.filePath} /> </td>
                                    <td> 
                                        <button onClick={() => deleteProdact(item.id)} className="btn-delete"> Delete </button>
                                        <Link to={"/update/" + item.id}>
                                        <button className="btn-updata"> Updata </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );

}
export default ProductList;