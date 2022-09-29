<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute left-full transform translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
        required
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg
        class="absolute right-full bottom-0 transform -translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >Input for Flanker</h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
          massa dictumst amet. Sapien tortor lacus arcu.
        </p>
      </div>
      <div class="mt-12">
        <form
          @submit.prevent="onFormSubmit"
          action="#"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <input
                type="text"
                v-model="user.firstname"
                name="first-name"
                id="first-name"
                required
                autocomplete="given-name"
                class="py-3 px-4 block w-full shadow-sm focus:ring-theme-1 focus:border-theme-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <input
                type="text"
                v-model="user.lastname"
                name="last-name"
                id="last-name"
                required
                autocomplete="family-name"
                class="py-3 px-4 block w-full shadow-sm focus:ring-theme-1 focus:border-theme-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="time" class="block text-sm font-medium text-gray-700">Time</label>
            <div class="mt-1">
              <input
                type="number"
                v-model="user.time"
                required
                name="time"
                id="time"
                class="py-3 px-4 block w-full shadow-sm focus:ring-theme-1 focus:border-theme-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="accuracy" class="block text-sm font-medium text-gray-700">Accuracy</label>
            <div class="mt-1">
              <input
                type="number"
                max="20"
                v-model="user.accuracy"
                required
                name="accuracy"
                id="accuracy"
                class="py-3 px-4 block w-full shadow-sm focus:ring-theme-1 focus:border-theme-1 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-theme-1 hover:bg-theme-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-1"
            >Submit Scores</button>
          </div>
        </form>

        <router-link
          to="/about"
          class="w-full inline-flex items-center justify-center mt-5 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-theme-1 hover:bg-theme-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-1"
        >Ranking</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import { db } from '../firebaseDb';
    export default {
        data() {
            return {
                user: {
                  firstname: '',
                  lastname:'',
                  time:'',
                  accuracy:'',
                  efficiency:''
                }
            }
        },

        methods: {

            async onFormSubmit(event) {

                event.preventDefault()
                const num_const = 20;
                this.user.efficiency = (this.user.time * num_const / this.user.accuracy).toFixed(2);
                this.user.firstname = this.user.firstname.toLowerCase();
                this.user.lastname = this.user.lastname.toLowerCase();
                this.user.efficiency = parseFloat(this.user.efficiency);
                console.log(this.user);
                if(this.user.accuracy < 21){

                  const res = await db.collection('users')
                    .where('firstname', '==', this.user.firstname)
                    .where('lastname', '==', this.user.lastname)
                    .get();
                  if(res.docs.length === 0) {
                    db.collection('users').add(this.user).then(() => {
                      alert("User successfully created!");
                      this.user.firstname = ''
                      this.user.lastname = ''
                      this.user.time = ''
                      this.user.accuracy = ''
                     }).catch((error) => {
                        console.log(error);
                     });
                  }
                  else {
                    const userRef = db.collection('users').doc(res.docs[0].id)
                    alert("User successfully updated!");
                    userRef.update(this.user)
                    this.user.firstname = ''
                    this.user.lastname = ''
                    this.user.time = ''
                    this.user.accuracy = ''
                  }
                }
                else {
                  console.log("accuracy less than 20")
                }
            }
        }
    }
</script>
