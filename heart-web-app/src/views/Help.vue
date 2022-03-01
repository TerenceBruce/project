<template>
  <div class="wrapper">
      <div class="container">
          <div class="header">
              <h4 id="subtitle">Help Page</h4>
            </div>
            <div class="body" style="text-align: left; padding-left: 1vw">
                <p>
                    <b>Register and Login</b>
                    <br><br>
                    You can create an account on the Register page by filling out the form with your email address, some personal data and a password. Your email address will become your username for the site and you will be able to login to the system with the email and password combination that was set. Please note that the email address must not already be associated with an account, your password is valid and all required fields have been filled in.
                    <br>
                    If you have forgotten your password, you can click the "Forgot Password" button on the login page to receive an email with a link to reset your password.
                    <br><br>
                    <b>My Account</b>
                    <br><br>
                    You can view your account by navigating to the "My Account" page when logged into the site. Here you can update your account information such as your name, number, address etc. You can also reset your password from this page and a reset password link will be sent to the associated email address.
                    <br><br>
                    <b>Upload Data</b>
                    <br><br>
                    When logged into the site, you can upload experimental data by navigating to the "Upload Data" page. The file must be a .CSV file. Use the mapping tool to map the columns in the file to the appropriate field for the data to be stored in. 
                    <br>
                    Previous uploads can be viewed and also deleted which will remove all of the data in that upload from the database.
                    <br><br>
                    <b>Viewing Data</b>
                    <br><br>
                    Data can be viewed by navigating to the "View Data" page. Here, you can perform queries on the data and generate graphs to display and visualise the data on the page.
                    </p>
            </div>
          </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .wrapper {
    background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
    height: 90vh;
    padding-top: 10vh;
  }
  
  .container {
      width: 70vw;
      height: 80vh;
      border-radius: 5px;
      background-color: white;
      margin-left: 15vw;
      margin-top: 3vw;
  }

  #subtitle {
      font-family: Tahoma;
      font-size: 38px;
      color: #4C4B4B;
  }


</style>