<template>
<div class="edit-contact">
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Редактировать контакт</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit quis necessitatibus non natus ad distinctio repellendus molestias facere assumenda.</p>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="updateSubmit()">
          <div class="mb-2">
            <input v-model="contact.name" type="text" class="form-control" placeholder="Имя">
          </div>
          <div class="mb-2">
            <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input v-model="contact.mobile" type="number" class="form-control" placeholder="Телефон">
          </div>
          <div class="mb-2">
            <select v-model="contact.groupId"  class="form-control">
              <option :value="group.id" v-for="group in groups" :key="group.id">{{group.name}}</option>
            </select>
          </div>
          <div class="mb-2">
      <div class="col">
        <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-circle-left"></i>Назад</router-link>
      </div>
    </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Сохранить">
          </div>
        </form>
      </div>
      
      <div class="col-md-4">
        <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-69.jpg" alt="" class="contact-img">
      </div>
    </div>
    {{error}}
  </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'

export default {
  data(){
    return{
      contactId: this.$route.params.contactId,
      contact: {},
      groups: [],
      error: ''
    }
  },
  created: async function() {
    try {
      let response = await ContactService.getContact(this.contactId);
      let groupResponse = await ContactService.getAllGroups();
      this.contact = response.data;
      this.groups = groupResponse.data;
    } catch(error){
      this.error = error
    }
  },
  methods: {
    updateSubmit: async function(){
      try{
        let response = await ContactService.updateContact(this.contact, this.contactId);
        if(response){
          return this.$router.push('/')
        } else {
          return this.$router.push(`contacts/edit/${this.contactId}`)
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