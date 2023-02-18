import axios from "axios";
import { useEffect, useState } from "react";
import './iphone.css'

const Iphone = () => {

    const [iPhone, setIphone] = useState([])

    const getPhones = async () => {
        try {
            const { data: result } = await axios.get('data.json')
            console.log(result)
            setIphone(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPhones()
    }, [])

    return (
        <>
            <section className="phn-wrapper">
                {iPhone.map((item, index) =>
                    <div className="phn-dtl" key={index}>
                        <img src={item.url} />
                        <h2>{item.name} </h2>
                        <h3>{item.price}</h3>
                        <h3>{item.color}</h3>
                        <h3>{item.storage}</h3>
                    </div>
                )
                }

            </section>
        </>
    )
}

export default Iphone;