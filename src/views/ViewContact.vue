<template>
<div class="edit-contact">
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Просмотр контакта</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit quis necessitatibus non natus ad distinctio repellendus molestias facere assumenda.</p>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img-big">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
                  <li class="list-group-item">Имя: <span class="fw-bold">{{contact.name}}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                  <li class="list-group-item">Телефон: <span class="fw-bold">{{contact.mobile}}</span></li>
                  <li class="list-group-item">Компания: <span class="fw-bold">{{contact.company}}</span></li>
                  <li class="list-group-item">Title: <span class="fw-bold">{{contact.title}}</span></li>
                  <li class="list-group-item">Группа: <span class="fw-bold">{{contact.groupId}}</span></li>
                </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-circle-left"></i>Назад</router-link>
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
      contactId: this.$route.params.contactId,
      contact: {},
      group: {},
      errorMessage: ''
    }
  },
  created: async function() {
    try {
      let response = await ContactService.getContact(this.contactId);
      let groupResponse = await ContactService.getGroup(response.data);
      this.contact = response.data;
      this.group = groupResponse.data;
    } catch(error){
      this.errorMessage = error;
      console.log(error)
    }
  },
}
</script>

<style>

</style>