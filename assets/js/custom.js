"use strict";

// CLINIC SCHEDULER TOGGLE
	$("#row-mid-scheduler-toggle").click(function(){
		$(".row-mid-scheduler").slideToggle("slow");
		$(".col-addsched-btn").toggleClass("col-addsched-btn-active");
	});

// ADD USER, CLINIC, HOSPITAL, HMO BUTTON ON SECOND NAV

	$("#add-entry-btn-uchh").click(function(){
		$("#add-entry-btn-uchh").toggleClass("eq-ui-collapsible-header-add-entry-active");
		$(".container-addnew-box").slideToggle("slow");	
		$(".container-populated-box").toggle("slow");
	});
	
// SECOND NAV SEARCH Button

	$(".col-sectab-searchbtn").click(function () {
		$(".cstab-search-input").slideToggle("slow"); 
		$(".cstab-search-calendar-input").slideToggle("slow"); 
	});

	
// Appointment Form

	var selector = '#add_appointments li a,.eq-ui-nav-second li a,.eq-ui-list-button ul li a';

	$(selector).on('click active', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});

	$("#clinic_appoint_form,#surgery_appoint_form,#rounds_appoint_form,#blocks_appoint_form,.fields-hidden").hide();

	$("#clinic_appoint").click(function(){
		$("#clinic_appoint_form").slideDown("slow");
		$("#appointment_list_container").hide("slow");
		$("#surgery_appoint_form").hide("slow");
		$("#rounds_appoint_form").hide("slow");
		$("#blocks_appoint_form").hide("slow");
	});

	$("#surgery_appoint").click(function(){
		$("#surgery_appoint_form").slideDown("slow");	
		$("#appointment_list_container").hide("slow");
		$("#clinic_appoint_form").hide("slow");
		$("#rounds_appoint_form").hide("slow");
		$("#blocks_appoint_form").hide("slow");
	});

	$("#rounds_appoint").click(function(){
		$("#rounds_appoint_form").slideDown("slow");	
		$("#appointment_list_container").hide("slow");
		$("#clinic_appoint_form").hide("slow");
		$("#surgery_appoint_form").hide("slow");
		$("#blocks_appoint_form").hide("slow");
	});

	$("#blocks_appoint").click(function(){
		$("#blocks_appoint_form").slideDown("slow");	
		$("#appointment_list_container").hide("slow");
		$("#clinic_appoint_form").hide("slow");
		$("#surgery_appoint_form").hide("slow");
		$("#rounds_appoint_form").hide("slow");
	});

	$("#appointment_clinic #cancel,#appointment_surgery #cancel,#appointment_rounds #cancel,#appointment_blocks #cancel,#appointment_clinic #submit,#appointment_surgery #submit,#appointment_rounds #submit,#appointment_blocks #submit").click(function(){
		$("#appointment_list_container").slideDown("slow");	
		$("#clinic_appoint_form").hide("slow");
		$("#surgery_appoint_form").hide("slow");
		$("#rounds_appoint_form").hide("slow");
		$("#blocks_appoint_form").hide("slow");

	});

	// For title date pick
	$("#main-date").on('change',function() {
	    var value = $(this).val();
	    $(".page_header .cal_month_title").text(value);
	});

	$("#side-date").on('change',function() {
	    var value = $(this).val();
	    $(".sidebar_header .cal_month_title").text(value);
	});

// For Admission & Reminder
	$(".page_header .title-right .select-normal .btn-search").hide();
	$(".page_header .title-right .select-normal .btn-search").click(function(){
		$('#admissions_form_container').hide();
	});
	$(".title-right .dropdown-trigger-div").click(function(){
		$(".page_header .title-right .select-normal .eq-ui-select-wrapper,.eq-ui-dropdown-search").hide();
		$(".page_header .title-right .select-normal .btn-search").show();
	});

	$(".eq-ui-dropdown-div #submit,.eq-ui-dropdown-div #cancel").click(function(){
		$(".eq-ui-dropdown-div").slideUp();
		$(".page_header .title-right .select-normal .eq-ui-select-wrapper").show();
		$(".page_header .title-right .select-normal .btn-search").hide();
		$(".dropdown-trigger-div").removeClass("active");		
	});

