import { reactive } from "vue";

const postStore = reactive({
  data: [],
  Handles: {
    loadData: (data) => {
      postStore.data.push(data);
    },
  },
});

export { postStore };
