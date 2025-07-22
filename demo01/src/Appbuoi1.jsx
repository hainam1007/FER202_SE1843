import React from 'react'
import Home from './components/Home'
import AppRouters from './routers/AppRouters'
import Navbar from './components/App/Navbar'
import Card from './components/Orchids/Card'

const Appbuoi1 = () => {

  var a = 4
  let b = 4

  if (true) {
    let c = 4
    console.log(c)
  }

  function d() {
    console.log("function")
  }

  d()

  const e = 5;
  const e1 = () => {
    console.log("Arrow function")
  }
  e1()

  const f = [1, 2, 3, 4, 5]
  const [f1, f2] = f
  console.log(f1, f2)
  const g = {
    key: 'value',
    name: 'Thuy Tien',
    address: 'Vong lao ly',
    product: 'Keo Kera',
    company: 'Chi em rot'
  }
  const { name, address } = g
  console.log("Hoa hau " + name + " da roi vao " + address)
  console.log(`Hoa hau ${name} da roi vao ${address}`)

  const h = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  //  console.log(h(f));
  console.log(h(1, 2, 3, 4, 5));

  const i = [1, 2, 3]
  const j = [...i, 4, 5]
  console.log(j)

  const data = [
    {
      name: 'Thuy Tien',
      address: 'Vong lao ly',
      product: 'Keo Kera',
      company: 'Chi em rot',
      image: 'https://media.kinhtetieudung.vn/images/2025/05/20/33-1747708574-98-1747708272-thuy-tien-bi-bat.jpg'
    },
    {
      name: 'Thuy Tien',
      address: 'Vong lao ly',
      product: 'Keo Kera',
      company: 'Chi em rot',
      image: 'https://media.kinhtetieudung.vn/images/2025/05/20/33-1747708574-98-1747708272-thuy-tien-bi-bat.jpg'
    },
    {
      name: 'Thuy Tien',
      address: 'Vong lao ly',
      product: 'Keo Kera',
      company: 'Chi em rot',
      image: 'https://media.kinhtetieudung.vn/images/2025/05/20/33-1747708574-98-1747708272-thuy-tien-bi-bat.jpg'
    },
    {
      name: 'Thuy Tien',
      address: 'Vong lao ly',
      product: 'Keo Kera',
      company: 'Chi em rot',
      image: 'https://media.kinhtetieudung.vn/images/2025/05/20/33-1747708574-98-1747708272-thuy-tien-bi-bat.jpg'
    }]

  return (
    <div>
      <>
        <Navbar />
        <div>SLIDER GIA LAP</div>
        <div className='row'>
          {data.map((item) => <Card chiemrot={item} />)}
        </div>
      </>
    </div>
  )
}

export default Appbuoi1