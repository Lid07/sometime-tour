$(function () {
    var url = "http://localhost:3000/PHUKETTOUR";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {
            //console.log(obj.Tour,obj.id,obj.name,obj.lastname,obj.tell,obj.nationality); 

            var html = ' <tr>' +
                '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tour-input-'+obj.id+'" value="' + obj.Tour + '"></div><p class="edit-value-' + obj.id + '">' + obj.Tour + '</p></td>' +
                '<td>' + obj.id + '</td>' +
                '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-name-input-'+obj.id+'" value="' + obj.name + '"></div><p class="edit-value-' + obj.id + '">' + obj.name + '</p></td>' +
                '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-lastnames-input-'+obj.id+'" value="' + obj.lastnames + '"></div><p class="edit-value-' + obj.id + '">' + obj.lastnames + '</p></td>' +
                '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tell-input-'+obj.id+'" value="' + obj.tell + '"></div><p class="edit-value-' + obj.id + '">' + obj.tell + '</p></td>' +
                '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-nationality-input-'+obj.id+'" value="' + obj.nationality + '"></div><p class="edit-value-' + obj.id + '">' + obj.nationality + '</p></td>' +                
                // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
                '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
                //
                '<td><button type="button" id="' + obj.id + '" name="button" class="btn-update btn-update-' + obj.id + '">Update</button>' +
                '<button type="button" id="' + obj.id + '" name="button" class="btn-save btn-save-' + obj.id + '" hidden>Save</button></div></td>' +
                '</tr';
            $('#Phukettour').append(html);
//------------update-------------
            //change to input form update clicked
            $('.btn-update').click(function () {
                var id = this.id;
                $('.edit-value-' + id).hide();
                $('.edit-form-' + id).show();
                $('.btn-update-' + id).hide();
                $('.btn-save-' + id).show();
            });
            //save change save clicked
            $('.btn-save').click(function(){
                var id = this.id;
                $('.edit-value-' + id).show();
                $('.edit-form-' + id).hide();
                $('.btn-update-' + id).show();
                $('.btn-save-' + id).hide();
                //get value from form
                var Firstname = $('#edit-name-input-'+id).val();
                var Lastnames = $('#edit-lastnames-input-'+id).val();
                var tell = $('#edit-tell-input-'+id).val();
                var Tour = $('#edit-tour-input-'+id).val();
                var nationality = $('#edit-nationality-input-'+id).val();                
                console.log("svae-----------------");         
                console.log(Tour);
                console.log(id);
                console.log(Firstname);
                console.log(Lastnames);
                console.log(tell);
                console.log(nationality);       
                console.log("/svae-----------------");         
                //update to json
                console.log("-------------url--------------- : "+url);
                console.log(id);
                $.ajax({
                    type: 'PUT',
                    contentType: 'application/json',
                    url: 'http://localhost:3000/PHUKETTOUR/' + id,
                    dataType: "json",
                    data: JSON.stringify({
                        "Tour": Tour,
                        "id": id,
                        "name": Firstname,
                        "lastnames": Lastnames,
                        "tell": tell,
                        "nationality": nationality
                        }),
                    success: function(data, textStatus, jqXHR){
                        console.log('Data updated successfully');
                        location.reload(true);
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        console.log('update error: ' + textStatus);
                        location.reload(true);
                    }
                });
            })
            //------------/update-------------

            $('.btn-delete').click(function () {
                var id = this.id;
                console.log("id: " + id);
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/PHUKETTOUR/" + id,
                    success: function (data, textStatus, jqXHR) {
                        console.log('Wine deleted successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('deleteWine error');
                        location.reload(true);
                    }
                });
            });
        });
    });

    var url = "http://localhost:3000/PHANGNGATOUR";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {
            //console.log(obj.Tour,obj.id,obj.name,obj.lastname,obj.tell,obj.nationality); 

            // var html = ' <tr>' +
            //     '<td>' + obj.Tour + '</td>' +
            //     '<td>' + obj.id + '</td>' +
            //     '<td>' + obj.name + '</td>' +
            //     '<td>' + obj.lastnames + '</td>' +
            //     '<td>' + obj.tell + '</td>' +
            //     '<td>' + obj.nationality + '</td>' +
            //     // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
            //     '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
            //     '</tr';
            // $('#Phangngatour').append(html);


            var html = ' <tr>' +
            '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tour-input-'+obj.id+'" value="' + obj.Tour + '"></div><p class="edit-value-' + obj.id + '">' + obj.Tour + '</p></td>' +
            '<td>' + obj.id + '</td>' +
            '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-name-input-'+obj.id+'" value="' + obj.name + '"></div><p class="edit-value-' + obj.id + '">' + obj.name + '</p></td>' +
            '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-lastnames-input-'+obj.id+'" value="' + obj.lastnames + '"></div><p class="edit-value-' + obj.id + '">' + obj.lastnames + '</p></td>' +
            '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tell-input-'+obj.id+'" value="' + obj.tell + '"></div><p class="edit-value-' + obj.id + '">' + obj.tell + '</p></td>' +
            '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-nationality-input-'+obj.id+'" value="' + obj.nationality + '"></div><p class="edit-value-' + obj.id + '">' + obj.nationality + '</p></td>' +                
            // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
            '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
            //
            '<td><button type="button" id="' + obj.id + '" name="button" class="btn-update btn-update-' + obj.id + '">Update</button>' +
            '<button type="button" id="' + obj.id + '" name="button" class="btn-save btn-save-' + obj.id + '" hidden>Save</button></div></td>' +
            '</tr';
        $('#Phangngatour').append(html);
//------------update-------------
        //change to input form update clicked
        $('.btn-update').click(function () {
            var id = this.id;
            $('.edit-value-' + id).hide();
            $('.edit-form-' + id).show();
            $('.btn-update-' + id).hide();
            $('.btn-save-' + id).show();
        });
        //save change save clicked
        $('.btn-save').click(function(){
            var id = this.id;
            $('.edit-value-' + id).show();
            $('.edit-form-' + id).hide();
            $('.btn-update-' + id).show();
            $('.btn-save-' + id).hide();
            //get value from form
            var Firstname = $('#edit-name-input-'+id).val();
            var Lastnames = $('#edit-lastnames-input-'+id).val();
            var tell = $('#edit-tell-input-'+id).val();
            var Tour = $('#edit-tour-input-'+id).val();
            var nationality = $('#edit-nationality-input-'+id).val();                
            console.log("svae-----------------");         
            console.log(Tour);
            console.log(id);
            console.log(Firstname);
            console.log(Lastnames);
            console.log(tell);
            console.log(nationality);       
            console.log("/svae-----------------");         
            //update to json
            console.log("-------------url--------------- : "+url);
            console.log(id);
            $.ajax({
                type: 'PUT',
                contentType: 'application/json',
                url: 'http://localhost:3000/PHANGNGATOUR/' + id,
                dataType: "json",
                data: JSON.stringify({
                    "Tour": Tour,
                    "id": id,
                    "name": Firstname,
                    "lastnames": Lastnames,
                    "tell": tell,
                    "nationality": nationality
                    }),
                success: function(data, textStatus, jqXHR){
                    console.log('Data updated successfully');
                    location.reload(true);
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log('update error: ' + textStatus);
                    location.reload(true);
                }
            });
        })
        //------------/update-------------

            $('.btn-delete').click(function () {
                var id = this.id;
                console.log("id: " + id);    
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/PHANGNGATOUR/" + id,
                    success: function (data, textStatus, jqXHR) {
                        console.log('Wine deleted successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('deleteWine error');
                        location.reload(true);
                    }
                });
            });
        });
    });
    // var url = "http://localhost:3000/RANONGTOUR";

    // $.get(url, function (data) {

    //     $.each(data, function (i, obj) {
    //         //console.log(obj.Tour,obj.id,obj.name,obj.lastname,obj.tell,obj.nationality); 

    //         var html = ' <tr>' +
    //             '<td>' + obj.Tour + '</td>' +
    //             '<td>' + obj.id + '</td>' +
    //             '<td>' + obj.name + '</td>' +
    //             '<td>' + obj.lastnames + '</td>' +
    //             '<td>' + obj.tell + '</td>' +
    //             '<td>' + obj.nationality + '</td>' +
    //             // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
    //             '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
    //             '</tr';
    //         $('#Ranongtour').append(html);

    var url = "http://localhost:3000/RANONGTOUR";
    
        $.get(url, function (data) {
    
            $.each(data, function (i, obj) {
                //console.log(obj.Tour,obj.id,obj.name,obj.lastname,obj.tell,obj.nationality); 
    
                var html = ' <tr>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tour-input-'+obj.id+'" value="' + obj.Tour + '"></div><p class="edit-value-' + obj.id + '">' + obj.Tour + '</p></td>' +
                    '<td>' + obj.id + '</td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-name-input-'+obj.id+'" value="' + obj.name + '"></div><p class="edit-value-' + obj.id + '">' + obj.name + '</p></td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-lastnames-input-'+obj.id+'" value="' + obj.lastnames + '"></div><p class="edit-value-' + obj.id + '">' + obj.lastnames + '</p></td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tell-input-'+obj.id+'" value="' + obj.tell + '"></div><p class="edit-value-' + obj.id + '">' + obj.tell + '</p></td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-nationality-input-'+obj.id+'" value="' + obj.nationality + '"></div><p class="edit-value-' + obj.id + '">' + obj.nationality + '</p></td>' +                
                    // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
                    '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
                    //
                    '<td><button type="button" id="' + obj.id + '" name="button" class="btn-update btn-update-' + obj.id + '">Update</button>' +
                    '<button type="button" id="' + obj.id + '" name="button" class="btn-save btn-save-' + obj.id + '" hidden>Save</button></div></td>' +
                    '</tr';
                $('#Ranongtour').append(html);
    //------------update-------------
                //change to input form update clicked
                $('.btn-update').click(function () {
                    var id = this.id;
                    $('.edit-value-' + id).hide();
                    $('.edit-form-' + id).show();
                    $('.btn-update-' + id).hide();
                    $('.btn-save-' + id).show();
                });
                //save change save clicked
                $('.btn-save').click(function(){
                    var id = this.id;
                    $('.edit-value-' + id).show();
                    $('.edit-form-' + id).hide();
                    $('.btn-update-' + id).show();
                    $('.btn-save-' + id).hide();
                    //get value from form
                    var Firstname = $('#edit-name-input-'+id).val();
                    var Lastnames = $('#edit-lastnames-input-'+id).val();
                    var tell = $('#edit-tell-input-'+id).val();
                    var Tour = $('#edit-tour-input-'+id).val();
                    var nationality = $('#edit-nationality-input-'+id).val();                
                    console.log("svae-----------------");         
                    console.log(Tour);
                    console.log(id);
                    console.log(Firstname);
                    console.log(Lastnames);
                    console.log(tell);
                    console.log(nationality);       
                    console.log("/svae-----------------");         
                    //update to json
                    console.log("-------------url--------------- : "+url);
                    console.log(id);
                    $.ajax({
                        type: 'PUT',
                        contentType: 'application/json',
                        url: 'http://localhost:3000/RANONGTOUR/' + id,
                        dataType: "json",
                        data: JSON.stringify({
                            "Tour": Tour,
                            "id": id,
                            "name": Firstname,
                            "lastnames": Lastnames,
                            "tell": tell,
                            "nationality": nationality
                            }),
                        success: function(data, textStatus, jqXHR){
                            console.log('Data updated successfully');
                            location.reload(true);
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            console.log('update error: ' + textStatus);
                            location.reload(true);
                        }
                    });
                })
                //------------/update-------------
            

            $('.btn-delete').click(function () {
                var id = this.id;
                console.log("id: " + id);
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/RANONGTOUR/" + id,
                    success: function (data, textStatus, jqXHR) {
                        console.log('Wine deleted successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('deleteWine error');
                        location.reload(true);
                    }
                });
            });
        });
    });
    // var url = "http://localhost:3000/TRANGTOUR";

    // $.get(url, function (data) {

    //     $.each(data, function (i, obj) {
    //         //console.log(obj.Tour,obj.id,obj.name,obj.lastname,obj.tell,obj.nationality); 

    //         var html = ' <tr>' +
    //             '<td>' + obj.Tour + '</td>' +
    //             '<td>' + obj.id + '</td>' +
    //             '<td>' + obj.name + '</td>' +
    //             '<td>' + obj.lastnames + '</td>' +
    //             '<td>' + obj.tell + '</td>' +
    //             '<td>' + obj.nationality + '</td>' +
    //             // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
    //             '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
    //             '</tr';
    //         $('#Trangtour').append(html);

    var url = "http://localhost:3000/TRANGTOUR";
    
        $.get(url, function (data) {
    
            $.each(data, function (i, obj) {
                //console.log(obj.Tour,obj.id,obj.name,obj.lastname,obj.tell,obj.nationality); 
    
                var html = ' <tr>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tour-input-'+obj.id+'" value="' + obj.Tour + '"></div><p class="edit-value-' + obj.id + '">' + obj.Tour + '</p></td>' +
                    '<td>' + obj.id + '</td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-name-input-'+obj.id+'" value="' + obj.name + '"></div><p class="edit-value-' + obj.id + '">' + obj.name + '</p></td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-lastnames-input-'+obj.id+'" value="' + obj.lastnames + '"></div><p class="edit-value-' + obj.id + '">' + obj.lastnames + '</p></td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-tell-input-'+obj.id+'" value="' + obj.tell + '"></div><p class="edit-value-' + obj.id + '">' + obj.tell + '</p></td>' +
                    '<td><div class="edit-form-' + obj.id + '" hidden><input type="text" class="form-control" id="edit-nationality-input-'+obj.id+'" value="' + obj.nationality + '"></div><p class="edit-value-' + obj.id + '">' + obj.nationality + '</p></td>' +                
                    // '<td><button type="button" id="delete'+obj.id+'" name="button" class="btn-delete" onclick="deleteF()">Delete</button></td>' +
                    '<td><button type="button" id="' + obj.id + '" name="button" class="btn-delete">Delete</button></td>' +
                    //
                    '<td><button type="button" id="' + obj.id + '" name="button" class="btn-update btn-update-' + obj.id + '">Update</button>' +
                    '<button type="button" id="' + obj.id + '" name="button" class="btn-save btn-save-' + obj.id + '" hidden>Save</button></div></td>' +
                    '</tr';
                $('#Trangtour').append(html);
    //------------update-------------
                //change to input form update clicked
                $('.btn-update').click(function () {
                    var id = this.id;
                    $('.edit-value-' + id).hide();
                    $('.edit-form-' + id).show();
                    $('.btn-update-' + id).hide();
                    $('.btn-save-' + id).show();
                });
                //save change save clicked
                $('.btn-save').click(function(){
                    var id = this.id;
                    $('.edit-value-' + id).show();
                    $('.edit-form-' + id).hide();
                    $('.btn-update-' + id).show();
                    $('.btn-save-' + id).hide();
                    //get value from form
                    var Firstname = $('#edit-name-input-'+id).val();
                    var Lastnames = $('#edit-lastnames-input-'+id).val();
                    var tell = $('#edit-tell-input-'+id).val();
                    var Tour = $('#edit-tour-input-'+id).val();
                    var nationality = $('#edit-nationality-input-'+id).val();                
                    console.log("svae-----------------");         
                    console.log(Tour);
                    console.log(id);
                    console.log(Firstname);
                    console.log(Lastnames);
                    console.log(tell);
                    console.log(nationality);       
                    console.log("/svae-----------------");         
                    //update to json
                    console.log("-------------url--------------- : "+url);
                    console.log(id);
                    $.ajax({
                        type: 'PUT',
                        contentType: 'application/json',
                        url: 'http://localhost:3000/TRANGTOUR/' + id,
                        dataType: "json",
                        data: JSON.stringify({
                            "Tour": Tour,
                            "id": id,
                            "name": Firstname,
                            "lastnames": Lastnames,
                            "tell": tell,
                            "nationality": nationality
                            }),
                        success: function(data, textStatus, jqXHR){
                            console.log('Data updated successfully');
                            location.reload(true);
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            console.log('update error: ' + textStatus);
                            location.reload(true);
                        }
                    });
                })
                //------------/update-------------

            $('.btn-delete').click(function () {
                var id = this.id;
                console.log("id: " + id);
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/TRANGTOUR/" + id,
                    success: function (data, textStatus, jqXHR) {
                        console.log('Wine deleted successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('deleteWine error');
                        location.reload(true);
                    }
                });
            });
        });
    });
    $('#signup').click(
        function () {
            // $('#id').val("");
            // $('#Firstname').val("");
            // $('#Lastname').val("");
            // $('#tell').val("");
            // $('#Nationaliy').val("");
            console.log($('#id').val());
            console.log($('#Firstname').val());
            console.log($('#Lastname').val());
            console.log($('#tell').val());
            console.log($('#Nationaliy').val());
            console.log($("#select option:selected").text());
            if ($("#select option:selected").text() === "PHANGNGA TOUR") {
                console.log("chk phangnga");
            } else {
                console.log("err");
            }
            if ($("#select option:selected").text() === "PHUKET TOUR") {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/PHUKETTOUR",
                    dataType: "json",
                    data: JSON.stringify({
                        "Tour": $("#select option:selected").text(),
                        "id": $('#id').val(),
                        "name": $('#Firstname').val(),
                        "lastnames": $('#Lastname').val(),
                        "tell": $('#tell').val(),
                        "nationality": $('#Nationaliy').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert('Wine created successfully');
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('addWine error: ' + textStatus);
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    }
                });
            } else if ($("#select option:selected").text() === "PHANGNGA TOUR  ") {
                console.log("This is phangnga");
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/PHANGNGATOUR",
                    dataType: "json",
                    data: JSON.stringify({
                        "Tour": $("#select option:selected").text(),
                        "id": $('#id').val(),
                        "name": $('#Firstname').val(),
                        "lastnames": $('#Lastname').val(),
                        "tell": $('#tell').val(),
                        "nationality": $('#Nationaliy').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert('Wine created successfully');
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('addWine error: ' + textStatus);
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    }
                });
            } else if ($("#select option:selected").text() === "RANONG TOUR") {
                console.log("This is phangnga");
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/RANONGTOUR",
                    dataType: "json",
                    data: JSON.stringify({
                        "Tour": $("#select option:selected").text(),
                        "id": $('#id').val(),
                        "name": $('#Firstname').val(),
                        "lastnames": $('#Lastname').val(),
                        "tell": $('#tell').val(),
                        "nationality": $('#Nationaliy').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert('Wine created successfully');
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('addWine error: ' + textStatus);
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    }
                });
            } else if ($("#select option:selected").text() === "TRANG TOUR") {
                console.log("This is phangnga");
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/TRANGTOUR",
                    dataType: "json",
                    data: JSON.stringify({
                        "Tour": $("#select option:selected").text(),
                        "id": $('#id').val(),
                        "name": $('#Firstname').val(),
                        "lastnames": $('#Lastname').val(),
                        "tell": $('#tell').val(),
                        "nationality": $('#Nationaliy').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert('Wine created successfully');
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('addWine error: ' + textStatus);
                        $('#id').val("");
                        $('#Firstname').val("");
                        $('#Lastname').val("");
                        $('#tell').val("");
                        $('#Nationaliy').val("");
                    }
                });
            }
        }
    );
});