var datascience=[{name:"Data Engineer",time:8},{name:"Data Analyst",time:6,},{name:"Data Science",time:7},{name:"SQL",time:8}];
    var programming=[{name:"Full stack developer",time:8},{name:"iOS Developer",time:7},{name:"React",time:6},{name:"Java web developer",time:5}];
    var product=[{name:"Product management",time:5},{name:"AI product manager",time:6},{name:"Data product manager",time:7},{name:"Monetization strategy",time:8}];
    var AI=[{name:"AI for healthcare",time:8},{name:"Deep learning",time:9},{name:"IOT",time:10},{name:"Microsoft Azure",time:11}]
    var images=[
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3rwaAEsoRTEH5tG7hkbmiP/7104590268166374b6165b47d01bb454/data_scientist_catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4zEEr4FUkSQ7U1UgVPPCHB/d4c2b2a0df97251f8c64a4e1b248f313/data_engineer_catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4x4nYFuwsS0CVlfp5YQjZQ/13a0153215af9d8be77a0746bf675b25/data_analyst_catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4Vsc69B7HtGJleUbsGoEQF/df82194a8785db58a5fc6e344ef71ad0/catalog_image_nd072.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6zlIQnEmoOGUINUlGdqxog/66e27c4847426acca10fb1a04abb66da/catalog-card-6.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5gOjBf0OJwC2gIHsmlT20G/7db648c216f61ae1f05d3a64a59baf1a/instructor-pointing-at-computer-screen.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2UhQyfps3lPG6s5VapdnkO/ce4eabfb7c084b7d577c9e2e84d2b841/catalog-140x120.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4j3k0Fuu9EWVbf7TcdlkIs/f6e426f39867b633c72c6ca649e110c7/Marketing_analytics_catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7ufWxtIFBsBSpMVJ3nA9rK/f807a01af1233cafcebd0539e221d4b0/man-analyzing-data-card.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6IIUwmXtznUr9zz2Iy9cBh/9dcdd2b93d2655f9373d400e2e8da3c7/catalog-card-7.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6mEuxTnE9mxQOrobcU18Re/926be9782dd001e321d6c03356d1e49c/business_analytics_catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7a2rYlzgIddrvFJwX58H1G/b7e346a7f64180d16c0f882c5c260a60/catalog-card__2_.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/30QHPv8aAYDo825f1PvYmg/663df4b4cf32a77fa0893ec92db522d3/cloud_devops_catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4jKQNZc9hc9f4YE3ltWinI/91e3800980872d65bc283a828a2892a0/data_streaming_Catalog_image.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6zlIQnEmoOGUINUlGdqxog/66e27c4847426acca10fb1a04abb66da/catalog-card-6.jpg",
        "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7HKYKfoPT385EIVb6V8FTv/638ecf30ee4adca17c3d535c8fddeae8/hero-bg-1180x624.jpg",
    ]
    function data(p){
        
        if(p=='datascience'){
        var a1=document.getElementById('a1');
        var a2=document.getElementById('a2');
        var a3=document.getElementById('a3');
        var a4=document.getElementById('a4');
        a1.innerHTML=datascience[0].name;
        a2.innerHTML=datascience[1].name;
        a3.innerHTML=datascience[2].name;
        a4.innerHTML=datascience[3].name;
        
        document.getElementById('b1').innerHTML="Estimated time : "+datascience[0].time+" months";
        document.getElementById('b2').innerHTML="Estimated time : "+datascience[1].time+" months";
        document.getElementById('b3').innerHTML="Estimated time : "+datascience[2].time+" months";
        document.getElementById('b4').innerHTML="Estimated time : "+datascience[3].time+" months";

       var g1=document.getElementById('g1');
       var g2=document.getElementById('g2');
       var g3=document.getElementById('g3');
       var g4=document.getElementById('g4');
       g1.src=images[0];
       g2.src=images[1];
       g3.src=images[2];
       g4.src=images[3];

       document.getElementById('a10').style.fontWeight="bolder";
       document.getElementById('a11').style.fontWeight="lighter";
       document.getElementById('a12').style.fontWeight="lighter";
       document.getElementById('a13').style.fontWeight="lighter";
        
        
        
    }
    else if(p=='programming'){
        
        var a1=document.getElementById('a1');
        var a2=document.getElementById('a2');
        var a3=document.getElementById('a3');
        var a4=document.getElementById('a4');
        a1.innerHTML=programming[0].name;
        a2.innerHTML=programming[1].name;
        a3.innerHTML=programming[2].name;
        a4.innerHTML=programming[3].name;
        document.getElementById('b1').innerHTML="Estimated time : "+programming[0].time+" months"
        document.getElementById('b2').innerHTML="Estimated time : "+programming[1].time+" months"
        document.getElementById('b3').innerHTML="Estimated time : "+programming[2].time+" months"
        document.getElementById('b4').innerHTML="Estimated time : "+programming[3].time+" months"

        var g1=document.getElementById('g1');
       var g2=document.getElementById('g2');
       var g3=document.getElementById('g3');
       var g4=document.getElementById('g4');
       g1.src=images[12];
       g2.src=images[13];
       g3.src=images[14];
       g4.src=images[15];

       document.getElementById('a10').style.fontWeight="lighter";
       document.getElementById('a11').style.fontWeight="bolder";
       document.getElementById('a12').style.fontWeight="lighter";
       document.getElementById('a13').style.fontWeight="lighter";
        
        
    }
    else if(p=="productmanagement"){
        
        var a1=document.getElementById('a1');
        var a2=document.getElementById('a2');
        var a3=document.getElementById('a3');
        var a4=document.getElementById('a4');
        a1.innerHTML=product[0].name;
        a2.innerHTML=product[1].name;
        a3.innerHTML=product[2].name;
        a4.innerHTML=product[3].name;
        document.getElementById('b1').innerHTML="Estimated time : "+product[0].time+" months"
        document.getElementById('b2').innerHTML="Estimated time : "+product[1].time+" months"
        document.getElementById('b3').innerHTML="Estimated time : "+product[2].time+" months"
        document.getElementById('b4').innerHTML="Estimated time : "+product[3].time+" months"

        var g1=document.getElementById('g1');
       var g2=document.getElementById('g2');
       var g3=document.getElementById('g3');
       var g4=document.getElementById('g4');
       g1.src=images[4];
       g2.src=images[5];
       g3.src=images[6];
       g4.src=images[7];

       document.getElementById('a10').style.fontWeight="lighter";
       document.getElementById('a11').style.fontWeight="lighter";
       document.getElementById('a12').style.fontWeight="bolder";
       document.getElementById('a13').style.fontWeight="lighter";
        
        
    
    }
    else if(p=="AI") {
        
        var a1=document.getElementById('a1');
        var a2=document.getElementById('a2');
        var a3=document.getElementById('a3');
        var a4=document.getElementById('a4');
        a1.innerHTML=AI[0].name;
        a2.innerHTML=AI[1].name;
        a3.innerHTML=AI[2].name;
        a4.innerHTML=AI[3].name;
        document.getElementById('b1').innerHTML="Estimated time : "+AI[0].time+" months"
        document.getElementById('b2').innerHTML="Estimated time : "+AI[1].time+" months"
        document.getElementById('b3').innerHTML="Estimated time : "+AI[2].time+" months"
        document.getElementById('b4').innerHTML="Estimated time : "+AI[3].time+" months"

        var g1=document.getElementById('g1');
       var g2=document.getElementById('g2');
       var g3=document.getElementById('g3');
       var g4=document.getElementById('g4');
       g1.src=images[8];
       g2.src=images[9];
       g3.src=images[10];
       g4.src=images[11];

       document.getElementById('a10').style.fontWeight="lighter";
       document.getElementById('a11').style.fontWeight="lighter";
       document.getElementById('a12').style.fontWeight="lighter";
       document.getElementById('a13').style.fontWeight="bolder";
        
        
        
    }
    }
    
    data('datascience');

    
    
    function abc(g){
        var a=document.getElementById(g).innerText;
        if(a=="Data Engineer"){
            window.location.href="data.html"
        }
        else if(a=="Full stack developer"){
            window.location.href="web.html";
        }
        else if(a=="Product management"){
            window.location.href="product.html";
        }
        else if(a=="AI for healthcare"){
            window.location.href="health.html";
        }
    }
