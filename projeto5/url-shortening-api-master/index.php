
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style/style.css">

  
  <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
  
</head>
<body >

  <header>
    <nav class=" navbar navbar-expand-md mt-4 p-4 ">            
        <a class="navbar-brand" href=""><img src="images/logo.svg" alt=""></a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse mt-2  mt-md-0" id="menu">
            <ul class="navbar-nav nav-pills ml-auto text-center mt-4  mt-md-0 p-4 p-md-0 w-100 d-flex justify-content-between">
                <div class="d-flex flex-column flex-md-row">
                  <li class="nav-item
                   "><a class="nav-link " href="#">Features</a></li>
                  <li class="nav-item
                  "><a class="nav-link" href="#">Pricing</a></li>
                  <li class="nav-item
                  "><a class="nav-link" href="#">Resources</a></li>
                </div>
                <hr class="text-white">
                  <div class=" d-flex flex-column flex-md-row justify-content-center align-items-center pe-md-5">
                    <li class="nav-item" ><a  class="nav-link" href="">Login</a></li>
                    <li class="nav-item w-100 sing">
                    <button class="m-auto button ">Sign Up</button>
                      </li>
                  </div>
            </ul>
        </div>
    </nav>
  </header>
  <main class="text-center">
    <section id="sec_one" class="ps-4 text-center ">
        <img class="main_image mt-4" src="images/illustration-working.svg" alt="illustration-working">
        <div class="mt-3 pe-4" id="div_sec_one">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </p>
          <button class="button_main button">Get Started</button>
        </div>  
    </section>
    <section>
      <div id="div_sec_two">
        <form id="sec_two" onsubmit="enviaLink(event)" class="d-flex flex-wrap gap-3 " method="POST">
          <input type="url" name="url" id="url"  placeholder="Shorten a link here..." class="form-control ">
          <button type="submit" class="button">Shorten It!</button>
          <p id="message" class="m-0 p-0"></p>
        </form>
      </div>
      <div id="links">

      </div>
    </section>
    <section class="sections" id="advanced">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>
      
      <div class="d-flex flex-wrap" id="div_articles">
        <div id="line"></div>
        <article id="article_one">
          <div>
            <img src="images/icon-brand-recognition.svg" alt="">
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article id="article_two">
          <div><img src="images/icon-detailed-records.svg" alt=""></div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </article>
        <article id="article_three">
          <div><img src="images/icon-fully-customizable.svg" alt=""></div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
    <section  class="sections pt-5 d-flex flex-column align-items-center justify-content-center gap-2" id="boots">
      <h2 class="text-light">Boost your links today</h2>
      <button class=" button_main button">Get Started</button>
    </section>
  </main>
<footer class="text-center text-lg-start pt-5 pb-4">
  <div class="container">
    <div class="row text-center text-lg-start justify-content-around align-items-start">
      
      <div class="col-lg-3 mb-4">
        <img class="logo" src="images/logo.svg" alt="">
      </div>

      <div class="col-lg-2 mb-4">
        <h4 class="fw-semibold">Features</h4>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>

      <div class="col-lg-2 mb-4">
        <h4 class="fw-semibold">Resources</h4>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>

      <div class="col-lg-1 mb-4">
        <h4 class="fw-semibold">Company</h4>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      <div class="col-lg-3 d-flex justify-content-center justify-content-lg-end align-items-center gap-4 mb-4" id="imagens_icons">
        <img src="images/icon-facebook.svg" alt="Facebook">
        <img src="images/icon-twitter.svg" alt="Twitter">
        <img src="images/icon-pinterest.svg" alt="Pinterest">
        <img src="images/icon-instagram.svg" alt="Instagram">
      </div>
    </div>
    <div class="attribution text-center pt-4">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://laistalita.github.io/ProjetoTata/" target="_blank" >Lais Talita</a>.
    </div>
  </div>
</footer>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>

    let timeoutId = null;
    const retorno = document.getElementById('message');
    const input = document.getElementById('url');
    const cards = document.getElementById('links')
    let listaLinks =[]

    function enviaLink(event) {
      event.preventDefault()     
      const urlOriginal = input.value.trim();

      fetch('atividade.php',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlOriginal }),
    }) 
      .then(res =>res.json()) 
      .then(resposta =>{

       cards.innerHTML = ''
       const origem  = resposta.original
       const final = resposta.atual
        listaLinks.push({original: origem, atual: final})

        listaLinks.forEach(element => {
          let p1 = document.createElement('p')
          p1.textContent=element.original
          p1.classList.add('link1')

          let p2 = document.createElement('p')
          p2.textContent = element.atual
          p2.classList.add('p_links')

          let hrs = document.createElement('hr')

          let button_link = document.createElement('button')
          button_link.textContent='Copy'
          button_link.classList.add('button_links')
          button_link.classList.add('button')

          let div_container = document.createElement('div')
          div_container.appendChild(p2)
          div_container.appendChild(button_link)
          div_container.classList.add('div_container')

          button_link.onclick=()=> {
            button_link.textContent='Copied!'
            button_link.style.backgroundColor='var(--Dark_Violet)'
            button_link.disabled =true
            navigator.clipboard.writeText(element.atual);

            setTimeout(()=>{
              button_link.textContent='Copy'
              button_link.disabled =false
              button_link.style.backgroundColor='var(--Cyan)'
            },3000)
          }

          let divs = document.createElement('div')
          divs.classList.add('card_links')

          divs.appendChild(p1)
          divs.appendChild(hrs)
          divs.appendChild(div_container)
          cards.appendChild(divs)

        });

        mostrarMensagem('var(--Cyan)','Link add!','ok')
        console.log(listaLinks)
      }).catch(erro =>{
        console.log(erro)
        mostrarMensagem('var(--Red)','Please, add a Link','erro')
      })
    }

    function mostrarMensagem(cor,texto,estado) {
      
       if (timeoutId) {
        clearTimeout(timeoutId);
      }
      input.classList.remove('input-error');

      retorno.textContent=texto
      retorno.style.color =cor
      input.style.boxShadow=`0px 0px 3px 3px ${cor}`

      if (estado === 'erro') {
        document.getElementById('sec_two').classList.add('erro')
      }
      setTimeout(()=>{
        retorno.textContent=''
        retorno.style.color =''
        input.style.boxShadow=``
        document.getElementById('sec_two').classList.remove('erro')
        input.value=''
      },900)
    }
  </script>

</body>
</html>
