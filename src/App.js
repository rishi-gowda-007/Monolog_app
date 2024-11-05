import './App.css';
import Nav from './Components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import MessageHistory from './Components/MessageHistory';

function App() {
  const form = useRef();
  const [data, setData] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cob78cj', 'template_gf7wiq6', form.current, 'KrIhJFlCD4cDt6crm')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message not sent');
        },
      );
  };

  return (
    <div className="App">
      <Nav/>
      <main>
      
        <Routes>
            <Route path='Monolog_app' element={<Home form={form} sendEmail={sendEmail} setData={setData} />} />
            <Route path='MessageHistory' element={<MessageHistory data={data} />} />
          
        </Routes>
  
      </main>
    </div>
  );
}

export default App;
