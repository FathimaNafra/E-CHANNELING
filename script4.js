document.addEventListener("DOMContentLoaded", function() {
       const form = document.getElementById("appointmentForm");
 
   
        const specializationSelect = document.getElementById("Specialization");
        const doctorSelect = document.getElementById("doctor");
       

        const doctors={
            "Gynaecologist": ["Prof. DARSHANA DE SILVA","Dr. ACHALA ABEYWARDANE","Prof. SISIRA RANARAJA","Dr. M CHAMPIKA GIHAN"],
            "Physician": ["Prof. ARJUNA DE SILVA","Dr. ANURUDDHA ARIYAWANSHA","Prof. CHAMARA DALUGAMA","Dr. SHEHAN SILVA"],
            "Cardiologist": ["Dr. AJANTHA TIKIRI RAJAPAKSHA","Dr. SANJEEWA RAJAPAKSE","Dr. M. RAYNO NAVINAN","Dr. CHANDRIKE PONNAMPERUMA"],
            "Pediatrician": ["Dr. A.D.T.M. SANJEEWA SENAKA TENNEKONE","Dr. RAJEEV SATHANANDARAJA","Dr. R.M. SURANTHA PERERA","Dr (Mrs.) NALIKA MENIKE"],
            "Eye Surgeon": ["Dr. M. NANDAKUMAR ","Dr. SEEMA NANDAKUMAR ","Dr. NALINDA SAMARAKOON","Dr. PRASAD PATHIRANA"],
            "Endocrinologist": ["Dr (Ms.) DIMUTHU T. MUTHUKUDA","Dr. MAULEE ARAMBEWELA","Dr. NIROSHINI YAHAMPATH","Dr. NIRANJALA MEEGODA WIDANEGE"],
            "Neurologist": ["Dr. NIRANJALA MEEGODA WIDANEGE","Dr. DARSHANA SIRISENA","Dr. KISHARA GOONARATNE","Dr. GAMINI PATHIRANA"],
            "Dermatologist": ["Dr. CHANDANA WIJEKOON","Dr. D.M. MUNASINGHE","Dr (Mrs.) LAKMALI PATHIRAJA","Dr (Mrs.) MANEL DISSANAYAKE"]
        };  



        specializationSelect.addEventListener('change', function() {
            const Specialization = specializationSelect.value;
            doctorSelect.innerHTML = '<option value="" disabled selected>Select Doctor</option>';
    
            if (Specialization) {
                const doctorList = doctors[Specialization];
                doctorList.forEach(function(doctor) {
                    const option = document.createElement('option');
                    option.value = doctor;
                    option.textContent = doctor;
                    doctorSelect.appendChild(option);
                });
            }
        });

    form.addEventListener("submit", function(event) {
            const patientName = document.getElementById("patient_name").value;
            const specializationSelect = specializationSelect.value ;
            const selectDoctor =  doctorSelect.value;
            const appointmentDate = document.getElementById("appointment_date").value;
            const appointmentTime = document.getElementById("appointment_time").value;
        


        if (!patientName || !specializationSelect || !selectDoctor || !appointmentDate || !appointmentTime) {
            event.preventDefault();
            alert("Please fill out all fields.");
            return;
        }

        
        form.reset();
         
     });
});

$(document).ready(function() {
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });
    });