<template>
<div class="wrapper">
    <div class="container">
                <div class="prevention" id="prevention">
                    <center><h4>CARDIOMYOPATHY NEWS</h4></center>

                    <div class="psteps">
                        <div style="border-right: solid rgb(211, 211, 211) 1px">
                            <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118"><img src="../assets/Heartcard1.png"></a>
                            <h3>What is CARDIOMYOPTHAY ?</h3>
                            <p>Cardiomyopathy is a disease</p>
                        </div>
                        
                        <div style="border-right: solid rgb(211, 211, 211) 1px">
                             <a href="https://www.news-medical.net/news/20220209/The-serious-risks-COVID-19-may-pose-during-pregnancy.aspx"><img src="../assets/covid19.png"></a>
                            <h3>Covid 19 </h3>
                            <p>Make sure to thouroughly wash hands with soap</p>
                        </div>
                        
                        <div style="border-right: solid rgb(211, 211, 211) 1px">
                            <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118"><img src="../assets/symtomps.png"></a>
                            <h3>Symptomps of  CARDIOMYOPTHAY </h3>
                            <p>Chest pain, Rapid or irregular heartbeat</p>
                        </div>
                        
						<div style="border-right: solid rgb(211, 211, 211) 1px">
                            <a href="https://www.news-medical.net/news/20220124/Gene-replacement-therapy-could-help-mend-a-broken-heart-study-suggests.aspx"><img src="../assets/gene.png"></a>
                            <h3>Gene replacement therapy</h3>
                            <p>According to researchers from Japan</p>
                        </div>
						
						<div style="border-right: solid rgb(211, 211, 211) 1px">
                            <a href="https://www.news-medical.net/news/20220124/Gene-replacement-therapy-could-help-mend-a-broken-heart-study-suggests.aspx"><img src="../assets/ai.png"></a>
                            <h3>AI Early Predictions</h3>
                            <p> Scientists have shown that artificial intelligence</p>
                        </div>
						
						<div style="border-right: solid rgb(211, 211, 211) 1px">
                            <a href="https://www.news-medical.net/news/20211208/Rare-Gene-Mutation-In-Some-Black-Americans-May-Allow-Earlier-Screening-Of-Heart-Failure.aspx"><img src="../assets/body.png"></a>
                            <h3>Most Vulnerable Groups</h3>
                            <p>Black patients diagnosed </p>
                        </div>
						
						<center><h4>Latest News</h4></center>
                        <el-button
                            type="primary"
                            style="width: 18vw; height: 4vh; font-size: 18px"
                            @click="getNews"
                            >Update News Feed
                        </el-button>
                        <div v-for="(item, n) in newsList" :key="n">
                            <el-card>
                                <template #header>
                                    <div class="card-header">
                                    <span><strong>{{ item.title }}</strong></span>
                                    </div>
                                </template>
                                <a v-bind:href="item.url">View news</a>
                            </el-card>
                        </div>
                    </div>
                </div>
                </div>
                </div>
</template>

<script>
import axios from 'axios';
import { reactive } from '@vue/reactivity';
export default {
    
    setup() {
        let newsList = reactive([]);
        let article = reactive({});
        const getNews = () => {
            console.log("hit");
            return axios.get('https://newsapi.org/v2/everything?q=cardiomyopathy&from=2022-01-28&sortBy=publishedAt&apiKey=06bba38cc9ae4b8490c80615e7990d58').then(response => {
                console.log(response.data.articles);
                for (let i = 0; i < response.data.articles.length; i++) {
                    article.value = response.data.articles[i];
                    newsList.push(article.value);
                }
            });
        }
        return {getNews, newsList}
    }
};
</script>

<style scoped>

  .wrapper {
    background: linear-gradient(360deg, #001E3C 0%, #002663 93.8%);
    height: auto;
    padding-top: 10vh;
  }
  
  .container {
      width: 50vw;
      height: auto;
      border-radius: 5px;
      background-color: white;
      margin-left: 25vw;
      margin-top: 3vw;
  }
    img {
        width: 30%;
        height: 30%;
    }
  .header {
    height: 22vh;
    padding-top: 5vh;
  }

  #subtitle {
    margin-top: 10vh;
    font-family: Tahoma;
    font-size: 18px;
    color: #4C4B4B;
  }

  #error {
    font-family: Tahoma;
    font-size: 18px;
    color: #D63737;
  }

.prevention {
            padding: 5px;
            width: fit-content;
        }

        .psteps {
            margin: 0 auto;
        }

        .psteps div {
            display: inline-block;
            padding-right: 50px;
            margin: 30px;
            align-items: center;
            text-align: center;
            width: fit-content;
}

</style>