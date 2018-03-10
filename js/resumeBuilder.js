

var work = {
    jobs:[
        {
            employer:"developer ",
            title:"web developer ",
            location:"Al Qassim",
            dates:"2018",
            description:"work in web developer"

        },{
            employer:"test ",
            title:"test titel",
            location:" test location",
            dates:"2017",
            description:"test description"
        }
    ]

};


var projects = {
    projects:[
        {
            title:"resume",
            dates:"2018",
            description:"build resume project",
            images:["images/197x148.gif","images/197x148.gif"]
        }
    ]
};


var bio = {
    name : "Abdulrahman Alsalamah",
    role : "Web developer",
    welcomeMessage: "Hello World",
    biopic:"images/fry.jpg",
    contacts:{
        mobile:"055XXXXXXX",
        email:"AbdulrahmanAlsalamah18@gmail.com",
        github:"AbdulrahmanAls",
        twitter:"@abdulrahmann__a",
        location:"Al Badaya",
    },
    skills:["smart","love","code","sleep"]
};



var education = {
    schools:[
        {
            name:"Al Bsateen",
            location:"Al Badaya",
            degree:"high school",
            dates:"2014",
            url:"http://example.com/",
            majors:["high school"]

        },
        {

            name:"Qassim University",
            location:"Al Qassim",
            degree:"bachelor",
            dates:"2019",
            url:"http://www.qu.edu.sa/",
            majors:["CS"]
        }
    ],
    onlineCourses:[{
        title:"FEND",
        school:"udacity",
        dates:"2018",
        url:"https://www.udacity.com/"
    }]
};





bio.display = function () {

    var formmattRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formmattRole);

    var formmattName = HTMLheaderName.replace("%data%",bio.name);
    //internationalizeButton name
    bio.name = inName(bio.name);
    $("#header").prepend(formmattName);

    var formmatMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formmatMobile);
    $("#footerContacts").append(formmatMobile);

    var formmatEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formmatEmail);
    $("#footerContacts").append(formmatEmail);

    var formmatGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formmatGithub);
    $("#footerContacts").append(formmatGithub);


    var formmatTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formmatTwitter);
    $("#footerContacts").append(formmatTwitter);

    var formmatLoc = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formmatLoc);
    $("#footerContacts").append(formmatLoc);

    var formattPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattPic);

    var formmatWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formmatWelcome);

    if(bio.skills.length > 0 ){
        $("#header").append(HTMLskillsStart);
        for(var i = 0 ; i < bio.skills.length; i++){
            var formattSkills = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formattSkills);
        }
    }

};

bio.display();

work.display = function () {
    for(var job = 0; job < work.jobs.length; job++){
        $("#workExperience").append(HTMLworkStart);
        var formattEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattEmployerAndTitle = formattEmployer + formattTitle ;
        $(".work-entry:last").append(formattEmployerAndTitle);

        var formattDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattDate);

        var formattDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattDescription);

        var formattLoc = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattLoc);

    }
};

work.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
//     logClicks(x,y);
// });


projects.display = function () {
    if(projects.projects.length > 0){
        for(var i = 0 ; i < projects.projects.length ; i++){
            $("#projects").append(HTMLprojectStart);

            var formattTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            $(".project-entry:last").append(formattTitle);

            var formattDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            $(".project-entry:last").append(formattDates);

            var formattDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(formattDescription);

            if(projects.projects[i].images.length > 0){
                for(var j = 0 ; j < projects.projects[i].images.length; j++){
                    var formattImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattImage);
                }
            }
        }
    }
};

projects.display();


education.display = function() {

    for(var i = 0 ; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);
        var formattSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
        $(".education-entry:last").append(formattSchoolName);

        var formattSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        $(".education-entry:last").append(formattSchoolDegree);

        var formattSchoolDate = HTMLschoolDates.replace("%data%",education.schools[i].dates);
        $(".education-entry:last").append(formattSchoolDate);

        var formattSchoolLoc = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        $(".education-entry:last").append(formattSchoolLoc);

        var formattSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
        $(".education-entry:last").append(formattSchoolMajor);


    }

    for(var j = 0 ; i < education.onlineCourses.length ; j++){
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
        $(".education-entry:last").append(formattTitle);

        var formattonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
        $(".education-entry:last").append(formattonlineSchool);

        var formattonlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattonlineDate);

        var formattonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
        $(".education-entry:last").append(formattonlineURL);


    }

};

education.display();





$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);