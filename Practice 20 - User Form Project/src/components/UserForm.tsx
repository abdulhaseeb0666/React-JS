type User = {
  name: string;
  password: string;
  email: string;
  image: string;
}

const UserForm = (params : {users: User[]}) => {
  const users = params.users;
  
  if(users.length > 0){
    return (
    <div className=" absolute top-[65%] flex gap-5 justify-center items-center p-5 rounded-xl bg-gray-900 overflow-x-auto w-full flex-nowrap whitespace-nowrap">
      
      {
        users.map((user , idx) => {
          return (
            <div key={idx} className="flex flex-col gap-2 justify-center items-center p-5 rounded-xl bg-blue-900 border-2 border-white w-50 h-50 ">
              <img src={user.image} alt="" className="w-20 h-20 rounded-full object-cover" />
              <p>Username: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )
        })
      }

    </div>
  )
  }
  else{
    return 
  }
  
}

export default UserForm
