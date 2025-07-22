import React, { useEffect, useState } from 'react'

function AppAPI() {
    //SWP391
    //BACK END-FRONT END
    //API
    //JSON
    //Lay du lieu va hien thi ra man hinh
    //BACKEND: GOI API DE LAY DU LIEU
    //CACH 1
    //BUOC 1: TAO MOT BIEN DE DUNG DU LIEU
    const [users, setUsers] = useState([])
    //doctors,data...
    //CUPHAP: useEffect(() => {},[])
    useEffect(() => { }, [])
    //useEffect:se goi ham khi tham so trong ngoac [] thay doi
    //useEffect(() =>{J97()},[thienAn])
    //ham J97() se chay khi bien thienAn thay doi
    //[]:=>Ham se chay mot lan
    //BUOC 2: GOI API
    //AP DUNG useEffect
    useEffect(() => {
        const fetchUser = () => {//ARROW FUNCTION
            // TRUY CAP ENDPOINT
            fetch("https://683947846561b8d882afa217.mockapi.io/api/v1/users")
                //SAU DO NHAN PHAN HOI(RESPONSE) VA CHUYEN QUA JSON    
                .then((response) => response.json())
                //SAU DO LAY DU LIEU JSON DO VAO STATE
                .then((data) => setUsers(data))
        }
        fetchUser()
    }, [])
    console.log(users)
    return (
        <>
            {users.map((item) =>
                <div>
                    <h1>{item.name}</h1>
                    <img src={item.avatar} />
                </div>)}
        </>
    )
}

export default AppAPI