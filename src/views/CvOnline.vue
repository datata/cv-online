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
        <el-button @click.prevent="removeExperience(experience)" :disabled="isExperienceDisabled"
          >Delete</el-button
        >
        <el-button @click="addLaboralExperience">New experience</el-button>
      </el-form-item>

      <el-form-item
        v-for="education in form.educations"
        :label="'Education'"
        :key="education.key"
      >
        <el-input :placeholder="'Dates'" v-model="education.dates"></el-input>
        <el-input :placeholder="'Title'" v-model="education.title"></el-input>
        <el-input
          :placeholder="'School, academy or university'"
          v-model="education.corporate"
        ></el-input>
        <el-button @click.prevent="removeEducation(education)" :disabled="isEducationButtonDisabled"
          >Delete</el-button
        >
        <el-button @click="addEducation">New education</el-button>
      </el-form-item>

      <el-form-item
        v-for="skill in form.skills"
        :label="'Skills'"
        :key="skill.key"
      >
        <el-input :placeholder="'Name'" v-model="skill.name"></el-input>

        <el-button @click.prevent="removeSkill(skill)" :disabled="isSkillButtonDisabled">Delete</el-button>
        <el-button @click="addSkill">New skill</el-button>
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
        educations: [
          {
            key: 2,
            dates: "",
            title: "",
            place: "",
          },
        ],
        skills: [
          {
            key: 3,
            name: "",
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
        corporate: "",
        dates: "",
        description: "",
        job: "",
      });
    },
    removeExperience(item) {
      var index = this.form.experiences.indexOf(item);
      if (index !== -1 && this.form.experiences.length > 1) {
        this.form.experiences.splice(index, 1);
      }
    },
    addEducation() {
      this.form.educations.push({
        key: Date.now(),
        dates: "",
        title: "",
        place: "",
      });
    },
    removeEducation(item) {
      var index = this.form.educations.indexOf(item);
      if (index !== -1 && this.form.educations.length > 1) {
        this.form.educations.splice(index, 1);
      }
    },
    addSkill() {
      this.form.skills.push({
        key: Date.now(),
        name: ''
      });
    },
    removeSkill(item) {
      var index = this.form.skills.indexOf(item);
      if (index !== -1 && this.form.skills.length > 1) {
        this.form.skills.splice(index, 1);
      }
    },
  },
  computed: {
    isExperienceDisabled() {
      if(this.form.experiences.length <= 1) 
         return true;

      return false;
    },
    isEducationButtonDisabled() {
      if(this.form.educations.length <= 1) 
         return true;

      return false;
    },
    isSkillButtonDisabled() {
      if(this.form.skills.length <= 1) 
         return true;

      return false;
    }
  }
  
};
</script>