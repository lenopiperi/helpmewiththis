import React from 'react';
import '../App.css';
import useTable from 'react-table'
import api from '../api'


class TaskFeed extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          tasks: [],
          isLoading: false,
      }
  }

//TODO: get this to work
  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllTasks().then(tasks => {
        this.setState({
            tasks: tasks.data.data,
            isLoading: false,
        })
    })
  }

	render() {

    const { tasks, isLoading } = this.state
    console.log('TCL: TaskList -> render -> tasks', tasks)

	  return (
	  		<div>{tasks.toString()}</div>

	  );		
	}

 
}

// class TaskFeed extends React.Components {
//     constructor(props) {
//         super(props)
//         this.state = {
//             toptask: '',
//             description: '',
//             isLoading: false,
//         }
//     }

  // componentDidMount = async () => {
  //     this.setState({ isLoading: true })

  //     await api.getAllTasks().then(tasks => {
  //         this.setState({
  //             tasks: tasks.data.data,
  //             isLoading: false,
  //         })
  //     })
  // }

	// render() {

	// 	//checks component state
 //    const { tasks, isLoading } = this.state
 //    console.log('TCL: TaskList -> render -> tasks', tasks)

 //    const columns = [
 //    	{
 //        Header: 'ID',
 //        accessor: '_id',
 //        filterable: true,
 //    	}
 //    ]

	//   return (
	//     	<p>this will be the task list</p>
	//   );		
	// }

// }

export default TaskFeed


//movie list example

// import React, { Component } from 'react'
// import ReactTable from 'react-table'
// import api from '../api'

// import styled from 'styled-components'

// import 'react-table/react-table.css'

// const Wrapper = styled.div`
//     padding: 0 40px 40px 40px;
// `

// class MoviesList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             movies: [],
//             columns: [],
//             isLoading: false,
//         }
//     }

//     render() {
//         const { movies, isLoading } = this.state
//         console.log('TCL: MoviesList -> render -> movies', movies)

//         const columns = [
//             {
//                 Header: 'ID',
//                 accessor: '_id',
//                 filterable: true,
//             },
//             {
//                 Header: 'Name',
//                 accessor: 'name',
//                 filterable: true,
//             },
//             {
//                 Header: 'Rating',
//                 accessor: 'rating',
//                 filterable: true,
//             },
//             {
//                 Header: 'Time',
//                 accessor: 'time',
//                 Cell: props => <span>{props.value.join(' / ')}</span>,
//             },
//         ]

//         let showTable = true
//         if (!movies.length) {
//             showTable = false
//         }

//         return (
//             <Wrapper>
//                 {showTable && (
//                     <ReactTable
//                         data={movies}
//                         columns={columns}
//                         loading={isLoading}
//                         defaultPageSize={10}
//                         showPageSizeOptions={true}
//                         minRows={0}
//                     />
//                 )}
//             </Wrapper>
//         )
//     }
// }

// export default MoviesList
