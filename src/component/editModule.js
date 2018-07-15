/*
 * FeaturePage
 *
 * List all the features
 */
import React ,{ Component }from 'react';
import './module.css';
export default class EditModules extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
 
    };

  componentDidMount(){

  }

  handleClose=(e)=>{
    e.preventDefault();
    this.props.closeEdit();
  }

  render() {
    console.log('props',this.props);
    const {name,room,Lecturer}=this.props.module
    return (
      <div class="marginLeft">
      <h1 class="well">Edit Module</h1>
  <div class="col-lg-12 well marginLeft">
  <div class="row">
        <form>
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-12 form-group">
                <label>Module Name</label>
                <input type="text" placeholder="Enter Last Name Here.." class="form-control" value={name}/>
              </div>
            </div>          
            <div class="form-group">
              <label>Address</label>
              <textarea placeholder="Enter Address Here.." rows="3" class="form-control"></textarea>
            </div>  
            <div class="row">
              <div class="col-sm-4 form-group">
                <label>City</label>
                <input type="text" placeholder="Enter City Name Here.." class="form-control"/>
              </div>  
              <div class="col-sm-4 form-group">
                <label>State</label>
                <input type="text" placeholder="Enter State Name Here.." class="form-control"/>
              </div>  
              <div class="col-sm-4 form-group">
                <label>Zip</label>
                <input type="text" placeholder="Enter Zip Code Here.." class="form-control"/>
              </div>    
            </div>
            <div class="row">
              <div class="col-sm-6 form-group">
                <label>Title</label>
                <input type="text" placeholder="Enter Designation Here.." class="form-control"/>
              </div>    
              <div class="col-sm-6 form-group">
                <label>Company</label>
                <input type="text" placeholder="Enter Company Name Here.." class="form-control"/>
              </div>  
            </div>            
          <div class="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone Number Here.." class="form-control"/>
          </div>    
          <div class="form-group">
            <label>Email Address</label>
            <input type="text" placeholder="Enter Email Address Here.." class="form-control"/>
          </div>  
          <div class="form-group">
            <label>Website</label>
            <input type="text" placeholder="Enter Website Name Here.." class="form-control"/>
          </div>
          <button type="button" class="btn btn-lg btn-info">Submit</button>        <button class="btn btn-lg btn-danger" onClick={(e) =>this.handleClose(e)}>Cancel</button>     
          </div>
        </form> 
        </div>
  </div>
  
      </div>
    );
  }
}
