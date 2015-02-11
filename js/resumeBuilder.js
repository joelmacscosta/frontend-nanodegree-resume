
var skills = ["Web Developer","Business Analyst"];

var bio = {
	"name" : "Joelma Costa",
	"role" : "Web Developer",
	"contactInfo" : "joelmacscosta@gmail.com",
	"pictureURL" : "images/me.jpeg",
	"welcomeMessage" : "Welcome to know a little bit about me.",
	"skills" : skills
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLemail.replace("%data%",bio.contactInfo);
var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedPicture);
$("#header").prepend(formattedContact);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
