<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x grid-padding-y">
      <div class="cell medium-7">
        <form>
          <div class="grid-x grid-margin-x">
            <div class="cell medium-12">
              <h1 class="separator-left">File a Complaint</h1>
            </div>
            <div class="cell medium-6">
              <label for="name">Name
                <input type="text" id="name" v-model="userData.name">
              </label>
            </div>
            <div class="cell medium-6">
              <label for="email">Email
                <input type="text" id="email" v-model="userData.email">
              </label>
            </div>
            <div class="cell medium-6">
              <label for="password">Password
                <input type="password" id="password" v-model="userData.password">
              </label>
            </div>
            <div class="cell medium-6">
              <label for="age">Age
                <input type="number" id="age" v-model="userData.age">
              </label>
            </div>
            <div class="cell medium-12">
              <label for="message">Message
                <textarea id="message" rows="2" v-model="userData.message"></textarea>
              </label>
            </div>
            <fieldset class="cell medium-6">
              <legend>Newsletters?</legend>
              <input type="checkbox" id="topComplaints" value="Top Complaints" v-model="newsletters"><label for="topComplaints">Top Complaints</label>
              <input type="checkbox" id="topNews" value="Top News" v-model="newsletters"><label for="topNews">Top News</label>
            </fieldset>
            <fieldset class="cell medium-6">
              <legend>Sex</legend>
              <input type="radio" name="sex" id="male" value="Male" v-model="sex"><label for="male">Male</label>
              <input type="radio" name="sex" id="female" value="Female" v-model="sex"><label for="female">Female</label>
            </fieldset>
            <div class="cell medium-6">
              <label for="priority">Priority</label>
              <select id="priority" v-model="selectedPriority">
                <option v-for="priority in priorities"> {{ priority }} </option>
              </select>
            </div>
            <div class="cell medium-6">
              <app-switch v-model="dataSwitch"></app-switch>
            </div>
          </div>
          <div class="grid-x grid-margin-x align-center">
            <div class="cell medium-5">
              <input type="submit" class="button primary expanded" @click.prevent="submitted" value="Submit">
            </div>
          </div>
        </form>
      </div>
      <div class="cell medium-5">
        <div class="grid-x grid-margin-x">
          <div class="cell">
            <div class="card" v-if="isSubmitted">
              <div class="card-divider">
                <h4>Your Saved Data</h4>
              </div>
              <div class="card-section">
                <p>Name: {{ userData.name }} </p>
                <p>Email: {{ userData.email }} </p>
                <p>Password: {{ userData.password }} </p>
                <p>Age: {{ userData.age }} </p>
                <p class="multiline">Message: {{ userData.message }} </p>
                <p><strong>Newsletters?</strong></p>
                <ul>
                  <li v-for="newsletter in newsletters">
                    {{ newsletter }}
                  </li>
                </ul>
                <p>Sex: {{ sex }} </p>
                <p>Priority: {{ selectedPriority }} </p>
                <p>Switched: {{ dataSwitch }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
