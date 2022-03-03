<template>
  <div class="basebox">
    <div class="ruleFormClass">
      <span class="boxheader">基本信息</span>
      <a> made by {{ author }} </a>
    </div>
  </div>
</template>
 
<script type="text/javascript">
export default {
  data () {
    return {
      author: "THU"
    }
  }
}
</script>
 
<style scoped>
#basebox {
  position: relative;
  font-size: 2rem;
  display:-webkit-box;
  margin: 0.5rem;
  width: 100vw;
  height: 60rem;
  background: #f0f2f5;
}
#iconbox{
  font-size: 8rem;
}

.ruleFormClass{
  padding: 2rem;
  border:1px solid gray;
  border-radius: 5px;
  width: 68%;
  margin: 0 auto;
}
.boxheader{
  font-size:1.7rem;
  font-weight: bolder;
}
:deep(.el-input__prefix-inner) { 
  display: block;
}
</style>