import React from 'react';

const clientId = '0oa1oho8fhI0qyMRJ357';
const orgURL = 'https://dev-345588.okta.com';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    }

    this.getData = this.getData.bind(this);
  }

  getData(){
    console.log(this.email.value);
    console.log(this.password.value);
  }

  render(){
    return(
      <div className="container">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input ref={el => this.email=el} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref={el => this.password=el} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.getData}>Submit</button>
        </form>
      </div>
    )   
  }
}


export default Register;

//https://developer.okta.com/blog/2018/02/06/build-user-registration-with-node-react-and-okta