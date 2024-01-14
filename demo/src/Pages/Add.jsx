import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Add() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [record, setRecord] = useState([]);

    const handelsubmit = () => {
        const id = Math.floor(Math.random() * 100);
        let obj = { id, name, email, password, phone };
        let all = [...record, obj];
        setRecord(all);
        console.log(all);
        localStorage.setItem('user', JSON.stringify(all));
    }

    useEffect(() => {
        let oldrecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
        setRecord(oldrecord);
    })

    return (
        <>
           <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Name</label>
                                <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email</label>
                                <input id="pass" type="text" className="input" data-type="password" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="text" className="input" data-type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Phone</label>
                                <input id="pass" type="text" className="input" onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>
                            <div className="group">
                                <button type="submit" className="button" defaultValue="Sign Up" onClick={() => handelsubmit()}>Submit</button>
                            </div>
                            <div className="hr" />
                            <div className="foot-lnk">
                                <label htmlFor="tab-1"><Link to={'/'}>View Details</Link></label></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add
