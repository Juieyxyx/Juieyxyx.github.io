$(document).ready(function(){



     $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint =
       "https://api.airtable.com/v0/appmq0Ec3FFKpn5pM/table1?api_key=keyIvnCG4lnYkaCAs&view=Grid%20view";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Name);
                      table1_items.push(value.fields.Type);
                      table1_items.push(value.fields.Price);
                      table1_items.push(value.fields.Rating);
                      table1_items.push(value.fields.Bookmark);
                      table1_items.push(value.fields.Like);
                        table1_items.push(value.fields.Dislike);
                          table1_items.push(value.fields.Ok);
                            table1_items.push(value.fields.Review);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Type",
                        defaultContent:"" },
                    { title: "Price",
                      defaultContent:"" },
                    { title: "Rating",
                      defaultContent:""},
                    { title: "Bookmark",
                        defaultContent:""},
                    { title: "Like",
                      defaultContent:""},
                      { title: "Dislike",
                        defaultContent:""},
                        { title: "Ok",
                          defaultContent:""},
                          { title: "Review",
                            defaultContent:""},
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appmq0Ec3FFKpn5pM/table2?api_key=keyIvnCG4lnYkaCAs&view=Grid%20view";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Price);
                        table2_items.push(value.fields.Total_Restaurants);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);


                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "Price Range",
                          defaultContent:""},
                        { title: "Total Restaurants",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },

                     axis: {
                           x: {label: 'Price Range'},
                           y: {label: ' Total Restaurants'}
                         },

                     bar: {
                         title: "Best rated Restaurants in each price range:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
