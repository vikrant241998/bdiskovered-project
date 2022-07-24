import React from 'react'
import './Dashboard.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
const Dashboard = () => {
  return (
    <div>
        <div className="dash-Container">
        <div className="dash-Header absolute top-1 left-10 flex items-center justify-center">
          <div className="pageTitle h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-9 h-9 rounded flex items-center justify-center">
            <HomeIcon  style={{color:"white", fontSize:"18px"}}/>
          </div>
            <h3 className='text-lg mx-2 font-semibold' style={{Color: "#343a40"}}>Dashboard</h3>
        </div>

        <div className="row">          
              <div className="dash-wrapper">
              <img src="Dashimages/circle.png" className='float-right' />  
                <h3>Users</h3>
                <h3>25</h3>
                <PersonIcon />
              </div>      
              <div className="dash-wrapper">
              <img src="Dashimages/circle.png" className='float-right' />  
              </div>      
              <div className="dash-wrapper">
              <img src="Dashimages/circle.png" className='float-right' />  
              </div>      
              <div className="dash-wrapper">
              <img src="Dashimages/circle.png" className='float-right' />  
              </div>      
          </div>          


        </div>
        </div>
  )
}

export default Dashboard