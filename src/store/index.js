import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentKey: 1,
    categories: [
      {
          categoryName: 'Работа',
          tasksToDo: [
            {
                name: 'Первое задание'
            }
          ],
          tasksDone: [
            {
                name: 'Первое завершенное задание'
            }
          ]
      },
      {
          categoryName: 'Дом',
          tasksToDo: [
            {
                name: 'Второе задание'
            },
            {
                name: 'Третье задание'
            },
            {
                name: 'Четвертое задание'
            },
          ],
          tasksDone: [
            {
                name: 'Второе завершенное задание'
            }
          ]
      },
      {
          categoryName: 'Семья',
          tasksToDo: [
            {
                name: 'Третье задание'
            }
          ],
          tasksDone: [
            {
                name: 'Третье завершенное задание'
            }
          ]
      },
    ]
  },
  mutations: {
    addTask(state, payload) {

      state.categories[state.currentKey].tasksToDo.push(payload.task)

    },
    deleteTask(state, payload) {

      state.categories[state.currentKey].tasksToDo.splice(payload.key, 1)
    },
    editTask(state, payload) {
      state.categories[state.currentKey].tasksToDo[payload.key].name = payload.name;
    },
    checkTask(state, payload) { 
      //   const payload = {
      //     key: this.index,
      //     name: this.name,
      // }

      state.categories[state.currentKey].tasksToDo.splice(payload.key, 1)
      state.categories[state.currentKey].tasksDone.push(payload.task)
    },
    uncheckTask(state, payload) {
      state.categories[state.currentKey].tasksDone.splice(payload.key, 1)
      state.categories[state.currentKey].tasksToDo.push(payload.task)
    },
    setCurrentKey(state, payload) {
      state.currentKey = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
