<template>
  <div
    class="
      overflow-x-scroll
      bg-white
      sm:bg-theme-1
      lg:overflow-x-hidden
      md:overflow-x-scroll
      overflow-y-hidden
    "
  >
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            id="flip-list-demo"
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200" name="fruit-table" >
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-lg
                      sm:text-6xl
                      font-bold font-bebas
                      text-theme-1
                      uppercase
                      tracking-wider
                    "
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-lg
                      sm:text-6xl
                      font-bold font-bebas
                      text-theme-1
                      uppercase
                    "
                  >
                    Player Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-lg
                      sm:text-6xl
                      font-bold font-bebas
                      text-theme-1
                      uppercase
                    "
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-lg
                      sm:text-6xl
                      font-bold font-bebas
                      text-theme-1
                      uppercase
                    "
                  >
                    Accuracy
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-lg
                      sm:text-6xl
                      font-bold font-bebas
                      text-theme-1
                      uppercase
                    "
                  >
                    Efficiency
                  </th>
                </tr>
              </thead>
              <!-- <tbody class="divide-y divide-indigo-50" name="flip-list" > -->
              <transition-group class="divide-y divide-indigo-50" name="flip-list">

                <tr v-for="(user, index) in Users" :key="user.key">
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-lg
                      sm:text-6xl
                      text-center
                      font-bold
                      sm:text-theme-40
                      text-theme-1
                    "
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      sm:text-theme-40
                      text-theme-1
                    "
                  >
                    <p class="font-bold text-lg sm:text-6xl">{{user.firstname +" " + user.lastname}}</p>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-lg
                      sm:text-6xl
                      font-bold
                      sm:text-theme-40
                      text-theme-1
                    "
                  >
                    {{user.time}} ms
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-lg
                      sm:text-6xl
                      font-bold
                      sm:text-theme-40
                      text-theme-1
                    "
                  >
                    {{user.accuracy}} correct
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-lg
                      sm:text-6xl
                      font-bold
                      sm:text-theme-40
                      text-theme-1
                    "
                  >
                    {{user.efficiency}} ms
                  </td>
                </tr>
              </transition-group>
              <!-- </tbody> -->
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                Users: []
            }
        },
        // created() {
        //     db.collection('users')
        //     .orderBy('efficiency', 'asc')
        //     .onSnapshot((snapshotChange) => {
        //         this.Users = [];
        //         snapshotChange.forEach((doc) => {
        //             this.Users.splice(this.index,0,{
        //                 key: doc.id,
        //                 firstname: doc.data().firstname,
        //                 lastname: doc.data().lastname,
        //                 time: doc.data().time,
        //                 accuracy: doc.data().accuracy,
        //                 efficiency: doc.data().efficiency,
        //             })
        //         });
        //     })
        // },
        mounted() {
  	      this.addItem()
        },
        
        methods: {
          addItem() {
            db.collection('users')
            .orderBy('efficiency', 'asc')
            .onSnapshot((snapshotChange) => {
                this.Users = [];
                snapshotChange.forEach((doc) => {
                    this.Users.splice(this.index,0,{
                        key: doc.id,
                        firstname: doc.data().firstname,
                        lastname: doc.data().lastname,
                        time: doc.data().time,
                        accuracy: doc.data().accuracy,
                        efficiency: doc.data().efficiency,
                    })
                });
            })
            // db.collection('users')
            // .orderBy('efficiency', 'asc')
            // .onSnapshot((snapshotChange) => {
            //     this.Users = [];
            //     snapshotChange.forEach((doc) => {
            //         this.Users.splice(4,0,{
            //             key: doc.id,
            //             // firstname: doc.data().firstname,
            //             // lastname: doc.data().lastname,
            //             // time: doc.data().time,
            //             // accuracy: doc.data().accuracy,
            //             // efficiency: doc.data().efficiency,
            //             index: 5,
            //             firstname: "Kiwis",
            //             lastname: "Caesar",
            //             time: 5,
            //             accuracy: 6,
            //             efficiency: 30,
            //         })
            //     });
            // })
          },
        },

    }
</script>
<style scoped>
.flip-list-move {
  transition: transform 1.8s ease;
}
.feedback {
  background-color: #31b0d5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border-color: #46b8da;
}

#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}
</style>
