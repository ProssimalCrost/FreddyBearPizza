interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserServive{
 async execute({email, name, password}: UserRequest){
    //Logica para criar um usuario

 }
}  

export {CreateUserServive}