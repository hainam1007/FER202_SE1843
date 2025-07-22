import React, { useReducer, useState } from 'react'
import MyNavbar from './components/App/Navbar'
import MyButton from './components/MyButton'
import { ThemeProvider } from './contexts/ThemeContext'
import { Button } from 'react-bootstrap'
// const J97 = () => {
//     const lightStick = "J97 Lightstick"
//     return (
//         <Provider ls={lightStick}></Provider>
//     )
// }
// const Provider = () => {
//     console.log(props.ls)
//     return (
//         <DomDom ls={props.ls}></DomDom>
//     )
// }
// const DomDom = () => {
//     return (
//         <>{props.ls}</>
//     )
// }
//CONTEXT: Y tuong, tao mot noi de luu thong tin
//Khi nao can thi vao do lay
//REDUX
//Cach su dung:



// function Appbuoi3() {
//     return (
//         <ThemeProvider>
//             <MyNavbar />
//             <MyButton />
//         </ThemeProvider>
//     )
// }

// export default Appbuoi3

function Appbuoi3() {
    // const [isLogin, setIsLogin] = useState(false)
    // const [name, setName] = useState('J97')
    // const [role, setRole] = useState('guest')
    const initState = {
        isLogin: false,
        name: 'J97',
        role: 'guest'
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return {
                    isLogin: true,
                    name: 'Thien An',
                    role: 'admin'
                }
            case 'LOGOUT':
                return {
                    isLogin: false,
                    name: 'J97',
                    role: 'guest'
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <>
            <Button onClick={() => {
                dispatch({ type: 'LOGIN' })
                // setIsLogin(true)
                // setName('Thien An')
                // setRole('admin')
            }}>Login</Button>
            <Button onClick={() => {
                dispatch({ type: 'LOGOUT' })
            }}>Logout</Button>
            <h1>{state.isLogin ? `Welcome ${state.role}, ${state.name}`
                : `Please log in,${state.name}`}</h1>
        </>
    )
}

export default Appbuoi3