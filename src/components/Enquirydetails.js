import React, { useState, useEffect } from 'react'
import { getQueries } from '../config/Myservice';

export default function Enquirydetails() {
    const [enquiry, setEnquiry] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getQueries()
            .then(res => {
                if (res) {
                    setLoading(false);
                    setEnquiry(res.data)

                }
            })
            .catch(err => console.log(err))

    }, [])

    return (

        <>
            <div className="container">
                <h2>courses</h2>

                {loading ?
                    <img src="https://tse2.mm.bing.net/th?id=OIP.203OyIQrZQcvPAtttruksgHaD6&pid=Api&P=0&w=332&h=175" alt="loader" /> :
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {enquiry.map(val =>
                            <div className="card" style={{ width: "20rem", margin: "10px" }} key={val.id}>
                                <div className="card-body">
                                    <h5 className="card-title">Course:{val.course}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Name:{val.name}</h6>
                                    <p className="card-text">Email:{val.email}</p>
                                    <p className="card-text"> Query:{val.query}</p>

                                </div>
                            </div>

                        )}
                    </div>

                }
            </div>


        </>
    )
}