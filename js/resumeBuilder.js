var bio = {
  "name" : "Joelma Costa",
  "role" : "Web Developer",
  "contacts" : {
   "mobile":"+55-11-9-9223-9449",
   "email":"joelmacscosta@gmail.com",
   "github":"joelmacscosta",
   "location":"São Paulo"
 },
 "welcomeMessage" : "Welcome to discover a little bit about me.",
 "skills" : ["Web Developer","Optimization", "Real-time control", "Fuzzy Logic"],
 "bioPic" : "images/me.jpg"
};

var work = {
  "jobs": [
  {
    "title": "Business Analyst",
    "employer": "Itaú",
    "date": "2011 - Current",
    "location":"São Paulo-SP"
  },
  {
    "title": "Developer",
    "employer": "CFlex",
    "date": "2007 - 2011",
    "location":"Campinas-SP"
  }
  ]
};
var projects = {
  "projects": [
  {
    "title": "Aplication of fuzzy logic in the construction of a chain Ising model",
    "date": "2006",
    "description": "The traditional chain Ising model was proposed, initially, to explain physical properties as magnetic properties in metals, for example. However, this model has been applied in many other areas; for instance, neural networks, biology, economy, political science and others, if linguistic parameters (“fuzzy”) are included in the model. The purpose of this work is to introduce the fuzzy logic in the Ising model to extend its applicability to other areas. To this end, a chain Ising model with non-symmetric spins was built and, as an extension the non-symmetric spins were considered as being fuzzy numbers. The fuzzy chain Ising model was constructed by the principle of fuzzy extension in each thermodynamic quantity calculated. In the definition of asymmetric spins it was used three types of pertinence: thetriangular function, the Gaussian function with the same width as the triangular one and, a Gaussian function centered around the exact values of the original spins. The results were presented in the thermodynamic quantities of free energy and entropy. Comparisons among the behavior of thermodynamic quantities for each function of pertinence and the related results of the traditional Ising chain model were made. ",
    "image" : "images/fuzzy.jpg"
  },
  {
    "title": "Real time rail freight cars assignment algorithm",
    "date": "2010",
    "description": "The empty car distribution and allocation process of railroads is dynamic and involves complex mechanisms of planning. Formally, the empty car distribution and allocation process can be formulated as a resource allocation problem whose solution is a car-demand allocation. The decision making on distribution and allocation requires that the decision-maker responds quickly to answer transportation requests that could be created, canceled or modified. Empty car distribution and allocation planning is constantly reviewed during railroad operation. This paper suggests an algorithm to solve real time planning of empty car distribution and allocation problems. The algorithm is based in a combination of a network flow model with the train schedule, train routes and operation knowledge. Experimental results show that the proposed model provides more realistic and efficient solutions for the distribution and allocation than alternative methods when considering the quality of solution and computational performance.",
    "image" : "images/optimization.jpg"
  }
  ]
};

var education =
{
  "schools":
  [
  {
    "name": "UNICAMP - State University of Campinas",
    "city": "Campinas",
    "degree": "Masters",
    "major":
    [
    "Software Enginner",
    "Fuzzy Logic",
    "Optimization"
    ],
    "minor":
    [
    "Real-time Control",
    "Optimization"
    ],
    "years": "2007-2010"
  },
  {
    "name": "Federal University of Lavras",
    "city": "Lavras",
    "degree": "Graduation",
    "major":
    [
    "Computer Science"
    ],
    "minor":
    [
    "Fuzzy Logic",
    "Statistical Physics",
    "Algebraic Computation"
    ],
    "years": "2002-2006"
  }
  ],
  "onlineCourses":
  [
  {
    "title": "Web Development",
    "school": "Udacity",
    "dates": 2013,
    "url": "https://www.udacity.com/course/cs253"
  },
  {
    "title": "Web Application Architectures",
    "school": "Coursera",
    "dates": 2014,
    "url": "https://www.coursera.org/course/webapplications"
  },
  {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": 2015,
    "url": "https://www.udacity.com/course/ud804"
  }
  ]
};


var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName+formattedRole);


var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLocation);
$("#footerContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedBioPic+formattedWelcomeMsg);

if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
  // document.getElementById('topContacts').style.display = 'none';
}
function displayEducation()
{
  $("#education").append(HTMLschoolStart);
  for(school in education.schools){
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].years);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolDates+formattedSchoolLocation);
  }
}
function displayProjects()
{
  $("#projects").append(HTMLprojectStart);
  for(project in projects.projects){
    var formattedTitleJob = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedDateJob = HTMLprojectDates.replace("%data%",projects.projects[project].date);
    var formattedDescriptionJob = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedImageJob = HTMLprojectImage.replace("%data%",projects.projects[project].image);
    $(".project-entry:last").append(formattedTitleJob+formattedDateJob+formattedDescriptionJob+formattedImageJob);
  }
}
function displayWork()
{
  for (job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer+formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].date);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();
displayProjects();
displayEducation();

var value = $(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function logClicks(x,y)
{
  console.log(x+", "+y);
}
