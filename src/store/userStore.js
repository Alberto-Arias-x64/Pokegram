import { reactive } from "vue";

const userStore = reactive({
  userName: "",
  userImage: "",
  usersImages: [],
  Handles: {
    changeName: (element) => {
      userStore.userName = element;
    },
    changeImage: (element) => {
      userStore.userImage = element;
    },
    addImage: (element) => {
      userStore.usersImages.push(element);
    },
  },
});

export { userStore };
