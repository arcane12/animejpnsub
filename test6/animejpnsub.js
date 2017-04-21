<script type="text/javascript">

/*-----   Change info here   -----*/
var anime_title = "template"
var jlinks = {
  "episode01": {
    "name": "01",
    "video": "https://lh3.googleusercontent.com/xH65expd0WkI7FjDCnQ9YmRuPuRI8zwnVdIdDpD6QZjjcoUNhHrCiQ-wEaF1mMHienk6PVb97_zjv6uAKn0flonBZusPCvU3mR6FqsX8fTacFPe7HYFvQZiBQx-P4BTma4EUDQ=m22",
    "subtitles": {
      "Japanese": "https://dl.dropboxusercontent.com/s/dckm0stg56zbbai/witch1.vtt",
      "English": "https://dl.dropboxusercontent.com/s/0x4u50qgd7n6t2b/witch1%20eng.vtt"
    }
  },
  "episode02": {
    "name": "02",
    "video": "https://lh3.googleusercontent.com/76eVBU66ka8ryaLvFeC0KckdPNArxFQXeYcl04z5X3y6wTJ90ZRL96NI99XpNClL7XKW1mH086XRXia9HluNy4zuFHXpPk5KymGlbzw4RRwQcKxUQmgB3aWvHiPyk-l_pH990g=m22",
    "subtitles": {
      "Japanese": "https://dl.dropboxusercontent.com/s/5efnetbp1bimq68/witch2.vtt",
      "English": "https://dl.dropboxusercontent.com/s/72hu5pwnwoi4d0b/witch2%20eng.vtt"
    }
  },
  "episode03": {
    "name": "03",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode04": {
    "name": "04",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode05": {
    "name": "05",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode06": {
    "name": "06",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode07": {
    "name": "07",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode08": {
    "name": "08",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode09": {
    "name": "09",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode10": {
    "name": "10",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode11": {
    "name": "11",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  },
  "episode12": {
    "name": "12",
    "video": "",
    "subtitles": {
      "Japanese": "",
      "English": ""
    }
  }
};
</script>

<!-- Title and Links -->
<h2>NOW WATCHING:&nbsp;<span style="color: #990000; font-size: x-large;" id="video-title"></span></h2>
<div class="content" style="background-color: white; font-family: arial, tahoma, geneva, sans-serif; padding: 10px; font-weight: bold;">
	<span style="font-size: large;" id="episode-links">Eps:&nbsp;</span>
</div>

<!-- Video and Subtitles -->
<div id="div-left" style="float:left">
	<div id="loading-message" style="margin: 0 auto; width:640px; text-align:center;">Loading...</div>
	<div id="video-container" style="display:none;">
		<video id="videoPlayer" class="video-js vjs-big-play-centered" width="640" height="360" controls></video>
	</div>
	<div id="subtitles_display" class="advanced_subtitles" style="text-align:center;"></div>
</div>
<div id="div-right" style="float:left; text-align:center; width:300px">
	<input id="subtitles_button" value="Click to Hide/Show Advanced Subtitles" type="button" onclick="toggleAdvSub()">
	<div id="subtitles-navigation" class="advanced_subtitles">
		<div>
			<select size='5' id='results' onchange='playCaption(this)' style='width:100%; height:240px' ></select>
		</div>
		<div style="color:#0000FF; font-size:0.75em; margin-top:6px;">Click a line to jump to that point in the video.<br>Then use up/down arrows to navigate by line.</div>
		<hr>
		<div id="subtitles_controls"></div>
	</div>
</div>

<script src="https://vjs.zencdn.net/5.8.8/video.js"></script>
<script src="https://cdn.sc.gl/videojs-hotkeys/latest/videojs.hotkeys.min.js"></script>
<script src="https://gitcdn.link/repo/arcane12/animejpnsub/master/test6/animejpnsub.js"></script>
