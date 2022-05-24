$(document).ready(function() {
    $("div.desc").hide();
    $("#EZ_Family_Addons").hide();
    $("#Regular_Family_Addons").hide();
    $("#EZ_Pet_Addons").hide();
    $("#Regular_Pet_Addons").hide();
    $('#cost').text('$0 - $0');
    var counter = 0;
    var addons = [];

    $("input[name='clean_service']").click(function() {
        
        // Hide show the relative addons
        var button_value = $(this).val();
        $("div.desc").slideUp();
        $("p.default_text").hide();
        $("#" + button_value).delay(50).slideDown();
      
        // Update base price of package with Low-High Price
        var clean_cost = button_value.slice(button_value.length - 3);

        // Update header with appropriate Information
        option_header = button_value.split("_");
        option_header = option_header[0];

        if(option_header == 'LittleBitClean'){
          $('#options-header').text("Addons (Please Choose 3)");
        }
        if(option_header == 'ClassicClean'){
          $('#options-header').text("Includes:");
        }
        if(option_header == 'DiamondClean'){
          $('#options-header').text("Includes:");
        }
        if(option_header == 'HelloFreedom'){
          $('#options-header').text("Includes:");
        }
        if(option_header == 'GirlfriendPackage'){
          $('#options-header').text("Includes:");
        }
        if(option_header == 'MoveOutClean'){
          $('#options-header').text("Includes:");
        }
        if(option_header == 'InThePatch'){
          $('#options-header').text("Includes:");
        }
        
        $("select").on('change',function () {

         
          var addon_price = $(this).find(':selected').data('price');
          
           console.log(clean_cost);
           clean_cost = parseFloat(clean_cost) + parseFloat(addon_price);
           console.log(clean_cost);

           var low = parseFloat(clean_cost);
           var high = parseFloat(clean_cost) + parseFloat((clean_cost * 0.2));
           $('#cost').text("$" + low + " - " + "$" + high);
           counter++;
        });
        
        // Calculate high and low
        var low = parseFloat(clean_cost);
        var high = parseFloat(clean_cost) + parseFloat((clean_cost * 0.2));
        //$('#cost').text("$" + low + " - " + "$" + high);
        
        // initial package select 
        $('#cost').text("$" + low);
    });

    // Family addon functionality
    $("#family_package_dropdown").on('change', function(){
      if(this.value == 'EZ Family'){
        $("#EZ_Family_Addons").slideDown();
        $("#Regular_Family_Addons").hide();
      }
      else if(this.value == 'Regular Family'){
        $("#Regular_Family_Addons").slideDown();
        $("#EZ_Family_Addons").hide();

      }
      else{
        $("#EZ_Family_Addons").hide();
        $("#Regular_Family_Addons").hide();
      }
    });

    // Pet addon functionality
    $("#pet_package_dropdown").on('change', function(){
      if(this.value == 'EZ Pet'){
        $("#EZ_Pet_Addons").slideDown();
        $("#Regular_Pet_Addons").hide();
      }
      else if(this.value == 'Regular Pet'){
        $("#Regular_Pet_Addons").slideDown();
        $("#EZ_Pet_Addons").hide();

      }
      else{
        $("#EZ_Pet_Addons").hide();
        $("#Regular_Pet_Addons").hide();
      }
    });

  

  // Open up the addon drop down menus for "Move out clean"
  var expanded = false;
  $(".selectBox1").on('click', function(){
    var checkboxes = document.getElementById("checkboxes-1");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  });

  // open up the addon drop down menus for "Little bit clean"
  $(".selectBox").on('click', function(){
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  });

  //Limit "Little bit clean" options to 3 only
  $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox].lbc:checked').length > 3) {
        $(this).prop('checked', false);
    }
  });

});