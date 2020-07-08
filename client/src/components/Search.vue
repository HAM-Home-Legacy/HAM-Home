<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="city">city</label>
          <md-select v-model="city" name="city" id="City">
            <md-option value="fight-club">Tunis</md-option>
            <md-option value="godfather">Ben Arous</md-option>
            <md-option value="godfather-ii">Bizerte</md-option>
            <md-option value="godfather-iii">Sousse</md-option>
            <md-option value="godfellas">Mahdia</md-option>
            <md-option value="pulp-fiction">Sfax</md-option>
            <md-option value="scarface">Gabes</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item">
        <md-field>
          <md-select v-model="Rooms" name="Rooms" id="Rooms" placeholder="Rooms">
            <md-option value="australia">2 Bedrooms, 1 Bathroom</md-option>
            <md-option value="brazil">3 Bedrooms, 1 Bathroom</md-option>
            <md-option value="japan">4 Bedrooms, 2 Bathroom</md-option>
            <md-option value="united-states">2 Bedrooms, 3 Bathrooms</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item">
        <md-field>
          <label for="price">Price</label>
          <md-select v-model="price" name="price" id="price">
            <md-option value="arial">200-300$</md-option>
            <md-option value="calibri">300-400$</md-option>
            <md-option value="cambria">400-500$</md-option>
            <md-option value="comic-sans">400-500$</md-option>
            <md-option value="consolas">400-500$</md-option>
            <md-option value="courier">400-500$</md-option>
            <md-option value="droid-sans">400-500$</md-option>
            <md-option value="georgia">400-500$</md-option>
            <md-option value="helvetica">400-500$</md-option>
            <md-option value="impact">400-500$</md-option>
            <md-option value="roboto">400-500$</md-option>
            <md-option value="segoe-ui">400-500$</md-option>
            <md-option value="times-new-roman">400-500$</md-option>
            <md-option value="ubuntu">400-500$</md-option>
            <md-option value="verdana">400-500$</md-option>
          </md-select>
        </md-field>
      </div>
    </div>

    <md-button class="md-primary md-raised" @click="city = 'pulp-fiction'">Search</md-button>
  </div>
</template>

<script>
export default {
  name: "BasicSelect",
  data: () => ({
    city: "",
    Rooms: null,
    price: null
  })
};
</script>
<style lang="stylus" scoped>
#md-layout md-gutter {
  margin-top: '20px';
}
</style>