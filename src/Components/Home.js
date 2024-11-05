import React from 'react';
import './Home.css';

function Home({ form, sendEmail, setData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, to_name, user_email, message } = form.current;

    if (!user_name.value || !to_name.value || !user_email.value || !message.value) {
      alert("Please fill out all fields.");
      return;
    }

    const formValues = {
      From_Name: user_name.value,
      To_Name: to_name.value,
      Email: user_email.value,
      Message: message.value,
    };

    await sendEmail(e);
    setData(prevData => [...prevData, formValues]);
    form.current.reset();
  };

  return (
    <div id='home_main'>
      <div id='home_message_panel'>
        <form ref={form} onSubmit={handleSubmit} id='home_form'>
          <label className='home_label'>From Name</label>
          <br />
          <input id='home_name' type="text" name="user_name" />
          <br />
          <label className='home_label'>To Name</label>
          <br />
          <input id='home_name' type="text" name="to_name" />
          <br />
          <label className='home_label'>Email</label>
          <br />
          <input id='home_email_feild' type="email" name="user_email" />
          <br/>
          <label className='home_label'>Message</label>
          <br/>
          <textarea id='home_message_feild' name="message"></textarea>
          <input type="submit" value="Send" id='home_send' />
        </form>
      </div>
    </div>
  );
}

export default Home;

