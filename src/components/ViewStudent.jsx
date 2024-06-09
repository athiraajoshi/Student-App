import React from 'react'
import NavbarStudent from './NavBar'

const ViewStudent = () => {
  const [data, changeData] = useState(
    [
      { "name": "Achu", "admin_no": 101, "rollno": 1 },
      { "name": "Athi", "admin_no": 102, "rollno": 2 },
      { "name": "jo", "admin_no": 103, "rollno": 3 }
    ]
  )
  return (
    <div>
      <NavbarStudent />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              {data.map(
                (value, index) => {
                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card" >
                      <img src="https://altasmiles.com/wp-content/uploads/2019/10/iStock-510857204.jpg" class="card-img-top" alt="..." height="500" />
                      <div class="card-body">
                        <h5 class="card-title">{value.name}</h5>
                        <p>rollno{value.admin_no}</p>

                        <a href="#" class="btn btn-primary">View More</a>

                      </div>
                    </div>
                  </div>
                }
              )}



            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ViewStudent

