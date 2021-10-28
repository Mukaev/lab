import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

function Home() {
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  
  const history = useHistory();

  const handleEmailChange = (event) => {
    if (event.target.value == "developer21")
    setEmail(event.target.value);
  };

  const viewProfile = function() {
    history.push("/profile");
  };

  const handlePasswordChange = (event) => {
    if (event.target.value == "12345")
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${email} \n 
            password: ${password} \n 
            You can replace this alert with your process`);
  };
  return (<main className='conteiner content'>
                  <div className="row" >
                  <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="input-field col s6">
                        <input placeholder="логин" id="first_name" type="text" className="validate" onChange={handleEmailChange}>
                            </input>
                      </div>
                    </div>
                    <div className="row">

                      <div className="input-field col s6">
                        <input placeholder="пароль" id="last_name" type="number" className="validate" onChange={handlePasswordChange}>
                            </input>
                          </div>
                    </div>
                      <div>
                          <button onClick={viewProfile} disabled={!email ||!password}>Войти</button>
                      </div>
                  </form>
              </div>
    </main>)
}

export { Home }