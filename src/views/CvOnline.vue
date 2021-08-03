<template>
  <div class="about">
    <h1>Start your cv online</h1>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input :placeholder="$t('lang.personalData.name')" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          :placeholder="$t('lang.personalData.profession')"
          v-model="form.profession"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :placeholder="$t('lang.personalData.email')" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :placeholder="$t('lang.personalData.phone')" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          :placeholder="$t('lang.personalData.linkedin')"
          v-model="form.linkedin"
        ></el-input>
      </el-form-item>

      <el-form-item
        v-for="experience in form.experiences"
        :label="$t('lang.experience.experience')"
        :key="experience.key"
      >
        <el-input :placeholder="$t('lang.experience.inputs.dates')" v-model="experience.dates"></el-input>
        <el-input :placeholder="$t('lang.experience.inputs.job')" v-model="experience.job"></el-input>
        <el-input
          :placeholder="$t('lang.experience.inputs.corporate')"
          v-model="experience.corporate"
        ></el-input>
        <el-input
          type="textarea"
          autosize
          :placeholder="$t('lang.experience.inputs.description')"
          v-model="experience.description"
        >
        </el-input>
        <el-button @click.prevent="removeExperience(experience)" :disabled="isExperienceDeleteButtonDisabled"
          >{{$t('lang.experience.buttons.deleteExperience')}}</el-button
        >
        <el-button @click="addLaboralExperience">{{$t('lang.experience.buttons.addExperience')}}</el-button>
      </el-form-item>

      <el-form-item
        v-for="education in form.educations"
        :label="$t('lang.education.education')"
        :key="education.key"
      >
        <el-input :placeholder="$t('lang.education.inputs.dates')" v-model="education.dates"></el-input>
        <el-input :placeholder="$t('lang.education.inputs.academicTitles')" v-model="education.title"></el-input>
        <el-input
          :placeholder="$t('lang.education.inputs.academicPlaces')"
          v-model="education.corporate"
        ></el-input>
        <el-button @click.prevent="removeEducation(education)" :disabled="isEducationDeleteButtonDisabled"
          >{{$t('lang.education.buttons.deleteEducation')}}</el-button
        >
        <el-button @click="addEducation">{{$t('lang.education.buttons.addEducation')}}</el-button>
      </el-form-item>

      <el-form-item
        v-for="skill in form.skills"
        :label="$t('lang.skill.skill')"
        :key="skill.key"
      >
        <el-input :placeholder="$t('lang.skill.inputs.skill')" v-model="skill.name"></el-input>

        <el-button @click.prevent="removeSkill(skill)" :disabled="isSkillDeleteButtonDisabled">{{$t('lang.skill.buttons.deleteSkill')}}</el-button>
        <el-button @click="addSkill">{{$t('lang.skill.buttons.addSkill')}}</el-button>
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
  beforeCreate() {
    this.$i18n.locale = this.$route.params.country;
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
    isExperienceDeleteButtonDisabled() {
      let isExperienceDeleteButtonDisabled = false;
      if(this.form.experiences.length <= 1) 
         isExperienceDeleteButtonDisabled = true;

      return isExperienceDeleteButtonDisabled;
    },
    isEducationDeleteButtonDisabled() {
      let isEducationDeleteButtonDisabled = false;
      if(this.form.educations.length <= 1) 
         isEducationDeleteButtonDisabled = true;

      return isEducationDeleteButtonDisabled;
    },
    isSkillDeleteButtonDisabled() {
      let isSkillDeleteButtonDisabled = false;
      if(this.form.skills.length <= 1) 
         isSkillDeleteButtonDisabled = true;

      return isSkillDeleteButtonDisabled;
    }
  }  
};
</script>