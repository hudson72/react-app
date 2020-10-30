// // Example 1

// import React, { Component } from 'react';


// class App extends Component {

//   state = {
//     active: false
//   }

//   render() {


//       const styles = {
//         btn_off: {
//             border: '2px solid black',
//             padding: '10px 20px',
//             fontFamily: 'arial',
//             fontSize: 20,
//             display: 'block',
//             margin: '20px auto',
//             backgroundColor: 'white',
//             cursor: 'pointer'
//           },
//           btn_on: {
//               border: '2px solid black',
//               padding: '10px 20px',
//               fontFamily: 'arial',
//               fontSize: 20,
//               display: 'block',
//               margin: '20px auto',
//               backgroundColor: 'cadetblue',
//               color: 'white',
//               cursor: 'pointer'
//             }
//       }

//        return (
//       <div>
//         <button style={this.state.active ? styles.btn_on : styles.btn_off} onClick={()=> this.setState({active: !this.state.active})}>{this.state.active ? 'Stop' : 'Start'}</button>
//       </div>
//     );
//   }
// }

// export default App;
