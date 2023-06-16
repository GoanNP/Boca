        mapboxgl.accessToken = 'pk.eyJ1IjoiNDMyMWJydW5vIiwiYSI6ImNsaXhja3I0djA1bHIzc3F4ZGlrazBkdnUifQ.gX0QzNl559D7FEDym-JJjQ';
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-49.11231, -25.21199],
          zoom: 10, 
        });

        var marker = new mapboxgl.Marker()      
        .setLngLat([-49.08306947516512,-25.30312468365246])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Vila dos Animais</h3><img src="vila.jpg" class="pontos"><p>Inaugurado em 2006, o Parque Temático Vila dos Animais é um local projetado para receber escolas, famílias, eventos corporativos, festas infantis e público em geral, a fim de promover um contato com o ambiente de fazenda e animais não-comuns ao espaço urbano.</p>'))
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([-49.223688288657485, -25.268436432259257])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Morro Da Cruz</h3><img src="morro.jpg" class="pontos"><p>Quase 1500 m de altitude e uma vista espetacular. Dá pra chegar com o jipe até o topo. Maior parte do trajeto é deslocamento por asfalto e estrada de chão. Trilha mesmo é só no final, na subida do morro.</p>'))
        .addTo(map);

        var marker = new mapboxgl.Marker()      
        .setLngLat([-49.169650741830864 ,-25.318281588419627, ])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Castello Reale</h3><img src="castello.jpg" class="pontos"><p>O Castello Reale é o local ideal para a realização de casamentos, aniversários, bailes de formatura e eventos corporativos.</p>'))
        .addTo(map);

        var marker = new mapboxgl.Marker()      
        .setLngLat([-49.14479747330742, -25.388141811952828])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Casa do Colono</h3><img src="colono.jpg" class="pontos"><p>São comercializados produtos como: biscoitos, doces, queijos, salames, massas caseiras, deliciosas geleias, chocolates, sucos, vinhos, chimarrão, entre outros sabores da serra gaúcha.</p>'))
        .addTo(map);

        var marker = new mapboxgl.Marker()      
        .setLngLat([-49.228218197318284, -25.23067988899527])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Gruta do Bacaetava</h3><img src="gruta.jpg" class="pontos"><p>A gruta foi formada pela ação do Rio Bacaetava, que ainda corre pelo seu interior no sentido leste-oeste, ao longo de 600 milhões de anos.[2] Foi uma das primeiras cavernas a serem mapeadas no Paraná.</p>'))
        .addTo(map);

      
