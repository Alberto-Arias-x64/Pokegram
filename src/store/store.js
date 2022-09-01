import { ref } from "vue";

const User_Name = ref('an')

function Change_Name(New_Name) {
    User_Name.value = New_Name
}


export {User_Name, Change_Name}