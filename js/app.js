 

// 1. Oculte / mostre (hide/show) o texto dentro do elemento #helpText span quando o mouse do usuário passar sobre o texto "Como eles são classificados?" (Dica: use o método toggle () jQuery)

$('#helpText').on('mouseover', function(){
  $('#helpText span').toggle();
});

// 2. Anexar um novo restaurante à lista de restaurantes quando o usuário inserir um valor na entrada #newRestaurant e clicar no botão #addNew
$('#addNew').on('click', function(){
  const newRestaurant = $('#newRestaurantInput').val();
  $('ul').append(newRestaurant);
 });


   // BÔNUS: antes de acrescentar o novo restaurante à lista, use a concatentação de strings para garantir que o nome do novo restaurante esteja entre as tags de abertura e fechamento <li>.

// 3. Adicione a classe "strike" ao nome do restaurante sempre que clicar duas vezes. Use a delegação de eventos no elemento ul para ouvir um evento click nos itens da lista ul
$('ul').on('dblclick', 'li', function(event){
  $(event.target).addClass('strike');
});

// BÔNUS: Refatore o desafio 3 usando a palavra-chave "this".
// BÔNUS: Procure um método jQuery que permitirá que você ative e desative a classe .strike. 