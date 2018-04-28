$(document).ready(()=>{
    let array = [ {
        "picture": "http://placehold.it/32x32",
        "name": "Horne Boyd",
        "phone": "+1 (966) 582-3123",
        "address": "487 Batchelder Street, Clarence, Vermont, 7834"
      },
      {
        "picture": "http://placehold.it/32x32",
        "name": "Lauri Mathews",
        "phone": "+1 (974) 461-2269",
        "address": "323 Sharon Street, Cedarville, North Carolina, 6173"
      },
      {
        "picture": "http://placehold.it/32x32",
        "name": "Auro Mathews",
        "phone": "+1 (974) 461-2269",
        "address": "323 Sharon Street, Cedarville, North Carolina, 6173"
      }];

      array.map((user)=>{
        $('ul')
        .append(`<li>
        <img src="${user.picture || "http://placehold.it/32x32"}"/>
        ${user.name}
        ${user.phone}
        ${user.address}
        <button class="edit">Edit</button><button class="delete">Delete</button>
        </li>
        `)
      });

      
      $('.delete').click(function(){
        $(this).closest('li').fadeOut('slow', ()=>{
            $(this).remove();
        })
      })

      $('.edit').click(function(){
        let li = $(this).closest('li');
        let text = $(this).closest('li').text();
        $(this).closest('li').html(`<input id="editInput" value="${text}"/> <button id="save">Save</button>`);
        
        $('#save').click(function(){
          $(this).closest('li').html($('#editInput').val() + '<button class="edit">Edit</button><button class="delete">Delete</button>')
        })
        
      })

      $('form').submit(function(event){
          event.preventDefault();
          var fields = {};
          var array = [];
        $('input').map(function() {
          fields[this.name] = $(this).val()
            $(this).val('');
        });
        array.push(fields);
        array.map(x=>{
          $('ul').append(`<li>
          <img src="${x.picture || "http://placehold.it/32x32"}"/>
          ${x.name}
          ${x.phone}
          ${x.address}
          <button class="edit">Edit</button><button class="delete">Delete</button>
          </li>`)
        })

      $('.delete').click(function(){
        $(this).closest('li').fadeOut('slow', ()=>{
            $(this).remove();
        })
      }) 
      })

});