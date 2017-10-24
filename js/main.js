$(document).ready(function(){
  // Place an order button
  $('button').click(function(){
    var shop = "order.html"
    console.log('You have clicked the shopping button')
    window.open(shop)
  })
  // Cick on the Galvanize Delivers
  $('#topLeft').click(function(){
    window.open("index.html")
    // console.log('You have clicked the home button');

  })
  $('#topRight').click(function(){
    var target = $(event.target).parent()
    console.log(target.attr)

    //  $(".button-collapse").sideNav();

  })
  var menu = {
    burger: {
      name: 'Royale with Cheese',
      price: 8.99,
    },
    pizza_arugula: {
      name: 'Argula Pizza Pie',
      price: 11.99,
    },
    swine:{
      name: 'Smoked Swine',
      price: 14.99,
    },
    iceCream: {
      name: 'Ice Cream Biscut',
      price: 7.99,
    }
  }
  var subtotal = 0
  $("#burger").click(function(event){
    event.preventDefault()
    let price = menu.burger.price
    let name = menu.burger.name
    let qty = 1
    let newTable = '<tr><td>'+ qty +'</td><td>' + name + '</td><td>' + price + '</td></tr>'
    $('#priceTable').append(newTable)
    subtotal += price
    var tax = subtotal * 0.029
    var total = subtotal + tax
    $('#subtotal').text(subtotal.toFixed(2))
    $('#tax').text(tax.toFixed(2))
    $('#total').text(total.toFixed(2))
  })
  $("#iceCream").click(function(event){
    event.preventDefault()
    let price = menu.iceCream.price
    let name = menu.iceCream.name
    let qty = 1
    let newTable = '<tr><td>'+ qty +'</td><td>' + name + '</td><td>' + price + '</td></tr>'
    $('#priceTable').append(newTable)
    subtotal += price
    var tax = subtotal * 0.029
    var total = subtotal + tax
    $('#subtotal').text(subtotal.toFixed(2))
    $('#tax').text(tax.toFixed(2))
    $('#total').text(total.toFixed(2))
  })
  $("#ribs").click(function(event){
    event.preventDefault()
    let price = menu.swine.price
    let name = menu.swine.name
    let qty = 1
    let newTable = '<tr><td>'+ qty +'</td><td>' + name + '</td><td>' + price + '</td></tr>'
    $('#priceTable').append(newTable)
    subtotal += price
    var tax = subtotal * 0.029
    var total = subtotal + tax
    $('#subtotal').text(subtotal.toFixed(2))
    $('#tax').text(tax.toFixed(2))
    $('#total').text(total.toFixed(2))
  })
  $("#pizza").click(function(event){
    event.preventDefault()
    let price = menu.pizza_arugula.price
    let name = menu.pizza_arugula.name
    let qty = 1
    let newTable = '<tr><td>'+ qty +'</td><td>' + name + '</td><td>' + price + '</td></tr>'
    $('#priceTable').append(newTable)
    subtotal += price
    var tax = subtotal * 0.029
    var total = subtotal + tax
    $('#subtotal').text(subtotal.toFixed(2))
    $('#tax').text(tax.toFixed(2))
    $('#total').text(total.toFixed(2))

    $("#submit").click(function(event){
      event.preventDefault()
    })
  })
})
