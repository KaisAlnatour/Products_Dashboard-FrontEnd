import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Header from "./Header";

function UpdateProduct(props) {

    // console.warn(props.match.params.id)

    const [data, setData] = useState(false)

    const [name, setName] = useState(false)
    const [price, setPrice] = useState(false)
    const [filePath, setFilePath] = useState(false)
    const [description, setDescription] = useState(false)


    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/getById/"+ props.match.params.id)
        result = await result.json()

        console.log("result",result.data)

        setData(result.data)
    }, [])

    async function update() {
        const formData = new FormData
        formData.append('name', name)
        formData.append('price', price)
        formData.append('filePath', filePath)
        formData.append('description', description)

        let result = await fetch("http://127.0.0.1:8000/api/editProduct/" + props.match.params.id, {
            method: 'POST',
            body: formData
        })

        alert("Edit Product Success")

    }

    return (
        <div>
            <Header />
            <h1> UpdateProduct page </h1>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} className="form-control" />
                <br />
                <input type="text" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                <br />
                <input type="file" defaultValue={data.filePath} onChange={(e) => setFilePath(e.target.files[0])} className="form-control" />
                <img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + data.filePath} />                
                <br />
                <input type="text" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                <br />
                <button onClick={update} className="btn btn-primary"> Update </button>
            </div>
        </div>
    );

}
export default withRouter(UpdateProduct);