// For All

	$(".btn-search").click(function(){
		$(".eq-ui-dropdown-search").slideToggle("slow");
	});

	$(".dropdown-trigger-div").click(function(){
		$(".dropdown-trigger-div").toggleClass("active");
		$(".eq-ui-dropdown-div").slideDown("slow");
	});

	$('.validate-higlight').change(function() {

		$(".disabled input.eq-ui-select-fake").addClass("disabled");

		if ($(this).val().length == 0) {
			$('.disabled').prop({disabled: true});
		} else {
			$('.disabled').removeProp("disabled");
		}
	});

// For All form hidden fields

	$(".input-validate").bind('keyup change',function(){
		$(".select-hidden input.eq-ui-select-fake").addClass("input-validate");
		// get elements that are empty.
		var empty = $('.input-validate').map(function(index, el) {
			return !$(el).val().length ? el : null;
		}).get();
		
		// could also be placed outside of the function
		var hidden = $('.fields-hidden');
		
		// check if there are any empty elements, if there are none, show numbers, else hide number.
		!empty.length ? hidden.slideDown('slow') : hidden.slideUp('slow');
	});

// Cloudpanel Page

	$("#addpatient_content,#admissions_content,#reminder_content,#demographic_content,#attachement_content,#report_content,#medichart_content").hide();

	$("#addpatient-btn").click(function(){
		$("#addpatient_content").slideDown('slow');
		$("#appoinments_content,#admissions_content,#reminder_content,#demographic_content,#medichart_content,#attachement_content,#report_content").hide();
	});
	$("#cloudpanel-btn").click(function(){
		$("#appoinments_content").slideDown('slow');
		$("#addpatient_content,#admissions_content,#reminder_content,#demographic_content,#medichart_content,#attachement_content,#report_content").hide();
	});
	$("#admission-btn").click(function(){
		$("#admissions_content").slideDown('slow');
		$("#addpatient_content,#appoinments_content,#reminder_content,#demographic_content,#medichart_content,#attachement_content,#report_content").hide();
	});
	$("#reminder-btn").click(function(){
		$("#reminder_content").slideDown('slow');
		$("#addpatient_content,#appoinments_content,#admissions_content,#demographic_content,#medichart_content,#attachement_content,#report_content").hide();
	});
	$("#demographic-btn").click(function(){
		$("#demographic_content").slideDown('slow');
		$("#addpatient_content,#appoinments_content,#admissions_content,#reminder_content,#medichart_content,#attachement_content,#report_content").hide();
	});
	$("#medichart-btn").click(function(){
		$("#medichart_content").slideDown('slow');
		$("#addpatient_content,#appoinments_content,#admissions_content,#reminder_content,#demographic_content,#attachement_content,#report_content").hide();
	});
	$("#attachment-btn").click(function(){
		$("#attachement_content").slideDown('slow');
		$("#addpatient_content,#appoinments_content,#admissions_content,#reminder_content,#demographic_content,#medichart_content,#report_content").hide();
	});
	$("#report-btn").click(function(){
		$("#report_content").slideDown('slow');
		$("#addpatient_content,#appoinments_content,#admissions_content,#reminder_content,#demographic_content,#medichart_content,#attachement_content").hide();
	});

// Letters Template

	$('.legal_size,.letter_size').hide();
	$('#paper-size select').change(function(){
		$('.rx_size')[ ($("option[value='rx-sheet']").is(":checked"))? "slideDown" : "slideUp" ]();
		$('.letter_size')[ ($("option[value='letter-sheet']").is(":checked"))? "slideDown" : "slideUp" ]();
		$('.legal_size')[ ($("option[value='legal-sheet']").is(":checked"))? "slideDown" : "slideUp" ]();
	});

// Surgery

	$('#new-sugery-container,#newsurgery_title').hide();
	$('#add-surgery').click(function(){
		$('#surgeries_title,#sugeries-container').slideUp();
		$('#new-sugery-container,#newsurgery_title').slideDown();
		$('#add-surgery').addClass('active');
	});

	$("#newsurgery_form #cancel,#newsurgery_title #back").click(function(){
		$('#new-sugery-container,#newsurgery_title').slideUp("slow");
		$('#surgeries_title,#sugeries-container').slideDown();
		$('#add-surgery').removeClass('active');
	});
					
