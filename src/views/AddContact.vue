<template>
  <div class="add-contact">
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Добавить контакт</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit quis necessitatibus non natus ad distinctio repellendus molestias facere assumenda.</p>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input v-model="contact.name" type="text" class="form-control" placeholder="Имя">
          </div>
          <div class="mb-2">
            <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input v-model="contact.photo" type="text" class="form-control" placeholder="Фото">
          </div>
          <div class="mb-2">
            <input v-model="contact.mobile" type="number" class="form-control" placeholder="Телефон">
          </div>
          <div class="mb-2">
            <select  v-model="contact.groupId" class="form-control">
              <option :value="group.id" v-for="group in groups" :key="group.id">{{group.name}}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Создать">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService';

export default {
  data() {
    return {
      contact: {
        name: '',
        photo: '',
        email: '',
        mobile: '',
        groupId: ''
      },
      groups: []
    }
  },
  created: async function() {
    try {
      let response = await ContactService.getAllGroups();
      this.groups = response.data;
    } catch(error){
      console.log(error)
    }
  },
  methods: {
    submitCreate: async function(){
      try{
        let response = await ContactService.createContact(this.contact);
        if(response){
          return this.$router.push('/')
        } else {
          return this.$router.push('contacts/add')
        }
      }
      catch(error){
      console.log(error)
    }
    }
  }
}
</script>

<style>

</style>