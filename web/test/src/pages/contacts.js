import {useState} from 'react'

async function PostUserMessage(name, email, message) {
    if(name == undefined || email == undefined || message == undefined ) {
        return 
    }
    console.log(name)
    console.log({name})


    const data = { 
        name: name, 
        email: email, 
        message: message
    }
    console.log(JSON.stringify(data))

    const apiURL = "http://localhost:5035/api/requests";
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        "Host": "localhost:3000",
        "Accept": "*/*"
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
        window.location.reload()
    }
}





export function Contacts() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    function handleClick() {
        PostUserMessage(name, email, message)
    }

    return (
    <>
    <div className="contacts">
        <form>
            <h2>Свяжитесь с нами</h2>
            <input  placeholder="Имя" required="" type="text"                    value={name} onChange={(e) => setName(e.target.value)} />
            <input  placeholder="Почта" type="email"                             value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea id="story" rows="5" cols="33" placeholder="Ваше сообщение" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            <button type="button" onClick={handleClick}>Связаться</button>
        </form>
    </div>
    </>
    )
}