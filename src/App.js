// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container, Row, Col } from 'react-bootstrap'
// import Users from './Components/Users'
// import AddUserForm from './Components/AddUserForm'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       users: [
//         {
//           name: 'nana yaw',
//           email: 'nana@gmail.com',
//           gen: 10,
//           id: 'hi9895867',
//         },
//         {
//           name: 'nana adomah',
//           email: 'adomah@gmail.com',
//           gen: 1,
//           id: '765784639jh',
//         },
//         {
//           name: 'nana yaa',
//           email: 'yaa@gmail.com',
//           gen: 6,
//           id: 'jb4y5487490898',
//         },
//       ],
//     }
//   }

//   addUser = (user) => {
//     user.id = Math.random().toString()
//     this.setState({
//       users: [...this.state.users, user],
//     })
//   }

//   deleteUser = (id) => {
//     let undeletedUser = this.state.users.filter((user) => user.id !== id)
//     this.setState({
//       users: undeletedUser,
//     })
//   }

//   editUser = (id, updatedUser) => {
//     this.setState({
//       users: this.state.users.map((user) =>
//         user.id === id ? updatedUser : user,
//       ),
//     })
//   }
//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col md="4">
//             <AddUserForm addNewUser={this.addUser} />
//           </Col>
//           <Col>
//             <Users
//               userData={this.state.users}
//               deleteUser={this.deleteUser}
//               editUser={this.editUser}
//             />
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }


import React, { Component } from 'react'
import Jsar from './Components/Jsar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Jsar />
      </div>
    )
  }
}