// Important Jquery

	$('.default-trigger').leanModal({
		dismissible: false,
		opacity: .7,
		in_duration: 300,
		out_duration: 200
	});

	$('.alert-trigger').leanModal({
		dismissible: false,
		opacity: .8,
		in_duration: 300,
		out_duration: 200,
	});

	$('.years-month').pickadate({
		container: 'body',
		selectMonths: true,
		selectYears: true,
		today: false,
		clear: false,
		format: 'mmmm yyyy',
		formatSubmit: 'mmmm yyyy',
		onSet: function (pick) {
		if(pick.select){
		  this.close();
		  }
		},
		klass: {
			holder: 'picker__holder years_month_holder',
		}
	});

	$('.date-format').pickadate({
		container: 'body',
		selectMonths: true,
		selectYears: true,
		today: false,
		clear: false,
		format: 'mmmm dd, yyyy',
		formatSubmit: 'mmmm dd, yyyy',
		onSet: function (pick) {
		if(pick.select){
		  this.close();
		  }
		}
	});

	$('.datepicker').pickadate({
		container: 'body',
		selectMonths: 12,
		selectYears: 130,
		format: 'mm/dd/yyyy',
		min: [1920,1,1],
		max: [2030,12,31],
		closeOnClear: true,
		closeOnSelect: true,
		onSet: function (pick) {
		if(pick.select){
		  this.close();
		  }
		}
	});

	$('.monthly').pickadate({
		container: 'body',
		selectMonths: 12,
		selectYears: 1,
		format: 'mm/dd/yyyy',
		closeOnSelect: true,
		onSet: function (pick) {
		if(pick.select){
		  this.close();
		  }
		}
	});

	$('.search-date').pickadate({
		container: 'body',
		selectMonths: 12,
		selectYears: 1,
		format: 'mm/dd/yy',
		closeOnSelect: true,
		onSet: function (pick) {
		if(pick.select){
		  this.close();
		  }
		}
	});
	
	$('.timepicker').pickatime({
		container: 'body',
		format: 'h:i',
		min: [1,0],
		max: [12,30],
		closeOnSelect: true,
		onSet: function (pick) {
		if(pick.select){
		  this.close();
		  }
		}
	});

	$('.selectpicker').selectpicker({
		liveSearch : true,
		showIcon: true,
		liveSearchPlaceholder : 'Search Here'
	});

	$('.btn-pop').popover({
        placement : 'right',
        container : '#maincontainer'
    });

	// Images lightbox
	var initPhotoSwipeFromDOM = function(gallerySelector) {

	// parse slide data (url, title, size ...) from DOM elements 
	// (children of gallerySelector)
	var parseThumbnailElements = function(el) {
		var thumbElements = el.childNodes,
			numNodes = thumbElements.length,
			items = [],
			figureEl,
			linkEl,
			size,
			item;

		for(var i = 0; i < numNodes; i++) {

			figureEl = thumbElements[i]; // <figure> element

			// include only element nodes 
			if(figureEl.nodeType !== 1) {
				continue;
			}

			linkEl = figureEl.children[0]; // <a> element

			size = linkEl.getAttribute('data-size').split('x');

			// create slide object
			item = {
				src: linkEl.getAttribute('href'),
				w: parseInt(size[0], 10),
				h: parseInt(size[1], 10)
			};



			if(figureEl.children.length > 1) {
				// <figcaption> content
				item.title = figureEl.children[1].innerHTML; 
			}

			if(linkEl.children.length > 0) {
				// <img> thumbnail element, retrieving thumbnail url
				item.msrc = linkEl.children[0].getAttribute('src');
			} 

			item.el = figureEl; // save link to element for getThumbBoundsFn
			items.push(item);
		}

		return items;
	};

	// find nearest parent element
	var closest = function closest(el, fn) {
		return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	};

	// triggers when user clicks on thumbnail
	var onThumbnailsClick = function(e) {
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : e.returnValue = false;

		var eTarget = e.target || e.srcElement;

		// find root element of slide
		var clickedListItem = closest(eTarget, function(el) {
			return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
		});

		if(!clickedListItem) {
			return;
		}

		// find index of clicked item by looping through all child nodes
		// alternatively, you may define index via data- attribute
		var clickedGallery = clickedListItem.parentNode,
			childNodes = clickedListItem.parentNode.childNodes,
			numChildNodes = childNodes.length,
			nodeIndex = 0,
			index;

		for (var i = 0; i < numChildNodes; i++) {
			if(childNodes[i].nodeType !== 1) { 
				continue; 
			}

			if(childNodes[i] === clickedListItem) {
				index = nodeIndex;
				break;
			}
			nodeIndex++;
		}



		if(index >= 0) {
			// open PhotoSwipe if valid index found
			openPhotoSwipe( index, clickedGallery );
		}
		return false;
	};

	// parse picture index and gallery index from URL (#&pid=1&gid=2)
	var photoswipeParseHash = function() {
		var hash = window.location.hash.substring(1),
		params = {};

		if(hash.length < 5) {
			return params;
		}

		var vars = hash.split('&');
		for (var i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');  
			if(pair.length < 2) {
				continue;
			}           
			params[pair[0]] = pair[1];
		}

		if(params.gid) {
			params.gid = parseInt(params.gid, 10);
		}

		return params;
	};

	var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
		var pswpElement = document.querySelectorAll('.pswp')[0],
			gallery,
			options,
			items;

		items = parseThumbnailElements(galleryElement);

		// define options (if needed)
		options = {

			// define gallery index (for URL)
			galleryUID: galleryElement.getAttribute('data-pswp-uid'),

			getThumbBoundsFn: function(index) {
				// See Options -> getThumbBoundsFn section of documentation for more info
				var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect(); 

				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			}

		};

		// PhotoSwipe opened from URL
		if(fromURL) {
			if(options.galleryPIDs) {
				// parse real index when custom PIDs are used 
				// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
				for(var j = 0; j < items.length; j++) {
					if(items[j].pid == index) {
						options.index = j;
						break;
					}
				}
			} else {
				// in URL indexes start from 1
				options.index = parseInt(index, 10) - 1;
			}
		} else {
			options.index = parseInt(index, 10);
		}

		// exit if index not found
		if( isNaN(options.index) ) {
			return;
		}

		if(disableAnimation) {
			options.showAnimationDuration = 0;
		}

		// Pass data to PhotoSwipe and initialize it
		gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};

	// loop through all gallery elements and bind events
	var galleryElements = document.querySelectorAll( gallerySelector );

	for(var i = 0, l = galleryElements.length; i < l; i++) {
		galleryElements[i].setAttribute('data-pswp-uid', i+1);
		galleryElements[i].onclick = onThumbnailsClick;
	}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
	var hashData = photoswipeParseHash();
	if(hashData.pid && hashData.gid) {
			openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	}
	};

	// execute above function
	initPhotoSwipeFromDOM('.gallery');

