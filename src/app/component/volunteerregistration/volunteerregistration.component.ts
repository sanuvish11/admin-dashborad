import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-volunteerregistration',
  templateUrl: './volunteerregistration.component.html',
  styleUrls: ['./volunteerregistration.component.css']
})
export class VolunteerregistrationComponent implements OnInit {
  isvolunteer = true;
  @Output() thisvolunteer = new EventEmitter();
  registerForm: any;
  userTimezone: any;

  toggleclosebtn() {
    this.thisvolunteer.emit(false);
  }
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  genderselect = "pelese select";
  check: any;
  check1: any;
  list: any
  date: any
  year: any
  selectedFeatures: any = [];
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.authService.getcountry(this.form).subscribe(
      data => {
        console.log(this.form);
        console.log(data)
        this.list = data

        // console.log(data.schedule_time)
      },
      err => {

      });
  }



  selectedCounty: any;
  country_id: any;
  stateList: any;
  citylist: any;
  state_id: any;
  password1: any
  password2: any;



  seletcountry(id: any) {
    //  let singleChatData = this.UserRoomList.find((x: { id: any; }) => x.id === id)
    console.log(id)
    this.form.country_id = id;
    this.authService.getstate(this.form).subscribe(
      data => {
        this.stateList = data
        console.log(data);
        console.log(this.stateList);
      },
      err => {

      });
  }

  selectstate(id: any) {
    //  let singleChatData = this.UserRoomList.find((x: { id: any; }) => x.id === id)
    console.log(id)
    this.form.state_id = id;
    this.authService.getcity(this.form).subscribe(
      data => {
        this.citylist = data
        console.log(data);
        console.log(this.citylist);
      },
      err => {

      });
  }



  // confirmPassword() {
  //   this.password1 = this.form.password.value;
  //   this.password2 = this.form.password2.value;
  //   if (this.password1 == '')
  //     alert("Please enter Password");
  //   else if (this.password2 == '')
  //     alert("Please enter confirm password");
  //   else if (this.password1 != this.password2) {
  //     alert("\nPassword did not match: Please try again...")
  //     return false;
  //   }
  //   else {
  //     alert("Password Match: Welcome to GeeksforGeeks!")
  //     return true;
  //   }
    // } 
    // if (this.form.password != this.form.confirmPassword) {
    //   this.form.success = false;
    //   this.form.show = true;
    //   this.form.message = 'Password does not match with confirm password';
    // } else {
    //   this.form.success = true;
    //   this.form.show = false;
    //   this.form.message = '';
    // }
 // }


  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  public currentPage = 0;
  public changePage(index: number): void {
    this.currentPage += index;
  }
  checkbox(e: any) {
    this.check = this.check;
    this.check = e

  }
  checkbox1(e1: any) {
    this.check1 = e1
    this.check1 = this.check1;

  }

  years: any = [
    {
      "year": 1920
    },
    {
      "year": 1921
    },
    {
      "year": 1922
    },
    {
      "year": 1923
    },
    {
      "year": 1924
    },
    {
      "year": 1925
    },
    {
      "year": 1926
    },
    {
      "year": 1927
    },
    {
      "year": 1928
    },
    {
      "year": 1929
    },
    {
      "year": 1930
    },
    {
      "year": 1931
    },
    {
      "year": 1932
    },
    {
      "year": 1933
    },
    {
      "year": 1934
    },
    {
      "year": 1935
    },
    {
      "year": 1936
    },
    {
      "year": 1937
    },
    {
      "year": 1938
    },
    {
      "year": 1939
    },
    {
      "year": 1940
    },
    {
      "year": 1941
    },
    {
      "year": 1942
    },
    {
      "year": 1943
    },
    {
      "year": 1944
    },
    {
      "year": 1945
    },
    {
      "year": 1946
    },
    {
      "year": 1947
    },
    {
      "year": 1948
    },
    {
      "year": 1949
    },
    {
      "year": 1950
    },
    {
      "year": 1951
    },
    {
      "year": 1952
    },
    {
      "year": 1953
    },
    {
      "year": 1954
    },
    {
      "year": 1955
    },
    {
      "year": 1956
    },
    {
      "year": 1957
    },
    {
      "year": 1958
    },
    {
      "year": 1959
    },
    {
      "year": 1960
    },
    {
      "year": 1961
    },
    {
      "year": 1962
    },
    {
      "year": 1963
    },
    {
      "year": 1964
    },
    {
      "year": 1965
    },
    {
      "year": 1966
    },
    {
      "year": 1967
    },
    {
      "year": 1968
    },
    {
      "year": 1969
    },
    {
      "year": 1970
    },
    {
      "year": 1971
    },
    {
      "year": 1972
    },
    {
      "year": 1973
    },
    {
      "year": 1974
    },
    {
      "year": 1975
    },
    {
      "year": 1976
    },
    {
      "year": 1977
    },
    {
      "year": 1978
    },
    {
      "year": 1979
    },
    {
      "year": 1980
    },
    {
      "year": 1981
    },
    {
      "year": 1982
    },
    {
      "year": 1983
    },
    {
      "year": 1984
    },
    {
      "year": 1985
    },
    {
      "year": 1986
    },
    {
      "year": 1987
    },
    {
      "year": 1988
    },
    {
      "year": 1989
    },
    {
      "year": 1990
    },
    {
      "year": 1991
    },
    {
      "year": 1992
    },
    {
      "year": 1993
    },
    {
      "year": 1994
    },
    {
      "year": 1995
    },
    {
      "year": 1996
    },
    {
      "year": 1997
    },
    {
      "year": 1998
    },
    {
      "year": 1999
    },
    {
      "year": 2000
    },
    // {
    //   "year": 2001
    // },
    // {
    //   "year": 2002
    // },
    // {
    //   "year": 2003
    // },
    // {
    //   "year": 2004
    // },
    // {
    //   "year": 2005
    // },
    // {
    //   "year": 2006
    // },
    // {
    //   "year": 2007
    // },
    // {
    //   "year": 2008
    // },
    // {
    //   "year": 2009
    // },
    // {
    //   "year": 2010
    // },
    // {
    //   "year": 2011
    // },
    // {
    //   "year": 2012
    // },
    // {
    //   "year": 2013
    // },
    // {
    //   "year": 2014
    // },
    // {
    //   "year": 2015
    // },
    // {
    //   "year": 2016
    // },
    // {
    //   "year": 2017
    // },
    // {
    //   "year": 2018
    // },
    // {
    //   "year": 2019
    // },
    // {
    //   "year": 2020
    // }
  ];



  Timezone = [
    {
      "value": "Dateline Standard Time",
      "text": "(UTC-12:00) International Date Line West",

    },
    {
      "value": "UTC-11",
      "text": "(UTC-11:00) Coordinated Universal Time-11",
    },
    {
      "value": "Hawaiian Standard Time",

      "text": "(UTC-10:00) Hawaii",

    },
    {
      "value": "Alaskan Standard Time",

      "text": "(UTC-09:00) Alaska",

    },
    {
      "value": "Pacific Standard Time (Mexico)",

      "text": "(UTC-08:00) Baja California",

    },
    {
      "value": "Pacific Daylight Time",

      "text": "(UTC-07:00) Pacific Time (US & Canada)",

    },
    {
      "value": "Pacific Standard Time",

      "text": "(UTC-08:00) Pacific Time (US & Canada)",
    },
    {
      "value": "US Mountain Standard Time",

      "text": "(UTC-07:00) Arizona",

    },
    {
      "value": "Mountain Standard Time (Mexico)",


      "text": "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
      "utc": [
        "America/Chihuahua",
        "America/Mazatlan"
      ]
    },
    {
      "value": "Mountain Standard Time",
      "text": "(UTC-07:00) Mountain Time (US & Canada)",

    },
    {
      "value": "Central America Standard Time",

      "text": "(UTC-06:00) Central America",

    },
    {
      "value": "Central Standard Time",

      "text": "(UTC-06:00) Central Time (US & Canada)",

    },
    {
      "value": "Canada Central Standard Time",

      "text": "(UTC-06:00) Saskatchewan",

    },
    {
      "value": "SA Pacific Standard Time",

      "text": "(UTC-05:00) Bogota, Lima, Quito",

    },
    {
      "value": "Eastern Standard Time",

      "text": "(UTC-05:00) Eastern Time (US & Canada)",
    },
    {
      "value": "US Eastern Standard Time",

      "text": "(UTC-05:00) Indiana (East)",

    },
    {
      "value": "Venezuela Standard Time",

      "text": "(UTC-04:30) Caracas",

    },
    {
      "value": "Paraguay Standard Time",

      "text": "(UTC-04:00) Asuncion",

    },
    {
      "value": "Atlantic Standard Time",
      "text": "(UTC-04:00) Atlantic Time (Canada)",

    },
    {
      "value": "Central Brazilian Standard Time",
      "text": "(UTC-04:00) Cuiaba",
    },
    {
      "value": "SA Western Standard Time",
      "text": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    },
    {
      "value": "Pacific SA Standard Time",

      "text": "(UTC-04:00) Santiago",

    },
    {
      "value": "Newfoundland Standard Time",

      "text": "(UTC-03:30) Newfoundland",

    },
    {
      "value": "E. South America Standard Time",

      "text": "(UTC-03:00) Brasilia",

    },
    {
      "value": "Argentina Standard Time",

      "text": "(UTC-03:00) Buenos Aires",

    },
    {
      "value": "SA Eastern Standard Time",

      "text": "(UTC-03:00) Cayenne, Fortaleza",

    },
    {
      "value": "Greenland Standard Time",

      "text": "(UTC-03:00) Greenland",

    },
    {
      "value": "Montevideo Standard Time",
      "abbr": "MST",
      "offset": -3,
      "isdst": false,
      "text": "(UTC-03:00) Montevideo",
      "utc": [
        "America/Montevideo"
      ]
    },
    {
      "value": "Bahia Standard Time",
      "abbr": "BST",
      "offset": -3,
      "isdst": false,
      "text": "(UTC-03:00) Salvador",
      "utc": [
        "America/Bahia"
      ]
    },
    {
      "value": "UTC-02",
      "abbr": "U",
      "offset": -2,
      "isdst": false,
      "text": "(UTC-02:00) Coordinated Universal Time-02",
      "utc": [
        "America/Noronha",
        "Atlantic/South_Georgia",
        "Etc/GMT+2"
      ]
    },
    {
      "value": "Mid-Atlantic Standard Time",
      "abbr": "MDT",
      "offset": -1,
      "isdst": true,
      "text": "(UTC-02:00) Mid-Atlantic - Old",
      "utc": []
    },
    {
      "value": "Azores Standard Time",
      "abbr": "ADT",
      "offset": 0,
      "isdst": true,
      "text": "(UTC-01:00) Azores",
      "utc": [
        "America/Scoresbysund",
        "Atlantic/Azores"
      ]
    },
    {
      "value": "Cape Verde Standard Time",
      "abbr": "CVST",
      "offset": -1,
      "isdst": false,
      "text": "(UTC-01:00) Cape Verde Is.",
      "utc": [
        "Atlantic/Cape_Verde",
        "Etc/GMT+1"
      ]
    },
    {
      "value": "Morocco Standard Time",
      "abbr": "MDT",
      "offset": 1,
      "isdst": true,
      "text": "(UTC) Casablanca",
      "utc": [
        "Africa/Casablanca",
        "Africa/El_Aaiun"
      ]
    },
    {
      "value": "UTC",
      "abbr": "UTC",
      "offset": 0,
      "isdst": false,
      "text": "(UTC) Coordinated Universal Time",
      "utc": [
        "America/Danmarkshavn",
        "Etc/GMT"
      ]
    },
    {
      "value": "GMT Standard Time",
      "abbr": "GMT",
      "offset": 0,
      "isdst": false,
      "text": "(UTC) Edinburgh, London",
      "utc": [
        "Europe/Isle_of_Man",
        "Europe/Guernsey",
        "Europe/Jersey",
        "Europe/London"
      ]
    },
    {
      "value": "British Summer Time",
      "abbr": "BST",
      "offset": 1,
      "isdst": true,
      "text": "(UTC+01:00) Edinburgh, London",
      "utc": [
        "Europe/Isle_of_Man",
        "Europe/Guernsey",
        "Europe/Jersey",
        "Europe/London"
      ]
    },
    {
      "value": "GMT Standard Time",
      "abbr": "GDT",
      "offset": 1,
      "isdst": true,
      "text": "(UTC) Dublin, Lisbon",
      "utc": [
        "Atlantic/Canary",
        "Atlantic/Faeroe",
        "Atlantic/Madeira",
        "Europe/Dublin",
        "Europe/Lisbon"
      ]
    },
    {
      "value": "Greenwich Standard Time",
      "abbr": "GST",
      "offset": 0,
      "isdst": false,
      "text": "(UTC) Monrovia, Reykjavik",
      "utc": [
        "Africa/Abidjan",
        "Africa/Accra",
        "Africa/Bamako",
        "Africa/Banjul",
        "Africa/Bissau",
        "Africa/Conakry",
        "Africa/Dakar",
        "Africa/Freetown",
        "Africa/Lome",
        "Africa/Monrovia",
        "Africa/Nouakchott",
        "Africa/Ouagadougou",
        "Africa/Sao_Tome",
        "Atlantic/Reykjavik",
        "Atlantic/St_Helena"
      ]
    },
    {
      "value": "W. Europe Standard Time",
      "abbr": "WEDT",
      "offset": 2,
      "isdst": true,
      "text": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
      "utc": [
        "Arctic/Longyearbyen",
        "Europe/Amsterdam",
        "Europe/Andorra",
        "Europe/Berlin",
        "Europe/Busingen",
        "Europe/Gibraltar",
        "Europe/Luxembourg",
        "Europe/Malta",
        "Europe/Monaco",
        "Europe/Oslo",
        "Europe/Rome",
        "Europe/San_Marino",
        "Europe/Stockholm",
        "Europe/Vaduz",
        "Europe/Vatican",
        "Europe/Vienna",
        "Europe/Zurich"
      ]
    },
    {
      "value": "Central Europe Standard Time",
      "abbr": "CEDT",
      "offset": 2,
      "isdst": true,
      "text": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
      "utc": [
        "Europe/Belgrade",
        "Europe/Bratislava",
        "Europe/Budapest",
        "Europe/Ljubljana",
        "Europe/Podgorica",
        "Europe/Prague",
        "Europe/Tirane"
      ]
    },
    {
      "value": "Romance Standard Time",
      "abbr": "RDT",
      "offset": 2,
      "isdst": true,
      "text": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
      "utc": [
        "Africa/Ceuta",
        "Europe/Brussels",
        "Europe/Copenhagen",
        "Europe/Madrid",
        "Europe/Paris"
      ]
    },
    {
      "value": "Central European Standard Time",
      "abbr": "CEDT",
      "offset": 2,
      "isdst": true,
      "text": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
      "utc": [
        "Europe/Sarajevo",
        "Europe/Skopje",
        "Europe/Warsaw",
        "Europe/Zagreb"
      ]
    },
    {
      "value": "W. Central Africa Standard Time",
      "abbr": "WCAST",
      "offset": 1,
      "isdst": false,
      "text": "(UTC+01:00) West Central Africa",
      "utc": [
        "Africa/Algiers",
        "Africa/Bangui",
        "Africa/Brazzaville",
        "Africa/Douala",
        "Africa/Kinshasa",
        "Africa/Lagos",
        "Africa/Libreville",
        "Africa/Luanda",
        "Africa/Malabo",
        "Africa/Ndjamena",
        "Africa/Niamey",
        "Africa/Porto-Novo",
        "Africa/Tunis",
        "Etc/GMT-1"
      ]
    },
    {
      "value": "Namibia Standard Time",
      "abbr": "NST",
      "offset": 1,
      "isdst": false,
      "text": "(UTC+01:00) Windhoek",
      "utc": [
        "Africa/Windhoek"
      ]
    },
    {
      "value": "GTB Standard Time",
      "abbr": "GDT",
      "offset": 3,
      "isdst": true,
      "text": "(UTC+02:00) Athens, Bucharest",
      "utc": [
        "Asia/Nicosia",
        "Europe/Athens",
        "Europe/Bucharest",
        "Europe/Chisinau"
      ]
    },
    {
      "value": "Middle East Standard Time",
      "abbr": "MEDT",
      "offset": 3,
      "isdst": true,
      "text": "(UTC+02:00) Beirut",
      "utc": [
        "Asia/Beirut"
      ]
    },
    {
      "value": "Egypt Standard Time",
      "abbr": "EST",
      "offset": 2,
      "isdst": false,
      "text": "(UTC+02:00) Cairo",
      "utc": [
        "Africa/Cairo"
      ]
    },
    {
      "value": "Syria Standard Time",
      "abbr": "SDT",
      "offset": 3,
      "isdst": true,
      "text": "(UTC+02:00) Damascus",
      "utc": [
        "Asia/Damascus"
      ]
    },
    {
      "value": "E. Europe Standard Time",
      "abbr": "EEDT",
      "offset": 3,
      "isdst": true,
      "text": "(UTC+02:00) E. Europe",
      "utc": [
        "Asia/Nicosia",
        "Europe/Athens",
        "Europe/Bucharest",
        "Europe/Chisinau",
        "Europe/Helsinki",
        "Europe/Kiev",
        "Europe/Mariehamn",
        "Europe/Nicosia",
        "Europe/Riga",
        "Europe/Sofia",
        "Europe/Tallinn",
        "Europe/Uzhgorod",
        "Europe/Vilnius",
        "Europe/Zaporozhye"

      ]
    },
    {
      "value": "South Africa Standard Time",
      "abbr": "SAST",
      "offset": 2,
      "isdst": false,
      "text": "(UTC+02:00) Harare, Pretoria",
      "utc": [
        "Africa/Blantyre",
        "Africa/Bujumbura",
        "Africa/Gaborone",
        "Africa/Harare",
        "Africa/Johannesburg",
        "Africa/Kigali",
        "Africa/Lubumbashi",
        "Africa/Lusaka",
        "Africa/Maputo",
        "Africa/Maseru",
        "Africa/Mbabane",
        "Etc/GMT-2"
      ]
    },
    {
      "value": "FLE Standard Time",
      "abbr": "FDT",
      "offset": 3,
      "isdst": true,
      "text": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
      "utc": [
        "Europe/Helsinki",
        "Europe/Kiev",
        "Europe/Mariehamn",
        "Europe/Riga",
        "Europe/Sofia",
        "Europe/Tallinn",
        "Europe/Uzhgorod",
        "Europe/Vilnius",
        "Europe/Zaporozhye"
      ]
    },
    {
      "value": "Turkey Standard Time",
      "abbr": "TDT",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+03:00) Istanbul",
      "utc": [
        "Europe/Istanbul"
      ]
    },
    {
      "value": "Israel Standard Time",
      "abbr": "JDT",
      "offset": 3,
      "isdst": true,
      "text": "(UTC+02:00) Jerusalem",
      "utc": [
        "Asia/Jerusalem"
      ]
    },
    {
      "value": "Libya Standard Time",
      "abbr": "LST",
      "offset": 2,
      "isdst": false,
      "text": "(UTC+02:00) Tripoli",
      "utc": [
        "Africa/Tripoli"
      ]
    },
    {
      "value": "Jordan Standard Time",
      "abbr": "JST",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+03:00) Amman",
      "utc": [
        "Asia/Amman"
      ]
    },
    {
      "value": "Arabic Standard Time",
      "abbr": "AST",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+03:00) Baghdad",
      "utc": [
        "Asia/Baghdad"
      ]
    },
    {
      "value": "Kaliningrad Standard Time",
      "abbr": "KST",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+02:00) Kaliningrad",
      "utc": [
        "Europe/Kaliningrad"
      ]
    },
    {
      "value": "Arab Standard Time",
      "abbr": "AST",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+03:00) Kuwait, Riyadh",
      "utc": [
        "Asia/Aden",
        "Asia/Bahrain",
        "Asia/Kuwait",
        "Asia/Qatar",
        "Asia/Riyadh"
      ]
    },
    {
      "value": "E. Africa Standard Time",
      "abbr": "EAST",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+03:00) Nairobi",
      "utc": [
        "Africa/Addis_Ababa",
        "Africa/Asmera",
        "Africa/Dar_es_Salaam",
        "Africa/Djibouti",
        "Africa/Juba",
        "Africa/Kampala",
        "Africa/Khartoum",
        "Africa/Mogadishu",
        "Africa/Nairobi",
        "Antarctica/Syowa",
        "Etc/GMT-3",
        "Indian/Antananarivo",
        "Indian/Comoro",
        "Indian/Mayotte"
      ]
    },
    {
      "value": "Moscow Standard Time",
      "abbr": "MSK",
      "offset": 3,
      "isdst": false,
      "text": "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
      "utc": [
        "Europe/Kirov",
        "Europe/Moscow",
        "Europe/Simferopol",
        "Europe/Volgograd",
        "Europe/Minsk"
      ]
    },
    {
      "value": "Samara Time",
      "abbr": "SAMT",
      "offset": 4,
      "isdst": false,
      "text": "(UTC+04:00) Samara, Ulyanovsk, Saratov",
      "utc": [
        "Europe/Astrakhan",
        "Europe/Samara",
        "Europe/Ulyanovsk"
      ]
    },
    {
      "value": "Iran Standard Time",
      "abbr": "IDT",
      "offset": 4.5,
      "isdst": true,
      "text": "(UTC+03:30) Tehran",
      "utc": [
        "Asia/Tehran"
      ]
    },
    {
      "value": "Arabian Standard Time",
      "abbr": "AST",
      "offset": 4,
      "isdst": false,
      "text": "(UTC+04:00) Abu Dhabi, Muscat",
      "utc": [
        "Asia/Dubai",
        "Asia/Muscat",
        "Etc/GMT-4"
      ]
    },
    {
      "value": "Azerbaijan Standard Time",
      "abbr": "ADT",
      "offset": 5,
      "isdst": true,
      "text": "(UTC+04:00) Baku",
      "utc": [
        "Asia/Baku"
      ]
    },
    {
      "value": "Mauritius Standard Time",
      "abbr": "MST",
      "offset": 4,
      "isdst": false,
      "text": "(UTC+04:00) Port Louis",
      "utc": [
        "Indian/Mahe",
        "Indian/Mauritius",
        "Indian/Reunion"
      ]
    },
    {
      "value": "Georgian Standard Time",
      "abbr": "GET",
      "offset": 4,
      "isdst": false,
      "text": "(UTC+04:00) Tbilisi",
      "utc": [
        "Asia/Tbilisi"
      ]
    },
    {
      "value": "Caucasus Standard Time",
      "abbr": "CST",
      "offset": 4,
      "isdst": false,
      "text": "(UTC+04:00) Yerevan",
      "utc": [
        "Asia/Yerevan"
      ]
    },
    {
      "value": "Afghanistan Standard Time",
      "abbr": "AST",
      "offset": 4.5,
      "isdst": false,
      "text": "(UTC+04:30) Kabul",
      "utc": [
        "Asia/Kabul"
      ]
    },
    {
      "value": "West Asia Standard Time",
      "abbr": "WAST",
      "offset": 5,
      "isdst": false,
      "text": "(UTC+05:00) Ashgabat, Tashkent",
      "utc": [
        "Antarctica/Mawson",
        "Asia/Aqtau",
        "Asia/Aqtobe",
        "Asia/Ashgabat",
        "Asia/Dushanbe",
        "Asia/Oral",
        "Asia/Samarkand",
        "Asia/Tashkent",
        "Etc/GMT-5",
        "Indian/Kerguelen",
        "Indian/Maldives"
      ]
    },
    {
      "value": "Yekaterinburg Time",
      "abbr": "YEKT",
      "offset": 5,
      "isdst": false,
      "text": "(UTC+05:00) Yekaterinburg",
      "utc": [
        "Asia/Yekaterinburg"
      ]
    },
    {
      "value": "Pakistan Standard Time",
      "abbr": "PKT",
      "offset": 5,
      "isdst": false,
      "text": "(UTC+05:00) Islamabad, Karachi",
      "utc": [
        "Asia/Karachi"
      ]
    },
    {
      "value": "India Standard Time",
      "abbr": "IST",
      "offset": 5.5,
      "isdst": false,
      "text": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
      "utc": [
        "Asia/Kolkata"
      ]
    },
    {
      "value": "Sri Lanka Standard Time",
      "abbr": "SLST",
      "offset": 5.5,
      "isdst": false,
      "text": "(UTC+05:30) Sri Jayawardenepura",
      "utc": [
        "Asia/Colombo"
      ]
    },
    {
      "value": "Nepal Standard Time",
      "abbr": "NST",
      "offset": 5.75,
      "isdst": false,
      "text": "(UTC+05:45) Kathmandu",
      "utc": [
        "Asia/Kathmandu"
      ]
    },
    {
      "value": "Central Asia Standard Time",
      "abbr": "CAST",
      "offset": 6,
      "isdst": false,
      "text": "(UTC+06:00) Nur-Sultan (Astana)",
      "utc": [
        "Antarctica/Vostok",
        "Asia/Almaty",
        "Asia/Bishkek",
        "Asia/Qyzylorda",
        "Asia/Urumqi",
        "Etc/GMT-6",
        "Indian/Chagos"
      ]
    },
    {
      "value": "Bangladesh Standard Time",
      "abbr": "BST",
      "offset": 6,
      "isdst": false,
      "text": "(UTC+06:00) Dhaka",
      "utc": [
        "Asia/Dhaka",
        "Asia/Thimphu"
      ]
    },
    {
      "value": "Myanmar Standard Time",
      "abbr": "MST",
      "offset": 6.5,
      "isdst": false,
      "text": "(UTC+06:30) Yangon (Rangoon)",
      "utc": [
        "Asia/Rangoon",
        "Indian/Cocos"
      ]
    },
    {
      "value": "SE Asia Standard Time",
      "abbr": "SAST",
      "offset": 7,
      "isdst": false,
      "text": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
      "utc": [
        "Antarctica/Davis",
        "Asia/Bangkok",
        "Asia/Hovd",
        "Asia/Jakarta",
        "Asia/Phnom_Penh",
        "Asia/Pontianak",
        "Asia/Saigon",
        "Asia/Vientiane",
        "Etc/GMT-7",
        "Indian/Christmas"
      ]
    },
    {
      "value": "N. Central Asia Standard Time",
      "abbr": "NCAST",
      "offset": 7,
      "isdst": false,
      "text": "(UTC+07:00) Novosibirsk",
      "utc": [
        "Asia/Novokuznetsk",
        "Asia/Novosibirsk",
        "Asia/Omsk"
      ]
    },
    {
      "value": "China Standard Time",
      "abbr": "CST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
      "utc": [
        "Asia/Hong_Kong",
        "Asia/Macau",
        "Asia/Shanghai"
      ]
    },
    {
      "value": "North Asia Standard Time",
      "abbr": "NAST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Krasnoyarsk",
      "utc": [
        "Asia/Krasnoyarsk"
      ]
    },
    {
      "value": "Singapore Standard Time",
      "abbr": "MPST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Kuala Lumpur, Singapore",
      "utc": [
        "Asia/Brunei",
        "Asia/Kuala_Lumpur",
        "Asia/Kuching",
        "Asia/Makassar",
        "Asia/Manila",
        "Asia/Singapore",
        "Etc/GMT-8"
      ]
    },
    {
      "value": "W. Australia Standard Time",
      "abbr": "WAST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Perth",
      "utc": [
        "Antarctica/Casey",
        "Australia/Perth"
      ]
    },
    {
      "value": "Taipei Standard Time",
      "abbr": "TST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Taipei",
      "utc": [
        "Asia/Taipei"
      ]
    },
    {
      "value": "Ulaanbaatar Standard Time",
      "abbr": "UST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Ulaanbaatar",
      "utc": [
        "Asia/Choibalsan",
        "Asia/Ulaanbaatar"
      ]
    },
    {
      "value": "North Asia East Standard Time",
      "abbr": "NAEST",
      "offset": 8,
      "isdst": false,
      "text": "(UTC+08:00) Irkutsk",
      "utc": [
        "Asia/Irkutsk"
      ]
    },
    {
      "value": "Japan Standard Time",
      "abbr": "JST",
      "offset": 9,
      "isdst": false,
      "text": "(UTC+09:00) Osaka, Sapporo, Tokyo",
      "utc": [
        "Asia/Dili",
        "Asia/Jayapura",
        "Asia/Tokyo",
        "Etc/GMT-9",
        "Pacific/Palau"
      ]
    },
    {
      "value": "Korea Standard Time",
      "abbr": "KST",
      "offset": 9,
      "isdst": false,
      "text": "(UTC+09:00) Seoul",
      "utc": [
        "Asia/Pyongyang",
        "Asia/Seoul"
      ]
    },
    {
      "value": "Cen. Australia Standard Time",
      "abbr": "CAST",
      "offset": 9.5,
      "isdst": false,
      "text": "(UTC+09:30) Adelaide",
      "utc": [
        "Australia/Adelaide",
        "Australia/Broken_Hill"
      ]
    },
    {
      "value": "AUS Central Standard Time",
      "abbr": "ACST",
      "offset": 9.5,
      "isdst": false,
      "text": "(UTC+09:30) Darwin",
      "utc": [
        "Australia/Darwin"
      ]
    },
    {
      "value": "E. Australia Standard Time",
      "abbr": "EAST",
      "offset": 10,
      "isdst": false,
      "text": "(UTC+10:00) Brisbane",
      "utc": [
        "Australia/Brisbane",
        "Australia/Lindeman"
      ]
    },
    {
      "value": "AUS Eastern Standard Time",
      "abbr": "AEST",
      "offset": 10,
      "isdst": false,
      "text": "(UTC+10:00) Canberra, Melbourne, Sydney",
      "utc": [
        "Australia/Melbourne",
        "Australia/Sydney"
      ]
    },
    {
      "value": "West Pacific Standard Time",
      "abbr": "WPST",
      "offset": 10,
      "isdst": false,
      "text": "(UTC+10:00) Guam, Port Moresby",
      "utc": [
        "Antarctica/DumontDUrville",
        "Etc/GMT-10",
        "Pacific/Guam",
        "Pacific/Port_Moresby",
        "Pacific/Saipan",
        "Pacific/Truk"
      ]
    },
    {
      "value": "Tasmania Standard Time",
      "abbr": "TST",
      "offset": 10,
      "isdst": false,
      "text": "(UTC+10:00) Hobart",
      "utc": [
        "Australia/Currie",
        "Australia/Hobart"
      ]
    },
    {
      "value": "Yakutsk Standard Time",
      "abbr": "YST",
      "offset": 9,
      "isdst": false,
      "text": "(UTC+09:00) Yakutsk",
      "utc": [
        "Asia/Chita",
        "Asia/Khandyga",
        "Asia/Yakutsk"
      ]
    },
    {
      "value": "Central Pacific Standard Time",
      "abbr": "CPST",
      "offset": 11,
      "isdst": false,
      "text": "(UTC+11:00) Solomon Is., New Caledonia",
      "utc": [
        "Antarctica/Macquarie",
        "Etc/GMT-11",
        "Pacific/Efate",
        "Pacific/Guadalcanal",
        "Pacific/Kosrae",
        "Pacific/Noumea",
        "Pacific/Ponape"
      ]
    },
    {
      "value": "Vladivostok Standard Time",
      "abbr": "VST",
      "offset": 11,
      "isdst": false,
      "text": "(UTC+11:00) Vladivostok",
      "utc": [
        "Asia/Sakhalin",
        "Asia/Ust-Nera",
        "Asia/Vladivostok"
      ]
    },
    {
      "value": "New Zealand Standard Time",

      "text": "(UTC+12:00) Auckland, Wellington",

    },
    {
      "value": "UTC+12",

      "text": "(UTC+12:00) Coordinated Universal Time+12",

    },
    {
      "value": "Fiji Standard Time",

      "text": "(UTC+12:00) Fiji",

    },
    {
      "value": "Magadan Standard Time",

      "text": "(UTC+12:00) Magadan",

    },
    {
      "value": "Kamchatka Standard Time",
      "text": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",

    },
    {
      "value": "Tonga Standard Time",

      "text": "(UTC+13:00) Nuku'alofa",

    },
    {
      "value": "Samoa Standard Time",

      "text": "(UTC+13:00) Samoa",

    }
  ]
}
