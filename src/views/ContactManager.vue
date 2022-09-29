<template>
  <div class="contact-manager">
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm"> <i class="fa fa-plus-circle"></i>New</router-link>
        </p>
        <p class="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ullam laudantium unde, beatae repudiandae autem eos ad amet aliquam consequatur!</p>
        <form>
          <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col">
              <input type="text" class="form-control" placeholder="Search Name">
            </div>
          <div class="col">
            <input type="submit" class="btn btn-outline-dark">
          </div>
                </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6" v-for="contact in contacts" :key="contact.id">
        <div class="card my-4 list-group-item-success" >
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <img :src="contact.photo" alt="" class="contact-img">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Имя: <span class="fw-bold">{{contact.name}}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{contact.email}}</span></li>
                  <li class="list-group-item">Телефон: <span class="fw-bold">{{contact.mobile}}</span></li>
                </ul>
              </div>
              <div class="col-sm-1">
                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning"><i class="fa fa-eye"></i></router-link>
                <router-link  :to="`/contacts/edit/${contact.id}`" class="btn btn-primary"><i class="fa fa-pencil"></i></router-link>
                <button class="btn btn-danger" @click="clickdeleteContact(contact.id)">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{{errorMessage}}

</div>

</template>

<script>
import { ContactService } from '@/services/ContactService';

export default {
  data() {
    return {
      contacts: [],
      errorMessage: '',
    }
  },
  created: async function() {
    try {
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
    } catch(error){
      this.errorMessage = error;
    }
  },
  methods: {
    clickdeleteContact: async function (contactId){
      try {
        console.log(contactId)
        let response = await ContactService.deleteContact(contactId);
        if(response) {
          let response = await ContactService.getAllContacts();
          this.contacts = response.data;
      } 
       
      } catch(err) {
        console.log(err)
        this.errorMessage = err
      }
    }
  }
}
</script>

<style>

</style>