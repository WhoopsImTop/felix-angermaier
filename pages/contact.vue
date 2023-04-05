<template>
  <div class="content-container">
    <div class="text-container">
      <h2>Sprich mit uns</h2>
      <div class="row">
        <form>
          <input
            v-model="anrede"
            type="text"
            class="half"
            name="anrede"
            placeholder="Anrede"
          />
          <input
            v-model="name"
            type="text"
            class="half"
            name="name"
            placeholder="Name"
          />
          <input
            v-model="tel"
            type="text"
            class="half"
            name="tel"
            placeholder="Telefon"
          />
          <input
            v-model="email"
            type="text"
            class="half"
            name="email"
            placeholder="E-Mail"
          />
          <textarea
            v-model="nachricht"
            class="full"
            cols="10"
            rows="7"
            placeholder="Nachricht"
          ></textarea>
          <label for="datenschutz">
            <input type="checkbox" id="datenschutz" v-model="datenschutz" />
            Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und
            akzeptiere diese.
          </label>
          <button :disabled="!datenschutz">Senden</button>
        </form>
        <div class="contact-data">
            <p><strong>{{ contact[0].company_name }}</strong></p>
            <p>{{ contact[0].street }}</p>
            <p>{{ contact[0].zip }} {{ contact[0].city }}</p>
            <p><a :href="'tel:' + contact[0].phone">{{ contact[0].phone }}</a></p>
            <p><a :href="'mailto:' + contact[0].email ">{{ contact[0].email  }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const contact = await $content("kontaktdaten").fetch();
    return { contact };
  },
  data() {
    return {
      anrede: "",
      name: "",
      tel: "",
      email: "",
      nachricht: "",
      datenschutz: false,
    };
  },
};
</script>

<style>
</style>