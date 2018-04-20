
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PracticeServService } from './practice-serv.service';
import { DaterangePickerComponent, DaterangepickerConfig } from 'ng2-daterangepicker';


@Component({
  templateUrl: 'addPractice.component.html'
})
export class AddPracticeComponent implements OnInit {
    constructor(private pracServ : PracticeServService , private daterangepickerOptions: DaterangepickerConfig ){}
    errorMessage;
    nameError;
    emailError;
    phoneError;
    countryError;
    genderError;
    addressError;
    dobError;
    calendarVal = null;
    dobValidityFlag = false;

    invalidFormFlag : boolean = false;

    @ViewChild(DaterangePickerComponent)
    private picker: DaterangePickerComponent;

    public daterange: any = {};
    public options: any = {

        locale: { format: 'DD-MM-YYYY' },
        alwaysShowCalendars: false,
        maxDate : new Date(),
        minDate : new Date(1960 , 0 , 1),
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput : false
    };

    ngOnInit(){
        //this.picker.datePicker.setStartDate(null);
        // console.log('Date:',new Date(2018,4,17));
        this.form.statusChanges.subscribe(control=>{
            if(this.name.valid){
                this.nameError = null;
            } 
            if(this.phone.valid){
                this.phoneError = null;
            }
            if(this.email.valid){
                this.emailError = null;
            }
            if(this.country.valid){
                this.countryError = null;
            }
            if(this.gender.valid){
                this.genderError = null;
            } 
            if(this.address.valid){
                this.addressError = null;
            }
            if(this.dob.valid){
                this.dobError = null;
            } 
            // if(this.phone.touched){
            //     this.phone.patchValue('(___)___-____');
            // }
        });
    }
    form = new FormGroup({
        name : new FormControl('',[Validators.required , Validators.pattern("[a-zA-Z]+")]),
        // speed_limit : new FormControl('',[Validators.required]),
        // time_limit : new FormControl('',[Validators.required]),
        phone : new FormControl('',[Validators.required , Validators.minLength(10)]),
        email : new FormControl('',[Validators.required , Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}")]),
        country : new FormControl('' ,[Validators.required]),
        gender : new FormControl('' ,[Validators.required]),
        rememberLogin : new FormControl('' ,[]),
        address : new FormControl('' ,[Validators.required]),
        dob : new FormControl('' ,[Validators.required])


    });

    // initDatePicker(){
    //     console.log('Inside Init DP');
       
        
    //     this.options= {
     
    //       locale: { format: 'DD-MM-YYYY' },
    //        startDate : new Date(),
    //       endDate : new Date(),
    //        timePicker : true , 
    //       timePicker24Hour : true,
    //       alwaysShowCalendars: false,
    //       maxDate : new Date(),
    //       };
    //     // this.picker.datePicker.setStartDate(new Date()); // add this 2 of 4
    //     //  this.picker.datePicker.setEndDate( new Date());
    //     //this.calenderVal = this.getCurrDate(new Date()) + ' - ' + this.getCurrDate(new Date());
        
    //   }
    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        this.dobValidityFlag = true;
        console.log('SelectedDate',value.start);

        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;

        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
        this.dob.patchValue(this.convertDateFormat(value.start));

    }
    convertDateFormat(datetime){
       
            var date = new Date(datetime);
            
             var month = ("0" + (date.getMonth() + 1)).slice(-2);
             var day = ("0" + date.getDate()).slice(-2);
         
             var hr = ("0" + (date.getHours())).slice(-2);
             var min = ("0" + date.getMinutes()).slice(-2);
             var sec = ("0" + date.getSeconds()).slice(-2);
         
             
             
             var sDate = day + '/'+month+'/'+date.getFullYear();
            //  var sTime = hr + ":" + min + ":" + sec;
            //  var startDateTime = sDate+' '+sTime;
             return sDate;
         
          
    }
    addMember(){

        this.nameError = null;
        this.emailError = null;
        this.phoneError = null;
        this.countryError = null;
        this.genderError = null;
        this.addressError = null;
        this.dobError = null;

        if(this.dob.value!==""){

            var date = this.dob.value;
            var dArr = date.split('/');
            console.log('DArr:',dArr);
            var year = parseInt(dArr[2]);
            var month =  parseInt(dArr[1]);
            var day = parseInt(dArr[0]);

            // console.log('Curr Day:',new Date().getDate());
            // console.log('Curr Month:',new Date().getMonth()+1);
            console.log('Curr Year:',new Date().getFullYear());
            
            if(day<=0 || day>31)
            {
                this.dobError = "Invalid Date";
                this.dob.patchValue('');
                this.dobValidityFlag = false;
                this.dob.setErrors({"required" : true});
            }
            if(month<=0 || month>12){
                this.dobError = "Invalid Date";
                this.dob.patchValue('');
                this.dobValidityFlag = false;
                this.dob.setErrors({"required" : true});
            }
            if(year <1960 || year > new Date().getFullYear()){
                this.dobError = "Invalid Date";
                this.dob.patchValue('');
                this.dobValidityFlag = false;
                this.dob.setErrors({"required" : true});
            }
            if(this.dobValidityFlag){
                var selDate = new Date(year , month-1 , day);
                var currDate = new Date();
                if(selDate > currDate){
                    console.log('Selected Date is Greater than Current Date');
                    this.dobError = "Invalid Date";
                    this.dob.patchValue('');
                    this.dobValidityFlag = false;
                    this.dob.setErrors({"required" : true});
                }
            }

        }
        

        if(this.form.valid){
            this.pracServ.addUser(this.form.value);
        }else{
            
            if(this.name.errors){
                if(this.name.errors.required){
                    this.nameError = "Name is required"
                }
                if(this.name.errors.pattern){
                    this.nameError = "Name must contain alphabets only"
                }
            }
            if(this.phone.errors){
                console.log(this.phone.errors.minlength)
                if(this.phone.errors.required){
                    this.phoneError = "Phone number is required"
                }
                if(this.phone.errors.minlength){
                    this.phoneError = "Phone number must consist of 10 digits"
                }
            }
            if(this.email.errors){
                if(this.email.errors.required){
                    this.emailError= "Email is required"
                }
                if(this.email.errors.pattern){
                    this.emailError = "Invalid Email Address"
                }
            }
            if(this.country.errors){
                if(this.country.errors.required){
                    this.countryError= "Select Country"
                }
            }
            if(this.dob.errors){
                if(this.dob.errors.required){
                    this.dobError= "Date of birth is required";
                }
            }
            if(this.gender.errors){
                if(this.gender.errors.required){
                    this.genderError= "Select Gender"
                }
                
            }
            if(this.address.errors){
                if(this.address.errors.required){
                    this.addressError= "Address is required"
                }
            }
        }
        
    }
    get name(){
        return this.form.get('name');
    }
    get speed_limit(){
        return this.form.get('speed_limit');
    }
    get time_limit(){
        return this.form.get('time_limit');
    }
    get email(){
        return this.form.get('email');
    }
    get phone(){
        return this.form.get('phone');
    }
    get country(){
        return this.form.get('country');
    }
    get gender(){
        return this.form.get('gender');
    }
    get address(){
        return this.form.get('address');
    }
    get dob(){
        return this.form.get('dob');
    }
    get rememberLogin(){
        return this.form.get('rememberLogin');
    }
    

}