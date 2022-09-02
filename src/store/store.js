import { reactive } from "vue";

const Store = reactive({
    User_Name: '',
    Users_Images:[],
    Handles:{
        Change_Name: element => {
            Store.User_Name = element
        },
        Add_Image: element => {
            Store.Users_Images.push(element)
        },
    }
})


export {Store}