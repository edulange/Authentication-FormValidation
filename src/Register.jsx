import { useRef, useState, useEffect } from 'react'

import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}/ //pode ser qualquer letra, número e '-' e '_'
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {
	const userRef = useRef() // para o user input
	const errRef = useRef() // para caso receber um erro

	const [user, setUser] = useState('')
	const [validName, setValidName] = useState(false)
	const [userFocus, setUserFocus] = useState(false)

	const [pwd, setPwd] = useState('')
	const [validPwd, setValidPwd] = useState(false)
	const [pwdFocus, setPwdFocus] = useState(false)

	const [matchPwd, setMatchPWd] = useState('')
	const [validMatch, setValidMatch] = useState(false)
	const [matchFocus, setMatchFocus] = useState(false)

	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => { //para colocar o foco no user quando o componente é renderizado
		userRef.current.focus()
	}, []) 

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log('result :>> ', result);
        console.log('user :>> ', user);
        setValidName(result)
    }, [user]) //toda vez que o user mudar, ele vai verificar a validação.

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log('result :>> ', result);
        console.log('pwd :>> ', pwd);
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

	return <div>Register</div>
}

export default Register
https://youtu.be/brcHK3P6ChQ?si=u8ewJOKZDmX-L3zq&t=509