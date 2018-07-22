/*
 * FeaturePage
 *
 * List all the features
 */
import React ,{ Component }from 'react';
import EditModule from './editModule';
import { BrowserRouter, Route, Redirect, Switch,browserHistory  } from 'react-router-dom';

export default class ModuleList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
      data: [],
      modData:{},
      showEdit: false,
    };

  componentDidMount(){
    fetch("http://localhost/student/lecturerModuleGet.php")
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  handleEdit=(e,props) => {
       e.preventDefault();
    this.setState({
          showEdit:!this.state.showEdit,
          modData:props,
        });
  }

  render() {
    const { modules }=this.state.data;
    const {modData}=this.state
    // console.log(this.state.showEdit);
    return (
      <div>
             { !this.state.showEdit && (
        <div>
        <h1>Module List</h1>
         <table style={{ 'width':'100%'}} className="table table-bordered">
         <thead>
            <tr>
              <th>Module ID</th>
              <th>Module Name</th> 
              <th>Action</th>
            </tr>
        </thead>
            <tbody>
        {
          modules &&
          modules.length > 0 &&
          modules.map(module =>
             <tr key={module._id}>
              <td>{module.moduleId}</td>
              <td>{module.name}</td> 
              <td><button className="btn btn-warning" onClick={(evt) => this.handleEdit(evt, module)}>Edit</button></td>
            </tr>
        )}
      </tbody>

</table>
</div>
     ) }
         {
          this.state.showEdit && <EditModule module={modData} closeEdit={() => { this.setState({ showEdit: false }); }}/>
         }    
      </div>
    );
  }
}
