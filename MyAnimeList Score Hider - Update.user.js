    // ==UserScript==
    // @name         MyAnimeList Score Hider - Update
    // @namespace    https://example.com
    // @version      2022.1
    // @description  Make MAL Scores better, Now werks for manga.
    // @author       Bananaman + Cyber Cat
    // @match        https://myanimelist.net/anime/*
    // @match        https://myanimelist.net/anime.php?id=*
    // @match        https://myanimelist.net/manga/*
    // @match        https://myanimelist.net/manga.php?id=*
    // @exclude      https://myanimelist.net/anime/season/*
    // @grant        none
    // @run-at       document-end
    // @license MIT
    // ==/UserScript==
     
    (function($) {
    	var $score = $(".score");
    	
    	// Get score, store in variable and strip whitespace.
    	var scoreText = $score.text();
    	scoreText = scoreText.replace(/\s+/g, '');
    	
    	// Remove the score from the DOM.
    	$score.text("");
    	
    	// Get the CSS done now.
    	$score.css("cursor", "pointer");
    	
    	// Figure out verdict for show.
    	var verdict;
    	switch (true) {
    		case (scoreText >= 7):
    			verdict = "Gud";
    			break;
    		case (scoreText >= 5):
    			verdict = "Meh";
    			break;
    		default:
    			verdict = "Nah";
    			break;
    	};
    	
    	// Insert the divs.
    	var $verdictDiv = $("<div>");
    	$verdictDiv.attr("id", "verdict");
    	$verdictDiv.text(verdict);
    	$score.append($verdictDiv);
    	
    	var $scoreDiv = $("<div>");
    	$scoreDiv.attr("id", "score");
    	$scoreDiv.css({
    		"display": "none"
    	});
    	$scoreDiv.text(scoreText)
    	$score.append($scoreDiv);
    	
    	// Add the event listener.
    	$score.on("click", "div", function() {
    		$(this).hide().siblings().show();
    	})
    })(jQuery)

