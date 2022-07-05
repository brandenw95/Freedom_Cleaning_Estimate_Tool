$(document).ready(function() {

  /* Initialization */
  $("div.desc").hide();
  $("#EZ_Family_Addons").hide();
  $("#Regular_Family_Addons").hide();
  $("#EZ_Pet_Addons").hide();
  $("#Regular_Pet_Addons").hide();
  $('#cost').text('$0 - $0');

  /* REGULAR HELPER FUNCTIONS */
  function add_20_percent(cost){
  
    var final_total = parseFloat(cost) + parseFloat(cost * 0.2);
    return final_total 
  }

  function update_display_price(cost){

    var current_price = $('#cost').val();

    if(isNaN(cost)){
      console.log(cost);
      console.log(typeof(cost));
      console.log(parseFloat(cost));

    }
    if(Array.isArray(cost) ){

      var sum_of_array = 0;
      for(let i = 0; i < cost.length; i++){
        sum_of_array += cost[i];
      }
      var sanitized_cost = parseFloat(sum_of_array);
      var cost_low = sanitized_cost;
      var cost_high = add_20_percent(sanitized_cost);
    }
    else{

      var sanitized_cost = parseFloat(cost);
      var cost_low = sanitized_cost;
      var cost_high = add_20_percent(sanitized_cost);
    }

    $('#cost').text("$" + cost_low + " - " + "$" + cost_high);
  }

  /* EVENT FUNCTIONS */
  $("input[name='clean_service']").click(function() {

    // Initial Package select
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
        clean_cost = parseFloat(clean_cost) + parseFloat(addon_price);
        var low = parseFloat(clean_cost);
        update_display_price(low);
        
    });
    // Calculate high and low
    var low = parseFloat(clean_cost);
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

  // Open up the addon drop down menus for "Little bit clean"
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

  // Limit "Little bit clean" options to 3 only
  $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox].lbc:checked').length > 3) {
        $(this).prop('checked', false);
    }
  });

  // Price update for addon checkbox
  $('input[type="checkbox"]').change(function(){
    

  });
});