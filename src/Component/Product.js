import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Product(props) {
    let ActionProduct = props.actionProduct
    const history = useHistory()

    useEffect(() => {
        if (!localStorage.getItem('user-info'))
            history.push('/register')
    },[])


    return (
        <div>
            <ActionProduct />
        </div>
    );

}
export default Product;