//  ---------------------------------- JARELL JS

	$('.eq-ui-modal-trigger').leanModal({
		dismissible: false,
		opacity: .7,
		in_duration: 300,
		out_duration: 200
	});
	
//  WHEN CLICK USER / PATIENT
	
	$(".add-entry-box-close").click(function(){
		$(".container-populated-box").show("slow");	
		$(".container-addnew-box").hide("slow");
		
	//	$("#add-entry-btn-uchh").removeClass("eq-ui-collapsible-header-add-entry-active");
	
		$("#add-entry-btn-uchh").delay(300).queue(function(next) {
		  $(this).removeClass("eq-ui-collapsible-header-add-entry-active");
		  next();
		});
		

		//  FOR PATIENT PAGE
	
		$(".patient_profile_form").show("slow");
		$("a.add-entry-box-close-thirdnav-nav").removeClass("active");
		$(".ui_alert_box_show").hide();
		$(".alert-patient-ui-section").hide("slow");
		$(".alert-content-notification-box").hide("slow");
		$(".activity-patient-ui-section").hide("slow");
		$(".attachments-patient-ui-section").hide("slow");
		$("table.tr_alert_box_show tr").removeClass("active");
		$(".ui_alert_box_show_addempty").removeClass("ui_alert_box_show-uibox");
		$(".add-alert-notify-btn-class").removeClass("active");
		$(".ui-alert-addedit-box").removeClass("ui-alert-addedit-box-show");
		$(".ui-alert-addedit-box").removeClass("ui-alert-addedit-box-show2");
		
		$(".attachments-patient-ui-section table tr").removeClass("active");
		$(".ui-attachments-editonly-box").hide("fast");
		$(".add-attachments-notify-btn-class").removeClass("active");
		$(".ui-attachments-addonly-box").removeClass("ui-attachments-addedit-box-show");
	});
	
// SECOND NAV ADD ACTIVE / REMOVE ACTIVE 
	
	$(".add-entry-box-close").click(function () {
		$(".add-entry-box-close").removeClass("active");
		$(this).addClass("active");
		$(".col-third-tab").show('slow');
	});
	
	
