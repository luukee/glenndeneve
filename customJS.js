
<script>
    $(window).on('load', function() {
        /* Living Room */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441225355/living-room-1500w_x0uwxw.png"]').remove() 
        /* remove Cafe */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441140279/cafe-1500w_yarlst.png"]').remove() 
        /* remove Sitting Area */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441140169/sitting-area-1500w_y2aigd.png"]').remove()
        /* remove Nursery */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441053683/nursery-1500w_gv7orm.png"]').remove() 
        /* remove Bedroom */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441139687/bedroom-1500w_wgmcaq.png"]').remove() 
        /* Conference Room */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441053244/conf-room-1500w_yvgtgh.png"]').remove() 
        /* Lobby */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441202430/lobby-1500w_awfvyf.png"]').remove() 
        /* Restaurant */
        $('select.room-image-option option[value="//res.cloudinary.com/decosites/image/upload/v1441140699/restaurant-1500w_ryhsl8.png"]').remove() 


        // living room first
        $('select.room-image-option').append('<option value="https://i.ibb.co/9qkLCxN/living-Room3-0-1.png">Living Room</option>');

        $('select.room-image-option').append('<option value="https://i.ibb.co/PMBTBkF/confrence-room-3-0.png">Dining Area</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/9HgFQxc/bedroom-2-1.png">Bedroom</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/C1xZy5n/lounge3-0.png">Lounge</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/b32xhFD/sitting-Area3-0.png">Sitting Area</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/T1DFqVJ/nursery3-0.png">Nursery</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/fFJGqsh/lobby3-0.png">Lobby</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/F5L6q88/resturant3-0.png">Restaurant</option>');
        // dining area 2
        $('select.room-image-option').append('<option value="https://i.ibb.co/1KsG97H/dinner-area-2-0.png">Dining Area 2</option>');
        $('select.room-image-option').append('<option value="https://i.ibb.co/6r5VFJr/cafe3-0.png">Cafe</option>');
        // Conference room
        $('select.room-image-option').append('<option value="https://i.ibb.co/xYT2QV6/conference-Room3-0.png">Conference Room</option>');

    }); 

    
</script>
