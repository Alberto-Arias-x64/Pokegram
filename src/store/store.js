import { reactive } from "vue";

const Store = reactive({
    User_Name: '',
    User_Image: '',
    Users_Images:[],
    Handles:{
        Change_Name: element => {
            Store.User_Name = element
        },
        Change_Image: element => {
            Store.User_Image = element
        },
        Add_Image: element => {
            Store.Users_Images.push(element)
        },
    }
})


export {Store}