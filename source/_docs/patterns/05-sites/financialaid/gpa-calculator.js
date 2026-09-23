$(document).ready(function(){
    
    //Add Quarter button
    $('#add_more').click(function() {
        //Count the number of existing textboxes with name starting with qrtr
        var current_count = $('input[name^=qrtr]').length;
        console.log("quarter count: " + current_count);
        
        var next_count = current_count + 1;
        console.log("next quarter count: " + next_count);
        
        var extra_quarter = '<tr><td><select name="quarter' + next_count + '" aria-label="Select a quarter"><option value="blank">SELECT</option><option value="fall">Fall</option><option value="winter">Winter</option><option value="spring">Spring</option><option value="summer">Summer</option></select></td><td><select id="grade' + next_count + '" class="term_grade" aria-labelledby="expected average grade for the quarter"><option selected="selected" value="2.30">C+</option><option value="2.70">B-</option><option value="3.00">B</option><option value="3.30">B+</option><option value="3.70">A-</option><option value="4.00">A</option><td><input type="text" class="tb_border term_credits" name="qrtr' + next_count + '_credits" value="" size="3" aria-label="Number of Credits at 100% Completion for this quarter"></td><td><input type="text" name="quality_points' + next_count + '" value="" size="3" class="read_only" readonly="readonly" aria-label="Quality Points"></td></tr>';
        $('#term_list').append(extra_quarter);
    });
    
    //These only work for initial four rows of Selects and Input boxes, but not for any additional rows added from Add Quarter button
    //$('.term_grade').on('change', newCredits);
    //$('.term_credits').on('keyup', newCredits);
    
    $("#term_list").on('change', '.term_grade', newCredits);
    $("#term_list").on('keyup', '.term_credits', newCredits);
    
    function newCredits() {
        //Test that GPA is a Float
        var testint = parseFloat($("input[name=gpa_current]").val());
        if ($.isNumeric(testint) == false) {
            var wnumber = $("input[name=wnumber]").val();
            var student_name = $("input[name=student_name]").val();
            alert ("Enter your current GPA.");
            $('#frmCalculateGPA').get(0).reset();
            $("input[name=gpa_current]").addClass('error');
            $("input[name=wnumber]").val(wnumber);
            $("input[name=student_name]").val(student_name);
        }
        //Test that GPA Hours is an integer
        var testint2 = parseFloat($("input[name=gpa_hours_current]").val());
        if (Number.isInteger(testint2) == false) {
            var wnumber = $("input[name=wnumber]").val();
            var student_name = $("input[name=student_name]").val();
            alert ("Enter your current GPA hours.");
            $('#frmCalculateGPA').get(0).reset();
            $("input[name=gpa_hours_current]").addClass('error');
            $("input[name=wnumber]").val(wnumber);
            $("input[name=student_name]").val(student_name);
        }
        
        var gpac = parseFloat($("input[name=gpa_current]").val());
        var gpahc = parseFloat($("input[name=gpa_hours_current]").val());
        console.log("Starting GPA GPAH: " + gpac + " " + gpahc);
        var credits=0; //Tally all credits
        var qpts = 0; //Store value returned from function call calculate_new_gpa()
        var total_qpts=0; //Tally quality points
        
        $(".term_credits").each(function(i_n){
            //var credit=parseFloat($(this).val());
            //increase i_n by one to match result box name numbers (start with 1 not 0) in html
            //i_n starts with 0
            i=i_n+1;
            var credit=parseFloat($("input[name=qrtr" + i +"_credits]").val());
            
            var grade_value=parseFloat($("#grade" + i).val());
            var grade=grade_value;
            console.log("GradeN: " + grade_value + " " + grade);
            
            //check for last quarter credit doesn't have a number set credit to 0 to trigger quality points recalculation
            if (isNaN(credit)){ credit = 0; }
            if (isNaN(grade_value)){ grade = 0; }
            
            if (!isNaN(credit)){
                credits += credit;
                //increase i_n by one to match result box name numbers (start with 1 not 0) in html
                //i_n starts with 0
                i_n++;
                
                //Call calculate_new_gpa function and populate quality points feild
                qpts = calculate_new_gpa(gpahc, gpac, credit, grade);
                var truncatedqpts = parseFloat(qpts.toFixed(2));
                $("input[name=quality_points" + i_n + "]").val(truncatedqpts);
                total_qpts += qpts;
                console.log("QPTS: " + qpts + " " + truncatedqpts + " | " + total_qpts);
            }
            //Clear quality points box if deleting new credits from a new credits input box
            var test_term_credits_box=parseFloat($(this).val());
            var i_test=0;
            if(isNaN(test_term_credits_box)){
                i_test=i_n+1;//increase by one to match form field number
                $("input[name=quality_points" + i_test + "]").val('');
            }
        });
        //Populate Total Boxes
        $("input[name=completion_credits]").val(credits);
        var truncatedtotalqpts = parseFloat(total_qpts.toFixed(2));
        $("input[name=completion_quality_points]").val(truncatedtotalqpts);
        
        //Populate Cumulative Boxes
        var cumu_gpa_credit_hours = gpahc+credits;
        $("input[name=cumu_gpah]").val(cumu_gpa_credit_hours);
        var start_quality_points = gpac*gpahc;
        var qqp = parseFloat($("input[name=completion_quality_points]").val());
        var cumu_gpa = ((start_quality_points+qqp)/cumu_gpa_credit_hours);
        var truncatedcumugpa = parseFloat(cumu_gpa.toFixed(2));
        $("input[name=cumu_gpa]").val(truncatedcumugpa);
    }
    
    //Start Over button
    $("#idClearForm").click(
        function (){
            var wnumber = $("input[name=wnumber]").val();
            var student_name = $("input[name=student_name]").val();
            //Start Over: clear form fields
            $('#frmCalculateGPA').get(0).reset();
            //populate wnumber and name
            $("input[name=wnumber]").val(wnumber);
            $("input[name=student_name]").val(student_name);
        }
    );
    
    //Print button
    $("#idPrintPlan").click(
        function (){
            $('#slidingDiv').hide();
            window.print();
            return false; 
        }
    );
    
    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    //Commented function only works with the mouse; the other function allows for keyboard control
    //$(function () {
    //	$('.trggr').click(function (e) {
    //		$(this).closest("p").next().find('.moreinfo').slideToggle(300);
    //		return false; 
    //		e.preventDefault();//prevent page from scrolling to top after click
    //	});
    //});
    
    $(function () {
        $('.trggr').on('click keypress', function(event) {
            if (useKbd(event) === true) {
                //switch bullet using two images
                $(this).toggleClass("switch_img").next().slideToggle("slow");
                event.preventDefault(); //stop page scrolling when spacebar used to expand content
            }
        });
    });	
});

function calculate_new_gpa(gpahc,gpac,entered,grade){
    //gpahc - gpa_hours_current from GPA section
    //gpac - gpa_current from GPA section
    //entered - credits entered into the credit input boxe in the GPA Plan section
    //total - sum of entered credits in the input boxes in the GPA Plan Credits section
    var enterednc = entered;
    var grade=grade;
    console.log("function CNG - gpahc: " + gpahc + " gpac: " + gpac + " entered nc: " + enterednc + " grade: " + grade);
    return ((enterednc)*grade);
}

function decimal_trunc(value){
    return (Math.floor(value*100)/100);
}

function useKbd (event){
    if(event.type === 'click'){
        return true;
    }
    else if(event.type === 'keypress'){
        var code = event.charCode || event.keyCode;
        // if Space or Enter key is pressed
        if((code === 32)|| (code === 13)){
            return true;
        }
    }
    else {
        return false;
    }
}
