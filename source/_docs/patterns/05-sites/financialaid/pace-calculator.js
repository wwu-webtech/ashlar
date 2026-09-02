<script type="text/javascript">
    $(document).ready(function(){
        $(function () {
            $('.trggr').click(function (e) {
                if (useKbd(event) === true) {
                    $(this).toggleClass("switch_img").closest(".divTableRow").next().find('div.moreinfo').slideToggle(300);
                    return false; 
                    e.preventDefault();//prevent page from scrolling to top after click
                }
            });
        });
        
        $(function () {
            $('.trggr2').click(function (e) {
                if (useKbd(event) === true) {
                    $(this).toggleClass("switch_img").closest(".hsmi").find('.moreinfo').slideToggle(300);
                    return false; 
                    e.preventDefault();//prevent page from scrolling to top after click
                }
            });
        });
        
        
        
        //Function to check is click or keyboard used
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
        
        //Polyfill to fix IE not compatible with isInteger
        Number.isInteger = Number.isInteger || function(value) {
            return typeof value === "number" && 
            isFinite(value) && 
            Math.floor(value) === value;	
        };
        
        $("input[name=sum_ac]").keyup(function(){
            var testint = parseFloat($("input[name=sum_ac]").val());
            if (Number.isInteger(testint) == false) {alert ("Decimal values will be rounded down!");}
            var totalac = parseInt($("input[name=sum_ac]").val());//use parseFloat to retain decimals
            $('#totalSum_ac').val(totalac);
            $("input[name=paceCalc]").val(""); //clear pace if change made to entered attempted credits
        });
        
        $("input[name=sum_cc]").keyup(function(){
            var testint = parseFloat($("input[name=sum_cc]").val());
            if (Number.isInteger(testint) == false) {alert ("Decimal values will be rounded down!");}
            var totalcc = parseInt($("input[name=sum_cc]").val());//use parseFloat to retain decimals
            $('#totalSum_cc').val(totalcc);
            $("input[name=paceCalc]").val(""); //clear pace if change made to entered attempted credits
        });
        //$("input[name^=sum_cc]").sum("keyup", "#totalSum_cc");//short form of keyup and assigning sum to #totalSum_cc (net total completed credits)
        
        $("input[name=sum_cc]").keyup(function(){
            var totalAC = parseInt($("input[name=totalSum_ac]").val());//use parseFloat to retain decimals
            var totalCC = parseInt($("input[name=totalSum_cc]").val());//use parseFloat to retain decimals
            //alert (totalCC + " | " + totalAC);
            if (totalCC > totalAC){
                alert ("The number of Completed Credits cannot be greater than the number of Attempted Credits!");
                //alert (totalCC + " > " + totalAC);
                $("input[name=sum_cc]").addClass('error'); 
                $("input[name=totalSum_cc]").val("0");
            }
            //clear pace values if changes are made
            $("input[name=paceCalc]").val(""); 
            $("input[name=backto80]").val("");
        });
        
        $("#idCalculatePace").click(
        function (){
            calculate_pace();
        }
        );
        
        $("#btnBackOnPace").click(
        function (){
            back_on_pace();
            var pacecredits = $("[id=backto80]").val();
            if (pacecredits > 0){
                $(".paceplan").show();
                $(".onpace").hide();
            } else {
                $(".paceplan").hide();
                $(".onpace").show();
            }
        }
        );
        
        $("#btnCreateAPacePlan").click(
        function (){
            //alert("Create Plan Triggered " + $("#btnCreateAPacePlan").val());
            var totalAC = $("input[name=totalSum_ac]").val();
            var totalCC = $("input[name=totalSum_cc]").val();
            var neededc = $("input[name=backto80]").val();
            var current_ec = ''; //not used in this form. send no value to /pace-plan
            var cqecc = ''; //not used in this form. send no value to /pace-plan
            //Prevent submit from enter key on input boxes
            if (neededc == ''){
                return false;
            } else {
                var pacecalc = totalCC/totalAC*100;
                //Remove decimals with no rounding
                pacecalc = Math.floor(pacecalc);
                //alert (totalAC + " | " + totalCC + " | " + pacecalc);
                window.location.href='/pace-plan?ac='+totalAC+'&cc='+totalCC+'&pace='+pacecalc+'&nc='+neededc+'&cenc='+current_ec+'&cexc='+cqecc;
            }
        }
        );
        
        $("#idClearForm").click(
        function (){
            $('#frmCalculatePace').get(0).reset();
            $(".paceplan").hide();
            $(".onpace").hide();
            $("input[name=sum_cc]").removeClass('error');
        }
        );
    }
    );
    function calculate_pace(){
        $("[id=paceCalc]").calc(
        // the equation to use for the calculation
        "(totalCC / totalAC) * 100",
        // define the variables used in the equation, these can be a jQuery object
        {
            totalAC: $("[name=totalSum_ac]"),
            totalCC: $("[name=totalSum_cc]")
            
        },
        
        // define the formatting callback, the results of the calculation are passed to this function
        function (s){
            // return the number as a percent
            if (isNaN(s.toFixed(2))){
                return "0";
            } else {
                //return value as a two decimal number with no rounding
                //return Math.floor(s*100)/100 + "%";
                //No decimals, no rounding
                return Math.floor(s) + "%";
            }
        }
        );
        
        $(".paceplan").hide();
        $(".onpace").hide();
    }
    function back_on_pace(){
        //Check if pace is 67% if yes then return
        var getPaceCalc = parseFloat($("input[name=paceCalc]").val());
        //alert (getPaceCalc);
        if (getPaceCalc == 67){
            $("input[name=backto80]").val("0"); 
            return;
        }
        $("[id=backto80]").calc(
        // The Equation:
        //  calculates the number of credits needed to get to 80%
        //  --Use 4*Attempted Credits and 5*Completed Credits because 4/5=80%
        //	--The equations: "(4*totalAC) - (5*totalCC)"
        // 	---ex. (4*10 Attempted Credits) - (5*5 Completed Credits) = 15 Credits
        // 	----10 AC with 5 CC is a 50% Pace
        //	----If student completes 15 more credits then they have 25 AC and 20 CC, which is 20/25 = 80%
        //  A school with a pace of 67%: change 4 to a 2 and the 5 to a 3, since 2/3=66.6% (just an estimate since not 67%)
        //  --The estiamte simple equation: "(2*totalAC) - (3*totalCC)"
        //  --The exact complex equation: "((.67*totalAC - totalCC))/.33"
        // 	---ac: attempted credits
        // 	---cc: completed credits
        // 	---nc: needed credits to calcualte reach pace
        // 	---(cc+nc)/(ac+nc)=67%
        // 	---cc+nc=0.67*(ac+nc)
        // 	---nc=(0.67*ac)+(0.67*nc)-cc
        // 	---nc-(0.67*nc)=(0.67*ac)-cc
        // 	---0.33*nc=(0.67*ac)-cc
        // 	---nc=((0.67*ac)-cc))/0.33
        
        "((.67*totalAC - totalCC))/.33",
        // define the variables used in the equation
        {
            totalAC: $("[name=totalSum_ac]"),
            totalCC: $("[name=totalSum_cc]")
            //totalAC: 10,
            //totalCC: 5
        },
        function (s){
            // return the value
            if (isNaN(s) || s <=0){
                return "0";
            } else {
                return Math.ceil(s);
            }
        }
        );
    }
</script>