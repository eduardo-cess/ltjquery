import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.main.events({
  'click button':function(event, instance) {
  	$("p").toggle();
  	//alert('asdaf');
  },
});

Template.alterandoHTML.events({
  'submit form':function(event, instance) {
  	event.preventDefault();
  	$("#conteudoHTML").html($('input#teste').val());
  	
  },
});

Template.inserindoHTML.events({
  'click #append':function(event, instance) {
  	event.preventDefault();
  	$("ol").append("<li>"+$('input#teste').val()+"<li>");
  	
  },

    'click #prepend':function(event, instance) {
  	event.preventDefault();
  	$("ol").prepend("<li>"+$('input#teste').val()+"<li>");
  	
  },
});

Template.adicionarHTML.events({
  'click #append':function(event, instance) {
  	event.preventDefault();
  	$("#conteudoHTML").after($('input#teste').val());
  	
  },

    'click #prepend':function(event, instance) {
  	event.preventDefault();
  	$("#conteudoHTML").before($('input#teste').val());
  	
  },
});

Template.css.events({
  'click #append':function(event, instance) {
  	$("p").css("background-color", "red");
  	
  },

    'click #prepend':function(event, instance) {
  	$("p").css("background-color", "green");
  	
  },
});




