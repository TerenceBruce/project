<template>
  <div class="wrapper">
    <div class="container">
        <div class="header">
            <h1 id="title">Heart App</h1>
            <p id="subtitle">Registration Successful</p>
        </div>
        <div>
            <p id="content">Account has been created for user:</p>
            <p id="email"><b>{{email}}</b></p>
            <br>
            <el-button
                type="primary"
                style="width: 16vw; font-size: 18px"
                @click="loadLogin"
                >Take me to login
            </el-button><br>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['email']
}
</script>

<style scoped>
    .wrapper {
    background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
    height: 90vh;
    padding-top: 10vh;
  }
  
  .container {
      width: 50vw;
      height: 60vh;
      border-radius: 5px;
      background-color: white;
      margin-left: 25vw;
  }

  .header {
    height: 22vh;
    padding-top: 5vh;
  }

  #subtitle {
    margin-top: 10vh;
    font-family: Tahoma;
    font-size: 18px;
    color: #6CAC73;
  }

  #content {
    font-family: Tahoma;
    font-size: 18px;
  }

</style>