// ---THIRD NAV FUNCTIONS

// ----- PATIENT PAGE FUNCTIONS

  // ONLY USER FOR PAGES WITH THIRD NAV

	$(".add-entry-box-close-thirdnav").click(function () {
		
		$(".col-container-populated").delay(300).queue(function(next) {
		  $(this).addClass("col-container-populated-thirdnav-visible");
		  next();
		});
		
		$(".col-container-not-populated").delay(300).queue(function(next) {
		  $(this).addClass("col-container-populated-thirdnav-visible");
		  next();
		});
		
		$("footer").delay(300).queue(function(next) {
		  $(this).addClass("footer-thirdnav-visible");
		  next();
		});
	
		$("body.eq-ui-side-nav-visible button.eq-ui-side-nav-toggle").click();

	});

	$("a.add-entry-box-close-thirdnav-nav").click(function () {
		
		$("a.add-entry-box-close-thirdnav-nav").removeClass("active");
		$(this).addClass("active");
	});

	
	
// /// PATIENT PAGE >>> ALERT CONTENT FUNCTIONS

	$("#alerts-contentbox-show").click(function () {
		
		$(".alert-patient-ui-section").show("slow");
		$(".alert-content-notification-box").show("slow");
		$(".activity-patient-ui-section").hide("slow");
		$(".patient_profile_form").hide("slow");
		$(".attachments-patient-ui-section").hide("slow");
	});

	$("table.tr_alert_box_show tr").click(function () {
		$("table.tr_alert_box_show tr").removeClass("active");
		$(this).addClass("active");
		$(".ui-alert-addedit-box").addClass("ui-alert-addedit-box-show");
		$(".ui-alert-addedit-box").removeClass("ui-alert-addedit-box-show2");
		$(".ui_alert_box_show").addClass("ui_alert_box_show-uibox");
		$(".ui_alert_box_show_addempty").removeClass("ui_alert_box_show-uibox");
		$(".add-alert-notify-btn-class").removeClass("active");
	});

	$("#cancel_alertbox, #cancel_alertbox2").click(function () {
		$("table.tr_alert_box_show tr").removeClass("active");
		$(".ui_alert_box_show_addempty").removeClass("ui_alert_box_show-uibox");
		$(".add-alert-notify-btn-class").removeClass("active");
		$(".ui-alert-addedit-box").removeClass("ui-alert-addedit-box-show");
		$(".ui-alert-addedit-box").removeClass("ui-alert-addedit-box-show2");
	});
	
	$("#add-alert-notify-btn").click(function () {
		$(".add-alert-notify-btn-class").toggleClass("active");
		$(".ui_alert_box_show_addempty").toggleClass("ui_alert_box_show-uibox");
		$(".ui-alert-addedit-box").toggleClass("ui-alert-addedit-box-show2");
		$(".ui_alert_box_show").removeClass("ui_alert_box_show-uibox");
		$("table.tr_alert_box_show tr").removeClass("active");
		$(".ui-alert-addedit-box").removeClass("ui-alert-addedit-box-show");
		
	});

// /// PATIENT PAGE >>> ACTIVITY CONTENT FUNCTIONS

	
	$("#activity-contentbox-show").click(function () {
		
		$(".activity-patient-ui-section").show("slow");
		$(".alert-patient-ui-section").hide("slow");
		$(".patient_profile_form").hide("slow");
		$(".alert-content-notification-box").hide("slow");
		$(".attachments-patient-ui-section").hide("slow");
	});

