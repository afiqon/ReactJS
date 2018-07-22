/*
 * FeaturePage
 *
 * List all the features
 */
import React ,{ Component }from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import { BrowserRouter, Route, Redirect, Switch,withRouter  } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './module.css';

   class EditModules extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name: this.props.module.name,
    moduleId: this.props.module.moduleId,
    room: this.props.module.room,
    Lecturer: this.props.module.Lecturer,
    Day: this.props.module.Day,
    checkInStart: new Date(`${this.props.module.checkInStart}`),
    checkInEnd: new Date(`${this.props.module.checkInEnd}`),
    startDate: this.props.module.startDate,
  }
  componentDidMount(){

  }

  handleClose=(e)=>{
    e.preventDefault();
    this.props.closeEdit();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  }

  handleDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleStartTime = date => {this.setState({ checkInStart: date });}

  handleEndTime = date => {this.setState({ checkInEnd: date });}

  handleSubmit(event){ 
    event.preventDefault();
    fetch('http://localhost/student/editModule.php', {
     method: 'post',
     headers: {
              'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              },
     body: JSON.stringify({
        name: this.state.name,
        moduleId: this.state.moduleId,
        room: this.state.room,
        Lecturer: this.state.Lecturer,
        Day: this.state.Day,
        checkInStart: moment(this.state.checkInStart).format('YYYY-MM-DD HH:mm:ss'),
        checkInEnd: moment(this.state.checkInEnd).format('YYYY-MM-DD HH:mm:ss'),
        startDate: moment(this.state.startDate).format('YYYY-MM-DD'),
        _id: this.props.module._id
     })
    }

      ).then(res => res.text()).then(text => this.props.history.push('/life'));
 };

  render() {
    console.log('props',this.props);
    const {moduleId,name,room,Lecturer,Day,checkInStart,checkInEnd,startDate}=this.state
    return (
      <div className="marginLeft">
      <h1 className="well">Edit Module</h1>
  <div className="col-lg-12 well marginLeft">
  <div className="row">
        <form>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Module Name</label>
                <input type="text" placeholder="Enter Last Name Here.." className="form-control" name="name" value={name} onChange={this.handleChange}/>
              </div>
               <div className="col-md-6 form-group">
                <label>Module ID</label>
                <input type="text" placeholder="Enter Last Name Here.." className="form-control" name="moduleId" value={moduleId} onChange={this.handleChange}/>
              </div>
            </div>          
  {/*          <div class="form-group">
              <label>Address</label>
              <textarea placeholder="Enter Address Here.." rows="3" class="form-control"></textarea>
            </div>  */}
            <div className="row">
              <div className="col-sm-4 form-group">
                <label>Class</label>
                <input type="text" placeholder="Enter City Name Here.." className="form-control" name="room" value={room} onChange={this.handleChange}/>
              </div>  
              <div className="col-sm-4 form-group">
                <label>Day</label>
                <input type="text" placeholder="Enter State Name Here.." className="form-control" name="Day" value={Day} onChange={this.handleChange}/>
              </div>  
              <div className="col-sm-4 form-group">
                <label>Date</label>
                <DatePicker
                    name="startDate"
                    selected={moment(startDate)}
                    onChange={this.handleDate}
                />;
              </div>    
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label>Lecturer Name</label>
                <input type="text" placeholder="Enter Designation Here.." className="form-control" name="Lecturer" value={Lecturer} onChange={this.handleChange}/>
              </div>    
             {/* <div class="col-sm-6 form-group">
                <label>Company</label>
                <input type="text" placeholder="Enter Company Name Here.." class="form-control"/>
              </div>*/}  
            </div> 
            <div className="row">
               <div className="col-sm-6 form-group">
                <label>Start Time&nbsp;</label>
                 <DateTimePicker
                    onChange={this.handleStartTime}
                    value={checkInStart}
                    name="checkInStart"
                  />
              </div>  
              <div className="col-sm-6 form-group">
                <label>End Time&nbsp;</label>
                 <DateTimePicker
                    onChange={this.handleEndTime}
                    value={checkInEnd}
                     name="checkInEnd"
                  />
              </div> 
            </div>           
          <button type="button" className="btn btn-lg btn-info" onClick={this.handleSubmit}>Submit</button>        <button className="btn btn-lg btn-danger" onClick={(e) =>this.handleClose(e)}>Cancel</button>     
          </div>
        </form> 
        </div>
  </div>
  
      </div>
    );
  }
}
export default withRouter(EditModules);