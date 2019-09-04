import React, {Component} from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";

const API = "https://jsonplaceholder.typicode.com"

export default class UserDetail extends Component {
constructor(){
  super();
  this.state = {
    isLoaded:false,
    userList: []
  };
}

componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const personsList = res.data;
        this.setState({ personsList });
      })
  }


render(){
const data = this.state.personsList;

    const columns = [
      {
      Header: 'Id',
      accessor: 'id'
    },
      {
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'Email',
      accessor: 'email'
    }
    ,{
      Header: 'Website',
      accessor: 'website'
    }
    ,{
      Header: 'Company',
      accessor: 'company.name'
    }
    ,{
      Header: 'City',
      accessor: 'address.city'
    }
    ]

    return (
          <div >
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {5}
                pageSizeOptions = {[5,10]}
                
              />
          </div>      
    )
}


}