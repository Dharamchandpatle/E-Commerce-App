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
    },
    uploadProduct: {
        url: `${backendDomain}/api/upload-product`,
        method : 'post' ,
    },
    allProduct: {
        url: `${backendDomain}/api/get-product`,
        method : 'get' ,
    },
    updateProduct: {
        url: `${backendDomain}/api/update-product`,
        method : 'post' ,
    },

    

}

export default SummaryApi ;