// /// PATIENT PAGE >>> ATTACHMENTS CONTENT FUNCTIONS

	
	$("#attachments-contentbox-show").click(function () {
		
		$(".attachments-patient-ui-section").show("slow");
		$(".activity-patient-ui-section").hide("slow");
		$(".alert-patient-ui-section").hide("slow");
		$(".patient_profile_form").hide("slow");
		$(".alert-content-notification-box").hide("slow");
	});	
	
	$("#add-attachments-notify-btn").click(function () {
		$(".add-attachments-notify-btn-class").toggleClass("active");
		$(".ui-attachments-addedit-box").toggleClass("ui-attachments-addedit-box-show");
		$(".ui-attachments-addonly-box").toggleClass("ui-attachments-addedit-box-show");
		$(".ui-attachments-editonly-box").removeClass("ui-attachments-addedit-box-show")
		$(".ui-attachments-editonly-box").hide("slow");
		$(".attachments-patient-ui-section table tr").removeClass("active");
	});
	
	$("#cancel_addattachment").click(function () {
		$(".add-attachments-notify-btn-class").removeClass("active");
		$(".ui-attachments-addonly-box").removeClass("ui-attachments-addedit-box-show");
	});
		
	$(".attachments-patient-ui-section table tr").click(function () {
		$(".attachments-patient-ui-section table tr").removeClass("active");
		$(this).addClass("active");
	});	
	
	$(".attachments-patient-ui-section table tr td").click(function () {
		$(".ui-attachments-addedit-box").addClass("ui-attachments-addedit-box-show");
		$(".ui-attachments-addonly-box").hide("slow");
		$(".ui-attachments-addonly-box").removeClass("ui-attachments-addedit-box-show")
		$(".add-attachments-notify-btn-class").removeClass("active");
		$(".ui-attachments-editonly-box").show("slow");
	});	
	
		$("#cancel_editattachment").click(function () {
		$(".attachments-patient-ui-section table tr").removeClass("active");
		$(".ui-attachments-editonly-box").hide("fast");
	});
	

// FOLLOWUP / DISCHARGE 

	 $('#followup_discharge_starttime, #followup_discharge_starttime_ampm, #followup_discharge_clinic, #discharge_textarea_2 ').attr('disabled',true);
	 $('#fup_visit_discharge_date_daily,#fup_visit_discharge_date_alarm , #fup_visit_discharge_startdate, #fup_visit_discharge_enddate, #fup_discharge_visit_starttime, #fup_discharge_visit_starttime_ampm, #fup_discharge_visit_endtime, #fup_discharge_visit_endtime_ampm, #fup_discharge_visit_alarmtrigger ').attr('disabled',true);
	 
	 

		if($('.followupdate').val() == '' ){$('.fupdate_showhide').hide('slow');}  
			$('.followupdate').on('change' , function() {
				 if( this.value != ''){
					 $('.fupdate_showhide').show('slow');
					 $('#followup_discharge_starttime-fake, #followup_discharge_starttime_ampm-fake, #followup_discharge_clinic-fake, #discharge_textarea_2 ').attr('disabled',false);
					 $('#fup_discharge_visit_starttime-fake, #fup_discharge_visit_starttime_ampm-fake, #fup_discharge_visit_endtime-fake, #fup_discharge_visit_endtime_ampm-fake, #fup_discharge_visit_alarmtrigger-fake ').attr('disabled',false);
					 $('#fup_visit_discharge_startdate, #fup_visit_discharge_enddate, #fup_visit_discharge_date_daily, #fup_visit_discharge_date_alarm').attr('disabled',false);
					 
				  }
				  else{
					 $('.fupdate_showhide').hide('slow'); 
					 $('#followup_discharge_starttime-fake, #followup_discharge_starttime_ampm-fake, #followup_discharge_clinic-fake, #discharge_textarea_2 ').attr('disabled',true);
					 $('#fup_discharge_visit_starttime-fake, #fup_discharge_visit_starttime_ampm-fake, #fup_discharge_visit_endtime-fake, #fup_discharge_visit_endtime_ampm-fake, #fup_discharge_visit_alarmtrigger-fake ').attr('disabled',true);
					 $('#fup_visit_discharge_startdate, #fup_visit_discharge_enddate, #fup_visit_discharge_date_daily, #fup_visit_discharge_date_alarm').attr('disabled',true);
				 }
			});

			
// SEARCH CASE RATE
	
			$("#searchcaserate_section_modal_open").click(function () {
				$(".eq-ui-modal-overlay").addClass("eq-ui-modal-overlay-searchcaserate");
				$("#searchcaserate_section_modalclose").show();
				$("#searchcaserate_section_modal_open").hide();				
			});
			
			$("#searchcaserate_section_modalclose").click(function () {	
				$(".eq-ui-modal-overlay").removeClass("eq-ui-modal-overlay-searchcaserate");
				$("#searchcaserate_section_modalclose").hide();
				$("#searchcaserate_section_modal_open").show();
				$('#searchcaserate_section').closeModal();				
			});

	
// /// END PATIENT PAGE FUNCTIONS

//  ---------------------------------- END JARELL JS