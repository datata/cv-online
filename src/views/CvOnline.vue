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
        <el-input
          placeholder="Your LinkedIn"
          v-model="form.linkedin"
        ></el-input>
      </el-form-item>

      <el-form-item
        v-for="experience in form.experiences"
        :label="'Experience'"
        :key="experience.key"
      >
        <el-input :placeholder="'Dates'" v-model="experience.dates"></el-input>
        <el-input :placeholder="'Job'" v-model="experience.job"></el-input>
        <el-input
          :placeholder="'Corporate'"
          v-model="experience.corporate"
        ></el-input>
        <el-input
          type="textarea"
          autosize
          placeholder="Description"
          v-model="experience.description"
        >
        </el-input>
        <el-button @click.prevent="removeExperience(experience)"
          >Delete</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button @click="addLaboralExperience">New experience</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
    <CvModelPaola :print="this.print" :cv="this.form" />
  </div>
</template>

<script>
import CvModelPaola from "@/components/CvModelPaola.vue";

export default {
  components: {
    CvModelPaola,
  },
  data() {
    return {
      print: false,
      form: {
        name: "",
        profession: "",
        email: "",
        phone: "",
        linkedin: "",
        experiences: [
          {
            key: 1,
            corporate: "",
            dates: "",
            description: "",
            job: "",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.print = true;

      setTimeout(() => {
        this.print = false;
      }, 100);
    },
    addLaboralExperience() {
      this.form.experiences.push({
        key: Date.now(),
        value: "",
      });
    },
    removeExperience(item) {
      var index = this.form.experiences.indexOf(item);
      if (index !== -1) {
        this.form.experiences.splice(index, 1);
      }
    },
  },
};
</script>