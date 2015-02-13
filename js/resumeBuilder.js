var bio = {
	"name" : "Joelma Costa",
	"role" : "Web Developer",
	"contacts" : {
	 "mobile":"+55-11-9-9223-9449",
	 "email":"joelmacscosta@gmail.com",
	 "github":"joelmacscosta",
	 "location":"São Paulo"
	},
	"welcomeMessage" : "Welcome to know a little bit about me.",
	"skills" : ["Web Developer","Business Analyst"],
	"bioPic" : "images/me.jpeg"

}

var work = {};
work.position = "Business Analyst";
work.employer = "Itaú";
work.years = 3.7;


var education = {};
education["name"] = "UNICAMP - State University of Campinas";
education["years"] = "2007-2010";
education["city"] = "Campinas";

$("#main").append(work["position"]);
$("#main").append(education.name);