import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import './Styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));



export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[surname,setSurname]=useState('')
    const[password,setPassword]=useState('')
    const[students,setStudents]=useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
      e.preventDefault()
      const student={name,surname,password: password}
      console.log(student)
      fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)

      }).then(()=>{
        console.log("New Student added")
      })
  }

  const removeClick=(id)=>{
    fetch('http://localhost:8080/student/' + id, { 
      method: 'DELETE',
      crossorigin: false,
      mode: 'no-cors'
   })
    .then(res => console.log(res));
    
  }


  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
    )
  },[])
    return (

      <Container>
                <Paper elevation={3} style={paperStyle}>
                    <h1 style={{color:"blue"}}><u>Students database</u></h1>

            <form className={classes.root} noValidate autoComplete="off">
            
              <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />

              <TextField id="outlined-basic" label="Student Surname" variant="outlined" fullWidth
              value={surname}
              onChange={(e)=>setSurname(e.target.value)}
              />

              <TextField type="password" id="outlined-basic" label="Student Password" variant="outlined" fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />

                <span>
                  <Button variant="contained" color="secondary" onClick={handleClick}>
                  Submit
                  </Button>
                </span>
                <span>
                  <Button variant="contained" color="secondary" onClick={()=>
                     fetch('http://localhost:8080/student/' + 4, { method: 'DELETE' })
                     .then(() => this.setState({ status: 'Delete successful' }))}>
                  Delete
                  </Button>
                </span>
                
            </form>
          
            </Paper>
            <h1>Students</h1>

            <Paper elevation={3} style={paperStyle}>

              {students.map(student=>(
                <span>
                  <span>
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                      Id:{student.id}<br/>
                      Name:{student.name}<br/>
                      Surname:{student.surname}<br/>
                      Password:{student.password}
                    </Paper>
      
                    <Button variant="contained" color="secondary" onClick={()=>
                     fetch('http://localhost:8080/student/' + student.id, { 
                      method: 'DELETE', 
                      headers:{
                        "Content-Type":"application/json",
                        'Access-Control-Allow-Origin':'*'
                      }, 
                      mode: 'cors',
                      crossorigin: false,
                      
                    })
                     .then(() => this.setState({ status: 'Delete successful' }))}>
                      Remove
                    </Button>
                  </span>
                </span>
                ))
              }

            </Paper>
            
      </Container>
    );
}