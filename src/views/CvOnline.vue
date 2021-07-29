<template>
  <div class="about">
    <h1>Start your cv online</h1>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input placeholder="Your name" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="Your profession"
          v-model="form.profession"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Your email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Your phone" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>