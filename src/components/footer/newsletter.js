import React from 'react';
import TextField from '@material-ui/core/TextField';
// import { BlueTextField } from '@ui/textField/textField';
// import { Consumer } from '../../store/createContext';

const Newsletter = () => {
  return (
    // <Consumer>
    //   {({ emailForm, onChangeEmail }) => (
        <form
          action="https://testmailchimp"
          method="post"
          id="email-form"
          name="email-form"
          target="_blank"
          noValidate
        >
          <TextField
            id="mce-EMAIL"
            name="EMAIL"
            label="Email Address"
            placeholder="Enter your email address"
            InputLabelProps={{
              shrink: true,
              classes: {
                focused: 'focused',
              },
            }}
            InputProps={{
              type: 'email',
              name: 'EMAIL',
            }}
            // value={emailForm}
            // onChange={onChangeEmail}
          />
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-subscribe"
            className="email-arrow-btn"
          />
          <span className="arrow"></span>
        </form>
    //   )}
    // </Consumer>
  );
};

export default Newsletter;
