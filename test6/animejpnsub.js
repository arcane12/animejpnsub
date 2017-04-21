"use strict"

if ( getQueryFieldValue("v") && jlinks[getQueryFieldValue("v")] !== undefined) {
	var episode = getQueryFieldValue("v");

	// Add titles
	document.title = anime_title + " " + jlinks[episode].name + " - Anime Japanese Subtitles";
	$("#video-title").html(anime_title + " " + jlinks[episode].name);
	
	// Add links
	Object.keys(jlinks).forEach(function(key){
		if (key == episode)
			$("#episode-links").append("&nbsp;", jlinks[episode].name, "&nbsp;");
		else
			$("#episode-links").append("&nbsp;", $("<a></a>", { href: "?v=" + key }).html(jlinks[key].name), "&nbsp;");
	});
	
	// Initialize VideoJS
	var vjs = videojs(document.getElementById("videoPlayer"), {
		"html5": { nativeTextTracks: false }
	});
	
	// Add source
	vjs.src({type: "video/mp4", src: jlinks[episode].video});
	
	// Load subtitles
	loadSubs();
	
	vjs.ready(function() {
		// Enable hotkeys
		this.hotkeys({
			volumeStep: 0.1,
			seekStep: 5,
			alwaysCaptureHotkeys: true,
			enableVolumeScroll: false,
			enableNumbers: false,
			enableModifiersForNumbers: false,
			customKeys: {
				ccKey: {
					key: function(event) {
						// Toggle something with C Key
						return (event.which === 67);
					},
					handler: function(player, options, event) {
						// Toggles the CC button
						var tracks = vjs.textTracks();
						for (var i=0; i < tracks.length; i++) {
							var track = tracks[i];
							if (track.mode === "showing") {
								// disable current
								track.mode = "disabled";
								if ( i < tracks.length - 1) {
									// enable next if current is not last
									tracks[i+1].mode = "showing";
								}
								break
								return
							} else if ( i === tracks.length - 1 ) {
								// enable first if all disabled
								tracks[0].mode = "showing";
								break
								return
							}
						}
					}
				}
			}
		});
		
		// Show video
		$("#loading-message").remove();
		$("#video-container").show();
	});
	
} else {
	window.location.href = "?v=" + Object.keys(jlinks)[0];
}

function loadSubs() {
	var l=-1;
	Object.keys(jlinks[episode].subtitles).forEach(function(label){
		l++;
		
		// Add tracks
		vjs.addRemoteTextTrack({
			src: jlinks[episode].subtitles[label],
			label: label,
			kind: "captions"
		});
		
		var track = vjs.textTracks()[l];
		
		// Initialize track
		track.mode = "showing";
		track.mode = "disabled";
			
		// Add display
		$("<div></div>", {
			id: "pre_"+label,
			style: "white-space:pre;" })
			.html("<br>")
			.appendTo( $("#subtitles_display") )
			.hide();
		
		// Add checkboxes
		$("<label></label>", {
			for: "box"+label,
			style: "display:inline-block" })
			.append( $("<input>", {
				type: "checkbox",
				id: "box"+label,
				style: "margin-left: 25px",
				value: label })
				.change(function() {
					if (this.checked)
						$("#pre_"+this.value).show();
					else
						$("#pre_"+this.value).hide();
				})
			,label)
			.appendTo( $("#subtitles_controls") );
		
		if (label == "Japanese") {
			track.on("loadeddata", function(){
				// Automatically display Japanese
				$("#box"+this.label).attr("checked", true);
				$("#pre_"+this.label).show();
				
				// Load Japanese captions
				loadCaptions(this.cues);
			});
		}
		
		// Update display
		track.addEventListener('cuechange', function() {
			var cue = this.activeCues[0];
			var pre = document.getElementById("pre_"+this.label);
			if (cue) {
				pre.innerHTML = "";
				pre.appendChild(cue.getCueAsHTML());
			} else
				pre.innerHTML = "<br>";
		});
		
	});
}

function loadCaptions(cues) {
	for (var i=0; i < cues.length; i++) {
		var x = cues[i].getCueAsHTML();
		var option = document.createElement("option");
		option.text = x.textContent;
		option.setAttribute('data-time', cues[i].startTime);
		document.getElementById('results').add(option);
	}
}

function playCaption(control) {
	var t = control.options[control.options.selectedIndex].getAttribute('data-time');
	vjs.currentTime(t);
}

function toggleAdvSub() {
	$(".advanced_subtitles").toggle();
}

function getQueryFieldValue(field) {
	var query = window.location.search.substring(1).split("&");
	for (var i=0; i < query.length; i++) {
		var pair = query[i].split("=");
		if(pair[0] == field){return pair[1];}
	}
	return(false);
}
