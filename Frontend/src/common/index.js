// import updateUser from "../../../Backend/controller/updateUser";

const backendDomain = "http://localhost:8000"
const  SummaryApi = {
    signUp : {
        url: `${backendDomain}/api/signup`,
        method: 'POST',
    },
    signIn : {
        url: `${backendDomain}/api/signin`,
        method: 'POST',
    },
    current_user : {
        url: `${backendDomain}/api/userdetails`,
        method: 'get',
    },
    logout_user : {
        url: `${backendDomain}/api/userLogout`,
        method: 'get',
    },
    allUser: {
        url: `${backendDomain}/api/all-user`,
        method : 'get' ,
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method : 'post' ,
    }

    

}

export default SummaryApi ;
