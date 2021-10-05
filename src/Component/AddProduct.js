import {useState} from 'react'
import Header from "./Header";

function AddProduct() {
    const [name,setName] = useState(false)
    const [price,setPrice] = useState(false)
    const [filePath,setFilePath] = useState(false)
    const [description,setDescription] = useState(false)

    async function add(){
        const formData = new FormData
        formData.append('name',name)
        formData.append('price',price)
        formData.append('filePath',filePath)
        formData.append('description',description)
        
        let result = await fetch("http://127.0.0.1:8000/api/addProduct",{
            method:'POST',
            body: formData
        })

        alert("Added Product Success")

    }

    return (
        <div>
        <Header />
            <h1> AddProduct page </h1>
            <div className="col-sm-6 offset-sm-3">
            <br/>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} className="form-control" />
            <br/>
            <input type="text" placeholder="price" onChange={(e)=>setPrice(e.target.value)} className="form-control" />
            <br/>
            <input type="file" placeholder="file" onChange={(e)=>setFilePath(e.target.files[0])} className="form-control" />
            <br/>
            <input type="text" placeholder="description" onChange={(e)=>setDescription(e.target.value)} className="form-control" />
            <br/>
            <button onClick={add} className="btn btn-primary"> Add </button>
            </div>
        </div>
    );

}
export default AddProduct;