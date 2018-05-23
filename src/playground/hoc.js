import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please do not share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const requireAuthenication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isLogin ? (
        <div>
          <WrappedComponent {...props}/>
        </div>) : (
          <p>Please login</p>
        )}

    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenication(Info);

ReactDOM.render(<AuthInfo isLogin={true} info="There are the details"/>,document.getElementById('app'));
