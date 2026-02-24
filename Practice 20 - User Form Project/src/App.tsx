import React, { useState } from 'react'
import UserForm from './components/UserForm';

type User = {
  name: string;
  password: string;
  email: string;
  image: string;
}

const Page = () => {

  const [users, setusers] = useState<User[]>([]);
  const [name, setname] = useState<string>("")
  const [password, setpassword] = useState<string>("")
  const [email, setemail] = useState<string>("")
  const [image, setimage] = useState<string>("")

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if(name === "" || password === "" || email === "" || image === ""){
      alert("Please fill in all the fields");
    } ;

    const user = { name, password, email, image };
    setusers([...users, user]);
    setname("")
    setpassword("")
    setemail("")
    setimage("")

  };

  return (
    <div>
      <form className='flex flex-col bg-gray-900 rounded-xl p-2 border-2 border-white w-fit h-fit gap-2 absolute left-[50%] top-5 translate-x-[-50%] '>
        <h1 className='font-bold text-3xl text-center'>Add User</h1>
        
        <p className='font-bold'>Username: </p>
        <input type="text" name="username" className='border-white border-2 rounded-sm w-70 p-0.5' placeholder='Enter Name' value={name} onChange={(e)=>{
          setname(e.target.value);
        }}/>
        
        <p className='font-bold'>Password: </p>
        <input type="password" name="password" className='border-white border-2 rounded-sm w-70 p-0.5' placeholder='Enter Password' value={password} onChange={(e)=>{
          setpassword(e.target.value);
        }}/>
        
        <p className='font-bold'>Email: </p>
        <input type="email" name="email" className='border-white border-2 rounded-sm w-70 p-0.5' placeholder='Enter Email' value={email} onChange={(e)=>{
          setemail(e.target.value);
        }}/>
        
        <p className='font-bold'>Photo URL: </p>
        <input type="url" name="images" className='border-white border-2 rounded-sm w-70 p-0.5' placeholder='Enter URL' value={image} onChange={(e)=>{
          setimage(e.target.value);
        }}/>

        <button type="submit" className='border-white border-2 font-bold text-xl w-fit place-self-center rounded-xl px-2 cursor-pointer hover:bg-white hover:text-black active:scale-[0.9]' onClick={(e) => {
          handleSubmit(e);    
        }}>Submit</button>
      </form>

      <UserForm users={users} />

    </div>
  )
}

export default Page
