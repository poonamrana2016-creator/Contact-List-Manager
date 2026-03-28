import React, { useContext, useState } from 'react'
import Themeprovider from './Themeprovider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // const {theme} = useContext(themeContext);

  const [users, setUsers] = useState([]);

  return (
    <>
      {/* <div className={`container-fluid g-0 dashboard_bg   ${ theme === 'dark' ? 'bg-dark': '' } `}  style={{ height: '100vh', alignItems: 'center' }} >  */}
      <div className={`container-fluid g-0  dashboard_bg   `} style={{ height: '100vh', alignItems: 'center' }} >
        <div className="row py-5 justify-content-center g-0">

          <div className="col-lg-5 ">
            <div className="card p-4 phone-frame " >
              <h3 className='mb-4 text-center text-primary'>Contact List</h3>

              <div className="row py-3">
                <div className="col-lg-9">
                  <input className='form-control' placeholder='Search Contact' />
                </div>
                <div className="col-lg-3">
                  <Link to={'/add-contact'}>
                    <button type='submit' className='btn btn-primary  add_display '>
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-plus-fill  " viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                      </svg>  
                      {/* Add */}
                      
                    </button>
                  </Link>
                </div>
              </div>

              {/* Table Starts */}
              <table className='table'>

                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {users.map((item, index) => (

                    <tr key={index}>
                      <td> {index + 1} </td>
                      <td> {item.name} </td>
                      <td> {item.number} </td>
                      <td> {item.email} </td>
                      <td>
                        <button type='submit' className='btn btn-warning'>Edit</button>
                        <button type='submit' className='btn btn-danger ms-2'>Delete</button>
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>
              {/* Table Ends */}

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Dashboard