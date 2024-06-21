// // import React from 'react'

// import { useState } from "react";

// // class ButtonColorChange extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       button: true
// //     }
// //     this.handleClick = this.handleClick.bind(this);
// //   }
// //   handleClick() {
// //     this.setState({
// //       button: !this.state.button
// //     })
// //   }
// //   render() {
// //     return (
// //       <div className="container">
// //         <button
// //           className={this.state.button ? "buttonTrue" : "buttonFalse"}
// //           onClick={this.handleClick}
// //         >
// //           <p>hello world</p>
// //         </button>
// //       </div>
// //     );
// //   }
// // }
// // export default ButtonColorChange

// // import { useState } from "react"

// // const Buuton = () => {

// //   const [click,setClick]=useState("#022a31")

// //   const myfun=()=>{
// //     if(click==="#022a31"){
// //       setClick("red")
// //     }
// //     else{
// //       setClick("#022a31")
// //     }
// //   }

// //   return (
// //     <div>
// //     <button onClick={myfun} style={{backgroundColor:click}}>click</button>
// //     </div>
// //   )
// // }

// // export default Buuton

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordR, setPasswordR] = useState("");
//   const [accept, setAccept] = useState(false);

//   const Submit = (e) => {
//     e.preventDefault();
//     setAccept(true);
//   };
//   return (
//     <>
//       <div className="parent">
//         <div className="register">
//           <form onSubmit={Submit}>
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name..."
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//               {name === ""&& accept && <p className="error">Username is Required</p>}
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="ايميل..."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password..."
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {password.length < 8 && accept && (
//               <p className="error">Password must be more than 8 char</p>
//             )}
//             <label htmlFor="repeat">Repeat Password</label>
//             <input
//               type="password"
//               id="repeat"
//               placeholder="Repeat Password"
//               value={passwordR}
//               onChange={(e) => setPasswordR(e.target.value)}
//               required
//             />
//               {passwordR !== password && accept && <p className="error">Password dose not match</p>}
//             <div style={{ textAlign: "center" }}>
//               <button type="submit">Register</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
