import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

const initialState = {
  userFirstname: null,
  userLastname: null,
  userPhone: null
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER_FIRST_NAME':
      return {...state, userFirstname: action.payload};
    case 'SET_USER_LAST_NAME':
      return {...state, userLastname: action.payload};
    case 'SET_USER_PHONE':
      return {...state, userPhone: action.payload};
    default:
      throw new Error();
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    switch (name) {
      case 'userFirstname':
        dispatch({type: 'SET_USER_FIRST_NAME', payload: value});
        break;
      case 'userLastname':
        dispatch({type: 'SET_USER_LAST_NAME', payload: value});
        break;
      case 'userPhone':
        dispatch({type: 'SET_USER_PHONE', payload: value});
        break;
      default:
        throw new Error();
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { userFirstname, userLastname, userPhone } = state;
    if (userFirstname && userLastname && userPhone) {
      addEntryToPhoneBook(state);
    }
  }
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        onChange={handleChange}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        onChange={handleChange}
      />
      <br/>
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable(props) {
  const { userFirstname, userLastname, userPhone } = props;
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{userFirstname && userFirstname}</td>
        <td>{userLastname && userLastname}</td>
        <td>{userPhone && userPhone}</td>
      </tr>
      </tbody>
    </table>
  );
}

function Application() {
  const [user, setUser] = useState({})
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook ={setUser}/>
      <InformationTable user={user}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
