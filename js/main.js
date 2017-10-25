$(document).ready(function(){
  // Place an order button
  // GLOBALS
  var subtotal = 0
  var tax = 0
  var total = 0
  var menu = {
    burger: {
      name: 'Royale with Cheese',
      nick: 'burger',
      price: 8.99,
      qty: 0,
    },
    pizza_arugula: {
      name: 'Arugula Pizza',
      nick: 'pizza',
      price: 11.99,
      qty: 0,
    },
    swine:{
      name: 'Smoked Swine',
      nick: 'ribs',
      price: 14.99,
      qty: 0
    },
    iceCream: {
      name: 'Ice Cream Biscut',
      nick: 'iceCream',
      price: 7.99,
      qty: 0,
    }
  }

  $(".button-collapse").sideNav();

  $('.placeOrder').click(function(){

  })
// Clear all ordered items
  $('#clear').click(function(event){
    event.preventDefault()
    subtotal = 0
    tax = 0
    total = 0
    total = (subtotal + tax).toFixed(2)
    $('#subtotal').text(subtotal)
    $('#tax').text(tax)
    $('#total').text(total)
    $('.orders').remove()
    for (let i in menu){
      menu[i].qty = 0
    }
  })

  $('#submit').click(function(event){
    event.preventDefault()
    if (total === 0){

      return alert('Please add items to the cart')
    }
    console.log($('.validate').html())
    // alert('Please provide contact information in all fields.')
    total = total.toFixed(2)
    alert('You have ordered, your total is: ' + total + ' . Please have cash ready for our delivery crew!')
    var shop = "order.html"

    console.log('You have clicked the shopping button')

  })

  $('.card-action').click(function(event){
    event.preventDefault()
    var closestCard = $(event.target).closest(".card")
    var focusName = closestCard.find("h5")[0].innerHTML
    var price = closestCard.find("p")[0].innerHTML.slice(1)
    console.log('THIS IS THE PRICE,', price)
    var focusItem // use this to target object list

// creates a qty value
    for (var item in menu){
      if (menu[item].name === focusName){
        menu[item].qty += 1
        focusItem = menu[item]
      }
    }
    var cardContent = $('card-content')[0]
    if (focusItem.qty > 1){
      $('.'+focusItem.nick).html(focusItem.qty)
      let price = focusItem.price
      subtotal += price
      tax = subtotal * 0.029
      total = subtotal + tax
      $('#subtotal').text(subtotal.toFixed(2))
      $('#tax').text(tax.toFixed(2))
      $('#total').text(total.toFixed(2))
    }
    else {
      let newTable = "<tr class='orders'><td class='"+focusItem.nick+"'>"+ focusItem.qty +'</td><td>' + focusItem.name + '</td><td>' + focusItem.price + '</td></tr>'
      $('#priceTable').append(newTable)
      let price = focusItem.price
      subtotal += price
      tax = subtotal * 0.029
      total = (subtotal + tax).toFixed(2)
      $('#subtotal').text(subtotal.toFixed(2))
      $('#tax').text(tax.toFixed(2))
      $('#total').text(total)
  }
  })
})
