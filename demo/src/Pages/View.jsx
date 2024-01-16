import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCaretLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function View() {

    const [record, setRecord] = useState([]);
    const [search,setSearch] = useState('');


    useEffect(() => {
        let oldrecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
        setRecord(oldrecord);
    },[])

    useEffect(()=>{
        if(search != ""){
            const searchrec = record.filter((val)=>{
                return val.name.toLowerCase().includes(search.toLowerCase());
            })
            setRecord(searchrec)
        }
    },[search])


    const resetFilter = () => {
        let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [] 
        setRecord(all);
       setSearch("");
    }

    const deleterecord = (id) => {
        let deletedata = record.filter((val)=>{
            return val.id != id;
        })
        setRecord(deletedata);
        localStorage.setItem('user',JSON.stringify(deletedata));
    }

    return (
        <>
            <div >
            <Link to={'/add'} className='text-white p-5 fs-5 link d-flex align-item-center'><FaCaretLeft style={{ color: "#FB667A" }} />Sign up</Link>
            <div className='d-flex src container p-0!important'>
                <input type='text' placeholder='Search for name.....' onChange={(e) => setSearch(e.target.value)} value={search} className='me-3' style={{width:"90%"}}/>

                <button type="button" class="btn btn-outline-secondary" onClick={ () => resetFilter() }>Reset</button>
                {/* {
                    record.length == 0 ? (<p>Record not found</p>) : ""
                } */}
            </div>
           

            <table class="container">
                
                <thead>
                    <tr>
                        <th><h1>Id</h1></th>
                        <th><h1>Name</h1></th>
                        <th><h1>Email</h1></th>
                        <th><h1>Password</h1></th>
                        <th><h1>Phone</h1></th>
                        <th><h1>Action</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {
                            record.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>{val.phone}</td>
                                        <td>
                                            <button class="btn btn-outline-danger me-2" onClick={() => deleterecord(val.id)}><MdDelete /></button>
                                            <button class="btn btn-outline-primary">
                                                <Link to={`/edit/${val.id}`}><FaRegEdit /></Link>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default View

